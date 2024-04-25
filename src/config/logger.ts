import winston, { info } from 'winston';
import {NODE_ENV} from './config';

const { format, createLogger, transports } = winston;
const { printf, combine, colorize, uncolorize } = format;

const winstonFormat = printf(
  ({ level, message, stack }: { level: string, message: string, stack?: string }) =>
    `${level}: ${stack || message}`,
);

const logger = createLogger({
  level: NODE_ENV === 'development' ? 'debug' : 'info',
  format: combine(
    format.timestamp(),
    winstonFormat,
    NODE_ENV === 'development' ? colorize() : uncolorize(),
  ),
  transports: [new transports.Console()],
});

export default logger;
