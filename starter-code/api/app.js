const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/countries', (req, res, next) => {
    const countries = require('./countries.json')
    res.json(countries);
})

app.listen(3001, () => {
    console.log("listening")
})