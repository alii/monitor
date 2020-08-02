import express from 'express';

import { join } from 'path';
import { existsSync } from 'fs';
import { router as  api} from './api-v1';

const builtFilePath = join(__dirname, '..', 'dist', 'index.html');
const hasBuilt = existsSync(builtFilePath);

const app = express();

app.use(express.static('dist'));
app.use("/api-v1",  api)

app.get('*', (req, res) => {
  if (hasBuilt) {
    res.sendFile(builtFilePath);
    return;
  }

  res.set('Content-Type', 'text/plain');
  res.status(404).send(`Cannot GET ${req.path}`);
});

app.listen(process.env.PORT || 2000, () => console.log('[BACKEND] Server started'));
