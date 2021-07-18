const fs = require("fs");
const path = require("path");
const http = require("http");

const { TIME_INTERVAL, PORT, DEFAULT_TIMEOUT } = require("./config");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf8" });

    const val = request.url.split("=");
    const timeout = val[1] ? parseInt(val[1], 10) : DEFAULT_TIMEOUT;

    const interval = setInterval(() => {
      const dateNow = new Date(new Date().toUTCString());

      console.log(dateNow);
    }, TIME_INTERVAL);

    setTimeout(() => {
      clearInterval(interval);

      const nowInUTC = new Date().toUTCString();

      response.end(nowInUTC);
    }, timeout);
  })
  .listen(PORT, () => {
    console.log(`Start server on port ${PORT}`);
  });
