const express = require('express')
const { route } = require('../route')
const { Middleware } = require('./middleware')
const  fileUpload  = require('express-fileupload')
const fs        = require('fs')
var bodyParser = require('body-parser');
var Recaptcha = require('express-recaptcha').Recaptcha

var recaptcha = new Recaptcha('6LfPSnQUAAAAAAsFLMnSDHoiNOxUteCcO0HlLA4y','6LfPSnQUAAAAAHJ-zP2D6qwQ7vVhtZZzhXkButn8')
const app = express()
const middleware = new Middleware()

app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));


 // for parsing application/json
app.use(bodyParser.json({limit:'50mb'})); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true , limit:'50mb'})); 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Headers","access-control-allow-headers", "Origin, X-Requested-With, Content-Type, Accept, _token");
    next();
});





// nodemailer





route(app,recaptcha,middleware)

app.listen(3000)


module.exports =  app