const convict = require('convict');

const config = convict({
  ipaddress: {
    doc: 'IP the application runs on',
    format: 'ipaddress',
    default: '0.0.0.0',
  },
  port: {
    doc: 'Port the application listens on',
    format: 'port',
    default: '3075',
  },
  api: {
    url: {
      doc: 'API URL',
      format: String,
      default: 'http://127.0.0.1:3000/api',
      env: 'API_URL',
    },
  },
  redis: {
    host: {
      doc: 'REDIS HOST',
      format: String,
      default: '127.0.0.1',
      env: 'REDIS_PORT_6379_TCP_ADDR',
    },
    port: {
      doc: 'REDIS PORT',
      format: String,
      default: '6379',
      env: 'REDIS_PORT_6379_TCP_PORT',
    },
  },
});

config.validate();

module.exports = config;
