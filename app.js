const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

var sendDetail;

const app = express();

app.engine('.hbs', exphbs({
    defaultLayout: null,
    extname: '.hbs'
}));


app.set('view engine', 'hbs');
app.set("views", "views");



// Static folder
app.use('/content', express.static(path.join(__dirname, 'content')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => { 

    res.render('main');

});

app.post('/home', (req, res)=> { 

  res.render('index', {
     post: "home"
     });
});

app.post('/about', (req, res)=> { 

  res.render('index', {
     post: "about"
     });
});

app.post('/send', (req, res)=> {
	//console.log(req.body);

  const data = req.body;

  //console.log(req.window);
  if (!String(data.Name).trim()) {
      //window.alert("Please Fill Name");
      //sendDetail = {Name: "Please Fill Name"};
      //res.render('./index', {msg: 'Please fill'});

      /*fScraper.submitForm(loginDetails, fScraper.provideForm(formStructure), pRequest).then( function (response) {
      });*/
      //changeInputValue();
      res.render('main');
  } else if (!(/^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/).test(String(data.email))) {
     //window.alert("email is not valid");
     res.render('main');
  } else if (!String(data.phoneNumber).trim()) {
     //window.alert("Please fill phone Number");
     res.render('main');
  } else {

  	const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.Name}</li>
        <li>PhoneNumber: ${req.body.phoneNumber}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;
    var Name = req.body.Name;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: 'araymarkosyan@gmail.com', // generated ethereal user
          pass: '196006::#'  // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    }
  );

  // setup email data with unicode symbols
  let mailOptions = {
      from: Name + ' <araymarkosyan@gmail.com>', // sender address
      to: 'markosyansaro@gmail.com', // list of receivers
      subject: 'About Services', // Subject line
      text: 'Naice to meet you?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('main');
  });

}

});    

app.listen(3000, ()=> console.log('Server started...')); 