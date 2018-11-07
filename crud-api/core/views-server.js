const express = require('express')
const path = require('path')
const app = express()

app.use('/assets',express.static('../assets'))
app.use('/views',express.static('../views'))

app.get('*',function(req,res){
    res.sendFile(path.resolve(__dirname + '/../views/index.html'))
})

app.listen(8000)