const express = require('express');
const app = express();
const countries = require('./countries.json')

app.get('/countries', (req, res, next) => {
    res.json(countries);
})

app.listen(3001)