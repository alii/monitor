import * as express from 'express';
import * as path from 'path';

import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';

import * as mongoose from 'mongoose';
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
