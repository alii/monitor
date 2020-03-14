import dotenv from 'dotenv';
dotenv.config();

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

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

for (const route of routes) app[route.method](route.path, route.internalHandle);

app.use(express.static('dist'));

if (process.env.NODE_ENV !== 'development') {
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'dist', 'index.html')));
} else {
  app.get('*', (req, res) =>
    res.status(404).json({
      error: true,
      message:
        'You found a hidden URL! This application is currently running in development mode, so the express server will only accept requests to the API endpoints.',
      reason:
        "What's this? This page is here because you ran the application in development mode, but this server only accepts API requests.",
      resolution: 'Run the app in production mode, or visit :3001',
    }),
  );
}

app.listen(process.env.PORT || 3000, () => console.log(`Server listening on port: ${process.env.port || 3000}`));
