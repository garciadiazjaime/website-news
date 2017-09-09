import redis from 'redis';
import RequestUtil from '../../../shared/utils/requestUtil';
import config from '../../../config';

const client = redis.createClient({
  host: config.get('redis.host'),
  port: config.get('redis.port'),
  password: config.get('redis.password'),
});
const redisNewsKey = 'website-news:news';
const redisExpiration = 30; // 30 mins

export default class NewsController {

  // Checks if value it's on cache (redis) otherwise calls api
  // @return {Promise} fullfill with cache value or api response
  static list() {
    return new Promise((resolve, reject) => {
      client.get(redisNewsKey, (err, reply) => {
        if (err) {
          return reject(err);
        }
        if (!reply) {
          RequestUtil.get(`${config.get('api.url')}news`)
            .then((response) => {
              if (response.entity.status) {
                client.set(redisNewsKey, JSON.stringify(response.entity.data), 'EX', redisExpiration); // 30 mins
              }
              resolve(response.entity);
            })
            .catch(error => reject(error));
        } else {
          resolve({
            status: true,
            data: JSON.parse(reply),
          });
        }
      });
    });
  }
}
