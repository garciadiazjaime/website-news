import rest from 'rest';
import mime from 'rest/interceptor/mime';
import errorCode from 'rest/interceptor/errorCode';
import { assign } from 'lodash';

const client = rest
  .wrap(mime, { mime: 'application/json' })
  .wrap(errorCode, { code: 300 });

export default class RequestUtil {

  static get(url) {
    const config = { path: url };
    return client(config);
  }

  /*
    Request method post
    @param {string} string
    @param {data} data
    @returns {object}
  */
  static post(url, data) {
    const config = {
      method: 'POST',
      path: url,
      entity: data,
    };
    return client(config);
  }

  static put(url, data) {
    const config = {
      method: 'PUT',
      path: url,
      entity: data,
    };
    return client(config);
  }

  static delete(url) {
    const config = {
      method: 'DELETE',
      path: url,
    };
    return client(config);
  }
}
