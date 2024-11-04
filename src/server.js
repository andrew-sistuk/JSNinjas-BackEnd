import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import env from './utils/env.js';
import charactersRouter from './routers/characters.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { UPLOAD_DIR } from './constants/characters.js';

const PORT = Number(env('PORT', 3004));

export default function startServer() {
  const app = express();

  app.use('/uploads', express.static(UPLOAD_DIR));

  app.use(
    express.json({
      type: ['application/json', 'application/vnd.api+json'],
    }),
  );
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(charactersRouter);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
