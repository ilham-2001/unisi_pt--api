const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const {readFile} = require('./functions');
const query = require('./model/query'); 

const app = express()

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.send(({'message': 'Hello world!'}));
})

app.get('/cft', (req, res) => {
    res.set('Content-Type', 'application/json')
    res.send(readFile());
});

app.post('/login', (req, res) => {
    const {email, password} = req.body

    query.verifyLogin(email, password).then(([rows, field]) => {
        res.set('Content-Type', 'application/json');
        res.send(rows[0]);
    }).catch((err) => {
        throw err;
    });
})

app.listen(3001, 'localhost', () => {
    console.log('Starting at port 3001')
});