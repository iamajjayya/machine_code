var nodemailer =  require('nodemailer')

var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        user : '',
        pass:''
    }
});

var mailOptions = {
    from : 'ajjayya2002@gmail.com',
    to: '',
    subject: 'sending Email using Node.js',
    text: 'Message sent using Node.js'
}

transporter.sendMail(mailOptions, function(err,info){
    if(err) {
        console.log(err)
    } else{
        console.log('Email sent' + info.response)
    }
})