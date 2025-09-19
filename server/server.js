const http = require('http');
const app = require('./app/app');

require('dotenv').config();

const port = process.env.PORT || 8000;
const host = process.env.HOST || "127.0.0.1";

const server = http.createServer(app);

const appName = process.env.APP_NAME || "Express JS Server";
const appVersion = process.env.APP_VERSION || "1.0.0";
const appAuthor = process.env.APP_AUTHOR || "Unknown Authors";
const appRepo = process.env.APP_REPOSITORY_LINK || "https://github.com/404";
const appLicense = process.env.APP_LICENSE || "SET LICENSE";

server.listen(port, host, () => {
  console.log('~'.repeat(80));
  console.log(
    `App: ${appName}\nVersion: ${appVersion}\nAuthors: ${appAuthor}\nRepo: ${appRepo}\nLicense: ${appLicense}\nServer: http://${host}:${port}`
  );
  console.log("~".repeat(80));
});
