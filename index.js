const express = require('express')
const app = express();
const winston = require('winston');
const port = 8000;
const {combine, timestamp, label, prettyPrint, printf} = winston.format;

const logger = winston.createLogger({
  level: 'verbose',
  // levels: 
  // format: winston.format.json(),
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

app.get('/', (req, res) => {
  logger.info('Hello World Called', {status: false, data: {a: 1, b: 2}} );
  logger.error('Hello World Called Error', {status: false, data: {a: 1, b: 2}} );
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
  logger.verbose(`Example app listening on port ${port}!`);
});
