const express = require('express');
const cors = require('cors');
const path = require('path');
const { add } = require("./arithmetica");
const app = express();

app.use(cors());

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    //res.send('Arithmetic service - last updated 15th feb');
});

app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = add(n, m);
    res.json(sum);
});

app.listen(port);



