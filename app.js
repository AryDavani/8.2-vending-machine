const express = require('express');
const bodyParser = require('body-parser');
const Snack = require('./models/data');
const router = require('./routes/router');
const path = require('path');
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const app = express();

app.use(bodyParser.json());

const nodeEnv = process.env.NODE_ENV || "development";
const config = require("./config.json")[nodeEnv];
mongoose.connect(config.mongoUrl);

router(app);

app.listen(3000);

module.exports = app;
