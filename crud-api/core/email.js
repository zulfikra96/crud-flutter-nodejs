const nodemailer    = require('nodemailer')
const fs            = require('fs')  


function sendMail(args = { from:'',to:'',subject:'',text:'',html:'' },callback)
{
    
    let data = fs.readFileSync(`${__dirname}/../.env`).toString()
    data = JSON.parse(data)
    if(!data.testing_mail.production)
    {
        delete data.testing_mail.production
        nodemailer.createTestAccount((err,acount) => {
            let transporter = nodemailer.createTransport(data.testing_mail)

            transporter.sendMail(args,function(err,info){
            
                if(callback)
                {
                    callback(error,info)
                    return
                }

                if(err) console.log(err);
                
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                

                
            })
        })

        return
    }
    let transporter = nodemailer.createTransport(data.testing_mail)

    transporter.sendMail(args,function(err,info){
       
        if(callback)
        {
            callback(error,info)
            return
        }

        if(err) console.log(err);
        
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        
    })

    return
}





module.exports = { sendMail  }