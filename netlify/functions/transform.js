const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

exports.handler = async function (_event, _context) {
  const html = fs.readFileSync("cars.html", { encoding: "utf8", flag: "r" });

  const dom = new JSDOM(html, { runScripts: "dangerously" });

  const cars = dom.window.pageData.search.vehicles.map((item) => ({
    year: item.year,
    model: item.model,
    vin: item.vin,
    dealerPrice: item.dealer_price,
    price: item.roadster_price,
    make: item.make,
    mileage: item.mileage,
    image: item.images[0],
    engine: item.engine?.label,
    type: item.engine?.type,
    msrp: item.msrp,
    transmission: item.transmission?.type,
    cityMpg: item.style?.city_mpg,
    highwayMpg: item.style?.highway_mpg,
    doors: item.style?.doors,
    link: `https://acceleride.vwofkearnymesa.com/express/used/${item.vin}`,
    body: item.body,
    drivetrain: item.drivetrain
  }))

  fs.writeFileSync("cars_db.js", `module.exports = ${JSON.stringify(cars)}`);

  return {
    statusCode: 200,
    body: JSON.stringify(cars),
  };
};
