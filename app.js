const express = require('express');
const bodyParser = require('body-parser');
const Data = require('./models/data');
const router = require('./routes/router');

const app = express();

app.use(bodyParser.json());

router(app);

app.listen(3000);
