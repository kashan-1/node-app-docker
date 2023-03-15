const express = require('express');
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASS, MONGO_IP, MONGO_PORT } = require('./configs/config');

const app = express();
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

mongoose
    .connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       // useFindAndModify: false,
    })
    .then(() => console.log('Connected to DB!'))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}`));