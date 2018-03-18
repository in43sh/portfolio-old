const express = require ('express');
const bodyParser = require ('body-parser');
const path = require('path')
const port = process.env.PORT || 3333;
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();

app.use( bodyParser.json() );

app.use( express.static( `${__dirname}/../build` ) );

app.post('/send-email', (req, res) => {
  const { name, email, phone, message } = req.body;

  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USERNAME,
        pass: process.env.PASS
      }
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
      from: email,
      to: process.env.USERNAME,
      subject: name,
      text: 'name: '+ name + '\nemail: ' + email + '\nphone: ' + phone + '\nmessage: ' + message
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });
  res.status(200);
})

// Production
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

// Connecting our port
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );