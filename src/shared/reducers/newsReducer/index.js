import { REQUEST_NEWS, NEWS_RECEIVED } from '../../actions/newsActions';


function news(state = {
  isProcessing: false,
  didInvalidate: false,
  data: [],
}, action) {
  switch (action.type) {
    case REQUEST_NEWS:
      return Object.assign({}, state, {
        isProcessing: true,
        didInvalidate: false,
      });
    case NEWS_RECEIVED:
      return Object.assign({}, state, {
        isProcessing: false,
        didInvalidate: false,
        data: action.news,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

export default function newsHelper(state = { }, action) {
  switch (action.type) {
    case REQUEST_NEWS:
    case NEWS_RECEIVED:
      return news(state.news, action);
    default:
      return state;
  }
}
