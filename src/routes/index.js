const express = require('express');
const app = express();

app.use(require('./secret.route'));

module.exports = app;