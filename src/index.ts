import { logger } from './utils/logger';
import { PORT } from './config/preload';
import createServer from './config/server';

const app = createServer();

app.listen(PORT || 3000, async () => {
  logger.info(`[server]: Server is running at https://localhost:${PORT}`);
});

process.on('unhandledRejection', (error: Error) => {
  logger.error('unhandledRejection', error.message);
});
