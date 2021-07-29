const express = require('express');
const { fstat } = require('fs');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// notes page
app.get('/notes', (req, res) =>  {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// GET for api/notes
app.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, './db/db.json'), 'utf8', (err, data) => {
        if(err) {
            res.status(500).json(err);
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.listen(PORT, () => {
    console.log('Server Running');
});