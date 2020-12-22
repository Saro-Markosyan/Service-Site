var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('..//index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'gettopmusic@gmail.com',
        pass: 'get045559'
      }
    });

    var resContacts = 'phone: ' + res.getElementById('phone-feild').innerHTML +
                      'email: ' + res.getElementById('email-feild').innerHTML +
                      'messsage: ' + res.getElementById('message-feild').innerHTML;

    var mailOptions = {
      from: 'gettopmusic@gmail.com',
      to: 'saromark@yahoo.com',
      subject: res.getElementById('name').innerHTML,
      text: resContacts
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    return res.end();
  });
}).listen(8080);
