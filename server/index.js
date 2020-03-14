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

app.use(express.static('dist'));

app.get('*', (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    return res.redirect('http://localhost:3001');
  }

  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => console.log(`Server listening on port: ${process.env.port || 3000}`));
