const { Database } = require('../core/database.js')
const { Middleware } = require('../core/middleware')
const formidable = require('formidable')
const fs = require('fs')

    
class Todo extends Database {



    constructor() {
        super()
        this.session = {};
        this.data = '';
    }
    getTodo(req,res,session){
        session = session.session

        this.Select(['todo_id','title','description','start_time','end_time'])
            .From('todo')
            .Where({column:'user_id',value:session.user_id})
            .OrderBy('todo_id')
            .Desc()
            .Get(function(err,result){
                if(err) console.log(err)
                for(let key = 0; key < result.rows.length; key++)
                {
                    result.rows[key].image = '/api/todo/image/' + result.rows[key].todo_id
                }
                return res.json(result.rows)
            })
    }
    // create todo list
    createTodo(req, res, session) {

        this.session = session.session
        console.log(req.body);

        if(req.body.start_time == 'null') req.body.start_time = "2018-01-10 00:00:00"
        if(req.body.end_time == 'null') req.body.end_time = "2018-01-10 00:00:00"

        let _this = this
        let date_time = new Date()
        let path = `${__dirname}/../storage/${this.session.user_id}/`
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path)
            fs.mkdirSync(path + '/images')
        }
        let file_name = `images/${date_time.getDate()}-${date_time.getMonth()}-${date_time.getFullYear()}-${date_time.getHours()}:${date_time.getSeconds()}:${date_time.getMilliseconds()}.jpg`
        path = path + file_name


        
        this.Insert()
            .Into('todo')
            .Column(['title', 'description', 'path_files', 'start_time', 'end_time', 'created_at','user_id'])
            .Value([`'${req.body.title}'`, `'${req.body.description}'`, `'${path}'`, `'${req.body.start_time}'`, `'${req.body.end_time}'`, 'NOW()',`${this.session.user_id}`])
            .Set(function (err, result) {
                if (err) console.log(err);
                
 
                if(req.files != null)
                {
                    req.files.photo.mv(path, function (err) {
                        if (err) console.log(err);
    
                        res.status(200)
                            .json({
                                success: true,
                                message: 'Berhasil Upload'
                            })
                    })
                }
                
            });


    }
    // Delete todo list
    async deleteTodo(req,res,session)
    {
        let _id = req.params.id
        session = session.session
        let DB = await this.Select(['*'])
                            .From('todo')
                            .Where({column:'todo_id',value:_id})
                            .AndWhere({column:'user_id',value:session.user_id})
                            .GetAsync()
        if(DB.rows[0] == undefined)
        {
            return res.status(400)
                .json({
                    message:'maaf todo yang anda hapus tidak ada',
                    success:false
                })
        }
        
        console.log("file path " + DB.rows[0].path_files);
        
        if(fs.existsSync(DB.rows[0].path_files ))
        {
            fs.unlinkSync(DB.rows[0].path_files)
        }


        this.DeleteFrom('todo')
            .Where({column:'user_id',value:session.user_id})
            .AndWhere({column:'todo_id',value:req.params.id})
            .Set(function(err,result){
                if(err) console.log(err)

                return res.json({
                    success:true,
                    message:'Berhasil menghapus todo'
                })
            })
        
        
    }
    // Update todo list
    async updateTodo(req,res,session)
    {
        session = session.session
        let _this = this
        this.Select(['todo_id','title','description','start_time','end_time','path_files','user_id'])
                                    .From('todo')
                                    .Where({column:'user_id',value:session.user_id})
                                    .AndWhere({column:'todo_id',value:req.params.id})
                                    .Get(function(err,result){
                                        if(err) console.log(err)
                                        if(req.files != null)
                                        {
                                            let date_time = new Date()
                                            
                                            if(fs.existsSync(result.rows[0].path_files))fs.unlinkSync(result.rows[0].path_files)  
                                            let path = `${__dirname}/../storage/${session.user_id}/`
                                            if (!fs.existsSync(path)) {
                                                fs.mkdirSync(path)
                                                fs.mkdirSync(path + '/images')
                                            }   
                                            let file_name = `images/${date_time.getDate()}-${date_time.getMonth()}-${date_time.getFullYear()}-${date_time.getHours()}:${date_time.getSeconds()}:${date_time.getMilliseconds()}.jpg`
                                            result.rows[0].path_files = path + file_name
                                            
                                            req.files.photo.mv(result.rows[0].path_files,function(err){
                                                if(err) console.log(er)
                                            })
                                        }
                                        
                                        if(result.rows[0] == undefined)
                                        {
                                            return res.status(400)
                                                .json({
                                                    message:'maaf todo yang anda hapus tidak ada',
                                                    success:false
                                                })
                                        }
                                   
                                        
                                         _this.Update('todo').SetColumn({column:'title',value:`'${req.body.title}'`})
                                            .AndSetColumn({column:'description',value:`'${req.body.description}'`})
                                            .AndSetColumn({column:'start_time',value:`'${req.body.start_time}'`})
                                            .AndSetColumn({column:'end_time',value:`'${req.body.end_time}'`})
                                            .AndSetColumn({column:'path_files',value:`'${result.rows[0].path_files}'`})
                                            .Set(function(err,result){
                                                if(err) console.log(err)

                                                return res.json({
                                                    message:'berhasil mengubah todo',
                                                    success:true
                                                })
                                            })
                                        
                                    })
        

        
    }

    getTodoPhoto(req,res,session)
    {
        session = session.session
        let _id = req.params.id

        this.Select(['path_files'])
            .From('todo')
            .Where({column:'todo_id',value:_id})
            .AndWhere({column:'user_id',value:session.user_id})
            .Get(function(err,result){
                if(result.rows[0] == undefined)
                {
                    fs.readFile(`${__dirname}/../assets/images/logo-untag.png`,function(err,data){
                        res.writeHead(200,{
                            'Content-Type':"image/jpeg",
                            'Content-Type':"image/jpg",
                            'Content-Type':"image/png",
                        })
    
                        res.end(data)
                    })

                    return
                }
                fs.readFile(result.rows[0].path_files,function(err,data){
                    if(err){
                        console.log(err);
                        fs.readFile(`${__dirname}/../assets/images/logo-untag.png`,function(err,data){
                            res.writeHead(200,{
                                'Content-Type':"image/jpeg",
                                'Content-Type':"image/jpg",
                                'Content-Type':"image/png",
                            })
        
                            res.end(data)
                        })

                        return
                    }

                    res.writeHead(200,{
                        'Content-Type':"image/jpeg",
                        'Content-Type':"image/jpg",
                        'Content-Type':"image/png",
                    })

                    res.end(data)
                })

            })
    }



}
let todo = new Todo()
module.exports = { todo }
