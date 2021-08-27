const nodemailer = require('nodemailer');

var mailOptions = {
    from: 'ahmed@gmail.com',
    to: '.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
  }
  