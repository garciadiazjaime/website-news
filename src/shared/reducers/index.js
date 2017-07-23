import { combineReducers } from 'redux';
import newsHelper from './newsReducer';

const rootReducer = combineReducers({
  newsHelper,
});

export default rootReducer;
