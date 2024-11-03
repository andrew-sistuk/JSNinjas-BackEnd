import { initMongoDB } from './src/db/initMongoDB.js';
import startServer from './src/server.js';

import { createDirIfNotExists } from './src/utils/createDirIfNotExists.js';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './src/constants/characters.js';

const bootstrap = async () => {
  await initMongoDB();
  await createDirIfNotExists(TEMP_UPLOAD_DIR);
  await createDirIfNotExists(UPLOAD_DIR);
  startServer();
};

await bootstrap();
