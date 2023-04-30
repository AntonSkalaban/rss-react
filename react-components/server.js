import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { render } from './dist/server/entry-server.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let template = fs.readFileSync(path.resolve(__dirname, './dist/client/index.html')).toString();

const parts = template.split('<!--ssr-outlet-->');

const app = express();

app.use((req, res) => {
  res.write(parts[0]);
  const stream = render(req.url, {
    onShellReady() {
      stream.pipe(res);
    },
    onShellError() {
      // do error handling
    },
    onAllReady() {
      res.write(parts[1]);
      res.end();
    },
    onError(err) {
      console.error(err);
    },
  });
});

app.listen(5173);
