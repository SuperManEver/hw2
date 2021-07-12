const fs = require("fs");
const path = require("path");
const http = require("http");

const PORT = 3000;
const TIME_INTERVAL = 1000;
const DEFAULT_TIMEOUT = 6000;

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

      const nowInUTC = new Date(new Date().toUTCString());

      response.end(nowInUTC.toString());
    }, timeout);
  })
  .listen(PORT, () => {
    console.log(`Start server on port ${PORT}`);
  });
