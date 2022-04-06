const express = require('express');
const favicon = require('express-favicon');
var cors = require('cors')
const path = require('path');
const nodemailer = require("nodemailer");
require("dotenv").config();



const port = process.env.PORT || 8080;
const app = express();

// middleware
app.use(cors())
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, () => {
  console.log(`Listening (locally) on ${"http://localhost:8080/"}`);
});

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", //replace with your email provider
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post("/send", (req, res) => {

  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Methods', '*');
  console.log(req.body);
  console.log('handling post request...');
  const data = req.body;

    const mail = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "Feedback from Contact Me Form",
      text: `Someone sent a form to contact you from NathanDong.heroku.com!\n\nName: ${data.name}\nEmail:<${data.email}>\nMessage:\n${data.message}`,
    };

    //3.
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send("Something went wrong.");
      } else {
        console.log("Email Successfully sent!");
        res.status(200).send("Email successfully sent to recipient!");
      }
    });
});