var nodemailer = require('nodemailer');



//mail sender function
function mailSender(data){
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'devangpawar11@gmail.com',
      pass: 'donothack@11'
    }
  });
  
  var mailOptions = {
    from: 'devangpawar11@gmail.com',
    to: 'devangpawar11@gmail.com',
    subject: `Invoice Name - ${data.invoice_name}`,
    html:`
    <ul>
         <li>materials used - ${JSON.stringify(data.materials_used)}</li> 
        <li>Hours of Work - ${data.hours_of_work}</li>
        <li>total work expenses - ${data.total_expenses}</li>
        <li>labour - ${data.labour}</li>
        <li>note :- ${data.notes}</li>
        <li>invoice Status - ${data.status}</li>
        <li>Due Date - ${data.due_date}</li>
        </ul>
    `
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
      
}

module.exports = mailSender