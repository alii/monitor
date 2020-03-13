import * as express from 'express';

import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';

import routes from './routes';

const app = express();

app.use(helmet());
app.use(bodyParser());

routes.forEach(route => app[route.method](route.path, route.internalHandle));
app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => console.log(`Server listening on port: ${process.env.port || 3000}`));
