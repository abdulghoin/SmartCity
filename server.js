var express = require('express');
// const path = require('path');

// Create our app
var app = express();

app.use(express.static('public'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })

app.listen(3030, function () {
  console.log('Server is up on port 3030');
});
