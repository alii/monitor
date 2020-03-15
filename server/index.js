import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';

// Middlewars
import helmet from 'helmet';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import http from 'http';
import socket from 'socket.io';

import routes from './routes';
import ioLogger from './functions/Logger';
import Scheduler from './Scheduler';

const app = express();
const server = http.Server(app);
const io = socket(server);

const log = ioLogger(io);

app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const scheduler = new Scheduler();
scheduler.on('need monitoring', site => {
  log.info(`${site.name}`, 'Sending to clients');

  io.sockets.emit('message', {
    message: `Checking for restocks on ${site.name}`,
    type: 'info',
  });
});

for (const route of routes) app[route.method](route.path, route.internalHandle);

app.use(express.static('dist'));

app.get('*', (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    return res.status(404).json({
      error: true,
      message:
        'You found a hidden URL! This application is currently running in development mode, so the express server will only accept requests to the API endpoints.',

      reason:
        "What's this? This page is here because you ran the application in development mode, but this server only accepts API requests.",

      resolution: 'Run the app in production mode, or visit :3001',
    });
  }

  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

io.on('connection', () => log.info('Socket Connection'));

try {
  server.listen(process.env.PRODUCTION_PORT || 3000);
  log.info(`Server listening on port: ${process.env.PRODUCTION_PORT || 3000}`);
} catch (_) {
  log.error('Error. Could not start server. Check that there are no other applications running on port 3000.');
}
