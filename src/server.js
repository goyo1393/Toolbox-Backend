const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser'); 
require('dotenv').config();


const app = express();

app.use(helmet());

app.use(cors());

// Configuración Body Parse
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// Configuración global de rutas
app.use(require('./routes/index'));

app.listen(process.env.PORT, err => {
    if (err) {
        console.error("Server Error: ", err);
        return;
    }
    console.log('Listen Port: ', process.env.PORT);
});