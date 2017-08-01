import { isArray } from 'lodash';

import RequestUtil from '../../utils/requestUtil';
import constants from '../../../constants';

export const REQUEST_NEWS = 'REQUEST_NEWS';
export const NEWS_RECEIVED = 'NEWS_RECEIVED';

function requestNews(groupId) {
  return {
    type: REQUEST_NEWS,
  };
}

function receiveNews(data) {
  return {
    type: NEWS_RECEIVED,
    news: data.entity.data,
    receivedAt: Date.now(),
  };
}

function getNewsHelper() {
  return (dispatch) => {
    dispatch(requestNews());
    return RequestUtil.get(`${constants.proxyUrl}news`)
      .then(response => dispatch(receiveNews(response)));
  };
}

function shouldFetchNews(state) {
  const news = state.newsHelper || {};
  return !isArray(news.data) || !news.data.length;
}

export function getNews() {
  return (dispatch, getState) => {
    if (shouldFetchNews(getState())) {
      return dispatch(getNewsHelper());
    }
    return null;
  };
}
