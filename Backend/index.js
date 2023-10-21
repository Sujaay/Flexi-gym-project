const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
// const routesHandler = require('./routes/handler.js');
// const mongoose = require('mongoose');
// require('dotenv/config');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler);


const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200

}

app.use(cors (corsOptions))

const port = 4000
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
