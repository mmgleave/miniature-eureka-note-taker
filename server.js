const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
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

app.listen(PORT, () => {
    console.log('Server Running');
});