const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const appName = process.env.APP_NAME;
const appVersion = process.env.APP_VERSION;
const appAuthors = process.env.APP_AUTHORS;
const appRepo = process.env.APP_REPO;
const appLicense = process.env.APP_LICENSE;

const diaryRoutes = require('./api/routes/diary');

mongoose.connect(process.env.MONGO_DB_CLUSTER);

mongoose.connection.on(
  'error',
  console.error.bind(
    console,
    'Connection Error: '
  )
);

mongoose.connection.once('open', () => {
  console.log(`Connection To ${mongoose.connection.db.namespace} Successful`);
});

mongoose.Promise = global.Promise;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
    return res.status(200).json({});
  };

  next();
});

app.use("/diary", diaryRoutes);

app.use("/", (req, res, next) => {
  try {
    return res.status(200).json({
      app: appName,
      version: appVersion,
      authors: appAuthors,
      repo: appRepo,
      license: appLicense
    });
  } catch (err) {
    console.error(err);
    return res.status(err.status).json({
      message: err.message,
    });
  };
});

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
