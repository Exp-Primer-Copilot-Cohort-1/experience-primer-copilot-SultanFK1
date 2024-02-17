// Create Web Server
// 1. Load the http module to create an http server.
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = http.createServer(app);
var comments = [{ name: 'Tom', comment: 'I am Tom' }, { name: 'Jerry', comment: 'I am Jerry' }];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response) {
    response.send('Hello Express');
});

app.get('/comments', function(request, response) {
    response.json(comments);
});

app.post('/comments', function(request, response) {
    var newComment = request.body;
    comments.push(newComment);
    response.json(comments);
});

app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});

// 2. Create a server
// var server = http.createServer(function(request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.end('Hello Express');
// });

// 3. Listen for an event
// server.listen(3000, function() {
//     console.log('Server is listening on port 3000');
// });