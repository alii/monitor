import express from 'express';

import { join } from 'path';
import { existsSync } from 'fs';

const builtFilePath = join(__dirname, '..', 'dist', 'index.html');
const hasBuilt = existsSync(builtFilePath);

const app = express();
app.use(express.static('dist'));

app.get('*', (req, res) => {
  if (hasBuilt) {
    res.sendFile(builtFilePath);
    return;
  }

  res.set('Content-Type', 'text/plain');
  res.status(404).send(`Cannot GET ${req.path}`);
});

app.listen(process.env.PORT || 2000, () => console.log('[BACKEND] Server started'));
