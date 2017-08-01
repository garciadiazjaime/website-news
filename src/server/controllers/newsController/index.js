import RequestUtil from '../../../shared/utils/requestUtil';
import config from '../../../config';

export default class NewsController {

  static list() {
    return RequestUtil.get(`${config.get('api.url')}news`);
  }
}
