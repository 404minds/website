var express = require('express');
var app = express();
// var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));

// Initialize app
var server = app.listen(process.env.PORT || 5030, function() {
  var port = server.address().port;
    console.log("404Minds App is now running on port", port);
});