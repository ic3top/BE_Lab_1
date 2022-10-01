import * as dotenv from 'dotenv';

dotenv.config();

const { env } = process;

export const { PORT, LOG_LEVEL  } = env;
