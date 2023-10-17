const { v4: uuidv4 } = require("uuid");

const {
  getReservationErrors,
  getOccupancy,
  REQUEST_STATUS,
  RESERVATION_STATUS,
} = require("../../support/reservation-service");
const dynamoService = require("../../support/dynamo-service");
const emailService = require("../../support/email-service");
const backblazebService = require("../../support/backblaze-service");

exports.handler = async function (event, _context) {
  if (!event.body) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: REQUEST_STATUS.EMPTY_BODY,
      }),
    };
  }

  let reservation;
  try {
    reservation = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: REQUEST_STATUS.INVALID_FORMAT,
        message: error.toString(),
      }),
    };
  }

  const errors = getReservationErrors(reservation);
  if (errors.length) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: REQUEST_STATUS.INVALID_DATA,
        message: errors,
      }),
    };
  }

  reservation.uuid = uuidv4();
  reservation.status = RESERVATION_STATUS.REQUESTED;
  const occupancy = getOccupancy(reservation);

  const cabinAvailability = await dynamoService.getCabinAvailability(occupancy);
  if (cabinAvailability.Responses?.occupancy?.length) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: REQUEST_STATUS.INVALID_DATES,
        message: cabinAvailability.Responses.occupancy,
      }),
    };
  }

  try {
    await dynamoService.saveReservation(reservation);
    await dynamoService.saveOccupancy(occupancy);
  } catch (error) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: REQUEST_STATUS.DB_ERROR,
        message: error.toString(),
      }),
    };
  }

  await Promise.all([
    emailService.sendReservationEmail(reservation),
    backblazebService.generateCalendar(),
  ]);

  return {
    statusCode: 201,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: REQUEST_STATUS.SUCCESS,
    }),
  };
};
