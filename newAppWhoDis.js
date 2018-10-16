//To run, run ngrok with "./ngrok http 1337" and "node newAppWhoDis.js" and text Twilio phone number
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const MessagingResponse = require('twilio').twiml.MessagingResponse;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
//app.use(bodyParser.json())



app.post('/sms', function(req, res) {
	try {
    const response = new MessagingResponse();
    response.message("Hi! It looks like your phone number was born in ((" + req.body.FromCountry + "))");

  //  response.message(`hi! it looks like your number was born in ((${req.body.FromCountry}))`)

    console.log(req.body.Body);
    console.log(response, typeof response);
    res.send(response.toString());
  }
  catch(error) {
    console.trace(error)
  }
});


var server = app.listen(1337, function() {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
