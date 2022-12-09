const express = require('express');
const cors = require("cors");
let app = express();
const SercretController = require('../controllers/secret.controller');

app.get(process.env.API_URL + '/secret/files', cors(), SercretController.getList);
app.get(process.env.API_URL + '/secret/file/:file', cors(), SercretController.getOne);

module.exports = app;