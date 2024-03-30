import winston from 'winston';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
};

const level = () => {
  const env = process.env.APP_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white'
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.colorize({ all: true }),
  winston.format.printf((info) => `${info.timestamp}: ${info.message}`)
);

const transports = [
  new winston.transports.File({
    filename: 'logs/error/error.log',
    level: 'error'
  }),
  new winston.transports.File({
    filename: 'logs/info/info.log',
    level: 'info'
  }),
  new winston.transports.File({
    filename: 'logs/warn/warn.log',
    level: 'warn'
  }),
  new winston.transports.File({
    filename: 'logs/debug/debug.log',
    level: 'debug'
  })
];

const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports
});

export default Logger;
