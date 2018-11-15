const   { users } = require('./controllers/users'),
        { todo } = require('./controllers/todo'),
        fs = require('fs'),
        { Middleware } = require('./core/middleware')

const route = (app, recaptcha, md, formidable) => {


    app.all('/api/home', function (req, res) {
        res.send("hello world")
    })

    // ambil data session for front-end
    app.get('/api/session', function (req, res) {
        md.tokenVerify(req, res, function (session) {
            res.json(session)
        },['tamu'])
    })

    app.post('/api/login', function (req, res) {
        users.loginPostVol2(req, res)
    })

    app.post('/api/register', function (req, res) {
        users.registerPostVol2(req, res)
    })

    app.get('/api/todo',function(req,res){
        md.tokenVerify(req, res, function (session) {
            todo.getTodo(req,res,session)
        },['tamu'])
    })

    // create todo
    app.post('/api/todo', function (req, res) {
        md.tokenVerify(req, res, function (session) {
            todo.createTodo(req,res,session)
        },['tamu'])
    })
    
    app.delete('/api/todo/:id', function (req, res) {
        md.tokenVerify(req, res, function (session) {
            todo.deleteTodo(req,res,session)
        },['tamu'])
    })

    app.put('/api/todo/:id', function (req, res) {
        md.tokenVerify(req, res, function (session) {
            todo.updateTodo(req,res,session)
        },['tamu'])
    })

    app.get('/api/todo/image/:id',function(req,res){
        md.tokenVerify(req,res,function(session){
            todo.getTodoPhoto(req,res,session)
        },['tamu'])
    })

}




module.exports = { route }