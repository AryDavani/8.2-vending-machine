const express = require('express');
const bodyParser = require('body-parser');
const Data = require('./models/data');
const router = require('./routes/router');
const mongoose = require('mongoose');

const app = express();

const nodeEnv = process.env.NODE_ENV || "development";
const config = require("./config.json")[nodeEnv];

app.use(bodyParser.json());

router(app);

app.listen(3000);
