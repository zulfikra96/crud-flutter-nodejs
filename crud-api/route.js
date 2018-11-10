const fs = require('fs')
const { users } = require('./controllers/users')
const { Middleware } = require('./core/middleware')

const route = (app,recaptcha,md) => {


    app.all('/api/home',function(req,res){
        res.send("hello world")
    })

    // ambil data session for front-end
    app.get('/api/session',function(req,res){
        md.tokenVerify(req,res,function(session){
            res.json(session)
        })
    })

    app.post('/api/login',function(req,res){
        users.loginPostVol2(req,res)
    })

    app.post('/api/register',function(req,res){
        users.registerPostVol2(req,res)
    })

    
    
}




module.exports = { route }