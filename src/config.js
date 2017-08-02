const convict = require('convict');

const config = convict({
  ipaddress: {
    doc: 'IP the application runs on',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'OPENSHIFT_NODEJS_IP',
  },
  port: {
    doc: 'Port the application listens on',
    format: 'port',
    default: '3030',
    env: 'OPENSHIFT_NODEJS_PORT',
  },
  api: {
    proxy: {
      doc: 'API URL',
      format: String,
      default: 'http://127.0.0.1:3030/api/',
      env: 'NEWS_PROXY_URL',
    },
    url: {
      doc: 'API URL',
      format: String,
      default: 'http://127.0.0.1:3000/api/',
      env: 'NEWS_API_URL',
    },
  },
  redis: {
    host: {
      doc: 'REDIS HOST',
      format: String,
      default: '127.0.0.1',
      env: 'OPENSHIFT_REDIS_HOST',
    },
    port: {
      doc: 'REDIS PORT',
      format: String,
      default: '6379',
      env: 'OPENSHIFT_REDIS_PORT',
    },
    password: {
      doc: 'REDIS PASSWORD',
      format: String,
      default: '',
      env: 'REDIS_PASSWORD',
    },
  },
  secret: {
    doc: 'session secret',
    format: String,
    default: 'kolbe',
  },
});

config.validate();

module.exports = config;
