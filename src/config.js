require("dotenv").config();

const { TIME_INTERVAL, PORT = 3000 } = process.env;

const DEFAULT_TIMEOUT = 6000;

module.exports = {
  TIME_INTERVAL,
  PORT,
  DEFAULT_TIMEOUT,
};
