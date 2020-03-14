import express from 'express';
import path from 'path';

import helmet from 'helmet';
import bodyParser from 'body-parser';

import mongoose from 'mongoose';
import routes from './routes';

const app = express();

app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/shopify-monitor', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

for (const route of routes) app[route.method](route.path, route.internalHandle);

const PUBLIC_PATH = path.join(__dirname, '..', 'public', 'index.html');
console.log(PUBLIC_PATH);

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(PUBLIC_PATH);
});

app.listen(process.env.PORT || 3000, () => console.log(`Server listening on port: ${process.env.port || 3000}`));
