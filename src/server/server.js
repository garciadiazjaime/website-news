import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import config from '../config';
import apiRoutes from './routes/apiRoutes';

const app = express();

app.use(morgan('dev'));

app.set('views', './src/server/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(express.static('static'));

app.use('/api', apiRoutes);

app.get('/health', (req, res) => {
  res.writeHead(200);
  res.end();
});

app.get('/*', (req, res) => {
  res.render('index', {
    proxyUrl: config.get('api.proxy'),
  });
});

app.set('ipaddress', config.get('ipaddress'));
app.set('port', config.get('port'));

const server = app.listen(app.get('port'), app.get('ipaddress'), (err) => {
  if (err) {
    console.log(`server listen error: ${err}`);
  } else {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`App listening at http://${host}:${port}`);
  }
});
