const express = require('express');
const multer = require('multer');
const path = require('path')
const upload = multer({
    dest: 'uploads/' // this saves your file into a directory called "uploads"
});

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', upload.single('myFile'), (req, res) => {
    console.log(req.file)
    res.redirect('/');
});

app.get('/download', function(req, res) {

    res.send('<a href="/getdoc">get a doc</a>');

});

app.get('/getdoc', function(req, res) {

    res.download(path.join(__dirname, 'uploads/abc.txt'), function(err) {

        console.log(err);

    });

});

app.listen(3001);