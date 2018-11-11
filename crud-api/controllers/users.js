const { Database }  = require('../core/database.js')
const { Middleware } = require('../core/middleware')
const Cryptr        = require('cryptr')
const fs            = require('fs')
const crypt         = new Cryptr('1243saT') 
const md            = new Middleware()
const mail          = require('../core/email')
const salt = fs.readFileSync(`${__dirname}/../.salts`).toString()


class Users extends Database {

    constructor()
    {
        super()
    }

    main(req,res)
    {
   
       this.Select(['user_id','nomor_induk'])
            .From('users')
            .Get(function(result){
                res.send(result.rows)
            })

        return this
    }

    resgisterPost(req,res)
    {
        let data = req.body
        let roles = 'dosens'
        let DB = this
        
        if(data.roles == 'mahasiswa')
        {
            roles = 'mahasiswa'
        }

        this.Select(['nomor_induk'])
                .From(roles)
                .Where({column:'nomor_induk',value:data.nomor_induk})
                .Get(function(err,result){

                    if(err) console.log(err);
                    

                    if(roles == 'dosens') roles = 'dosen'
                    
                    if(result.rows[0] == undefined)
                    {
                        res.json({
                            message:`Maaf anda tidak terdaftar sebagai ${roles} untag surabaya`,
                            status:200,
                            success:false
                        })
                        return
                    }

                    if(data.nomor_induk != result.rows[0].nomor_induk)
                    {
                        res.json({
                            message:`Maaf anda tidak terdaftar sebagai ${roles} untag surabaya`,
                            status:200,
                            success:false
                        })
                       
                        return
                    }
                    
                    // let slt      = bcrypt.genSalt(10)
                    let password = crypt.encrypt(data.password)

                    // console.log();
                    let dateTimeNow = new Date(Date.now())

                    let token =  md.createToken({
                        email:data.email,
                        nomor_induk:data.nomor_induk,
                        roles:data.roles
                    })


                   
                    DB.Insert()
                        .Into('users')
                        .Column(['email','nomor_induk','roles','no_telp','password','created_at','token','is_active'])
                        .Value([`'${data.email}'`,data.nomor_induk,`'${data.roles}'`,`'${data.no_telp}'`,`'${password.toString()}'`,`'NOW()'`,`'${token}'`,'false'])
                        .Set(function(err,result){
                            if(err){
                                console.log(err);
                                
                                if(err.constraint == 'users_email_key')
                                {
                                    res.json({
                                        message:`Maaf  email telah terdaftar silahkan menggunakan email yang lain`,
                                        status:200,
                                        success:false
                                    })
                                    return
                                }

                                if(err.constraint == 'users_nomor_induk_key')
                                {
                                    res.json({
                                        message:`Maaf  Nomor induk telah terdaftar, silahkan menggunakan nomor induk yang lain`,
                                        status:200,
                                        success:false
                                    })
                                    return
                                }
                                res.json({
                                    message:`Maaf ada yang salah pada database anda`,
                                    status:200,
                                    success:false
                                })
                                return
                            }

                            DB.Select(['email','token'])
                                .From('users')
                                .Where({column:'email',value:`'${data.email}'`})
                                .Get(function(err,result){
                                    
                                    mail.sendMail({
                                        from:'E-Learning Universitas 17 Agustus 1945 surabaya',
                                        to:`${data.email}`,
                                        subject:'email',
                                        text:'hello world',
                                        html:`
                                            <h4>Terima kasih telah mendaftar</h4>
                                            <h4> aktifasi akun http://localhost:8000/aktivasi/${result.rows[0].token}</h4>
                                        `
                                    })
                                    
                                })
                            
                            res.json({
                                message:`Terima kasih, anda telah berhasil mendaftar <br> silahkan cek email anda untuk aktifasi akun`,
                                status:200,
                                success:true
                            })
                            
                        })
                    
                })
        
    }

    loginPost(req,res)
    {
        let data = req.body
        let _this = this
        if(isNaN(req.body.nomor_induk)){
            res.json({
                status:400,
                success:false,
                message:'input nomor induk berupa harus berupa angka',
                input:'nomor_induk'
            })
            return
        }

        let nomor_induk = parseInt(data.nomor_induk)
        this.Select(['nomor_induk','password','user_id'])
            .From('users')
            .Where({column:'nomor_induk',value:data.nomor_induk})
            .Get(function(err,result){
                if(err)
                {
                    console.log(err);
                    
                    res.json({
                        status:400,
                        success:false,
                        message:'ada yang salah dalam database'
                    })

                    return
                }

                if(result.rows[0] == undefined)
                {
                    res.json({
                        status:200,
                        success:false,
                        message:'maaf nomor induk anda tidak terdaftar',
                        input:'nomor_induk'
                    })

                    return
                }

                let password = crypt.decrypt(result.rows[0].password)

                if(password != data.password)
                {
                    res.json({
                        status:200,
                        success:false,
                        message:'maaf password anda salah',
                        input:'password'
                    })

                    return
                }

                let token = md.createToken(result.rows[0])
                
                _this.Update('users')
                    .SetColumn({column:'token',value:`'${token}'`})
                    .Where({column:'user_id',value:result.rows[0].user_id})
                    .Set(function(err,result){
                        if(err) console.log(err);
                        console.log(result);
                        
                        res.json({
                            success:true,
                            status:200,
                            token:token,
                        })
                        return
                    })
            })
    }

    loginPostVol2(req,res)
    {
        let data            = req.body
        let is_error        = false
        let display_error   = []
        let _this           = this
        

        for(let err in data)
        {
            if(data[err] == ''){
                is_error = true
                display_error.push(`Maaf ${err} tidak boleh kosong`) 
            }
        }

        console.log(display_error)
        if(is_error)
        {
            return res.status(400).json({
                success:false,
                message:display_error
            })
        }

        this.Select(['username','password','user_id'])
            .From('users')
            .Where({column:'username', value:`'${data.username}'`})
            .Get(function(err,result){
                let results = result.rows

                console.log(results[0]);

                if(err){
                   console.log(err);
                }

                if(results[0] == undefined)
                {
                    return res.status(400).json({
                        success:false,
                        message:['maaf username anda salah'],
                        input:'password'
                    })
                }

                let password = crypt.decrypt(results[0].password);

                if(password != data.password)
                {
                    return res.status(400).json({
                        success:false,
                        message:['maaf password anda salah'],
                        input:'password'
                    })    
                }

                let token = md.createToken(results[0])
                
                
                _this.Update('users')
                    .SetColumn({column:'token',value:`'${token}'`})
                    .Where({column:'user_id',value:results[0].user_id})
                    .Set(function(err,result){
                        if(err) console.log(err);
                        console.log(result);
                        
                        res.json({
                            success:true,
                            status:200,
                            token:token,
                        })
                        return
                    })
            })
    }

    registerPostVol2(req,res)
    {
        let data = req.body;
        let inc = 0;
        let length_obj = Object.keys(data).length
        let hasError = false
        let error_obj = {}
        // let _token = md.createToken(rows)
        let password = crypt.encrypt(data.password)
        for(let obj in data)
        {
            if(data[obj] == '')
            {
                hasError = true;
                error_obj[obj] = ''
            }
        }

        if(hasError){
            // console.log(error_obj)
            return res.status(400)
            .json({
                message:'There are errors',
                error_message:error_obj
            })
        }

        if(data.password != data.password_validation)
        {
            return res.status(400)
                .json({
                    message:'Password harus sesuai dengan ulangi password',
                    success:false,
                })
        }

        this.Insert()
            .Into('users')
            .Column(['username','fullname','password','role','created_at'])
            .Value([`'${data.username}'`,`'${data.fullname}'`,`'${password}'`,`'tamu'`,'NOW()'])
            .Set(function(err,result){
                if(err) console.log(err);
                
                return res.json({
                    message:'Berhasil kirim',
                    success:true,
                    status:200
                })
            });
    }


}
let users = new Users()
module.exports = { users }