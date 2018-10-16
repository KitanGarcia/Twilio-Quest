//THIS SENDS A MESSAGE FROM A  VALID TWILIO NUMBER TO ANOTHER NUMBER
var twilio = require('twilio');

var accountSid = ''; // Your Account SID from www.twilio.com/console
var authToken = '';   // Your Auth Token from www.twilio.com/console

var d = new Date();
var n = d.toLocaleTimeString();
console.log(n);

var client = new twilio(accountSid, authToken);
client.messages.create({
    body: 'Greetings! The current time is: ' + n + ' TZV4RBRX9RN89S2',
    to: '+1234567890',//'+12092104311',  // Text this number
    from: '+10987654321' // From a valid Twilio number
})
.then((message) => console.log(message.sid));

