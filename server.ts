import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/', (req, res) => {
      return app.render(req, res, '/');
    });

    server.get('/games', (req, res) => {
      return app.render(req, res, '/games');
    });

    server.get('/game/:uuid', (req, res) => {
      return app.render(req, res, '/game', { uuid: req.params.uuid });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err: Error) => {
      if (err) {
        throw err;
      }
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
