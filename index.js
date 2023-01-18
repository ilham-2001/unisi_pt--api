const express = require('express');
const cors = require('cors')    
const {readFile} = require('./functions')

const app = express()

app.use(cors());

app.get('/', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.send(({'message': 'Hello world!'}));
})

app.get('/cft', (req, res) => {
    res.set('Content-Type', 'application/json')
    res.send(readFile());
});

app.listen(3001, 'localhost', () => {
    console.log('Starting at port 3001')
});