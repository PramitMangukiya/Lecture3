const nodemailer = require("nodemailer");

const sendMail = async (req,res)=>{
    let testAccount = await nodemailer.createTestAccount(); 

    let transporter  = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: 'terrell.crona@ethereal.email',
            pass: 'YGYMXysQq53jB3uVR4'
        }
    })
    let info = await transporter.sendMail({
        from: '"Pramit Mangukiya 👻" <abc@gmail.com>', // sender address
        to: "pramitmangukiya602@gmail.com   ", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello Pramit</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);

    res.json(info);
}

module.exports = sendMail