const fs = require('fs')
const { cls } = require('./controllers/class')
const { users } = require('./controllers/users')
const { Middleware } = require('./core/middleware')



const route = (app,recaptcha,md) => {

    app.get('/', function(req,res){
        users.main(req,res)
        
    })

    app.all('/api/home',function(req,res){
        md.tokenVerify(req,res)
    })

    // ambil data session for front-end
    app.get('/api/session',function(req,res){
        md.tokenVerify(req,res,function(session){
            res.json(session)
        },['mahasiswa','dosen'])
    })
    // ambil data ruangan
    app.get('/api/ruangan',function(req,res){
        md.tokenVerify(req,res,function(session){
            cls.main(req,res,session)
        },'dosen')
    })
    // ambil total data kelas dan mahasiswa
    app.get('/api/total-mahasiswa-kelas',function(req,res){
        md.tokenVerify(req,res,function(session){
            cls.getCountKelasMahasiswa(req,res,session)
        },'dosen')
    })
    // ambil data total tugas dan kelas mahasiswa
    app.get('/api/total-tugas-kelas',function(req,res){
        md.tokenVerify(req,res,function(session){
            cls.getCountKelasTugas(req,res,session)
        },['mahasiswa'])
    })
    // join kelas
    app.post('/api/join-kelas',function(req,res){
        md.tokenVerify(req,res,function(session){
            cls.joinKelas(req,res,session)
        },'mahasiswa')
    })
    // tambah kelas
    app.post('/api/kelas',function(req,res){
        md.tokenVerify(req,res,function(session){
            cls.addClass(req,res,session)
        },'dosen')
    })
    // ubah nama kelas
    app.put('/api/kelas',function(req,res){
        md.tokenVerify(req,res,function(session){
            cls.updateKelas(req,res,session)
        },'dosen')
    })
    // ambil list kelas
    app.get('/api/kelas-list',function(req,res){
        md.tokenVerify(req,res,function(session){
            cls.getListKelas(req,res,session)
        },'dosen')
    })
    // ambil list kelas mahasiswa
    app.get('/api/kelas-list-mahasiswa',function(req,res){
        md.tokenVerify(req,res,function(session){
            cls.getListKelasMahasiswa(req,res,session)
            .catch(function(err){
                console.log(err); 
            })
        },'mahasiswa')
    })

    // ambil kelas detail
    app.get('/api/kelas/:id',function(req,res){
        let _id = req.params.id
        md.tokenVerify(req,res,function(session){
            if(session.session.roles == 'dosen')
            {
                cls.getDetailKelas(req,res,session,_id)
                return
            }
            
            cls.getDetailKelasMahasiswa(req,res,session,_id)

        },['dosen','mahasiswa'])
    })

    // arsip kelas
    app.post('/api/kelas/arsip',function(req,res){
        md.tokenVerify(req,res,function(session){
            cls.postArsipKelas(req,res,session)
        },'dosen')
    })

    app.post('/api/register',function(req,res){
        recaptcha.verify(req,function(err,data){
            if(err)
            {
                res.json({
                    message:`maaf, anda harus menekan verifikasi captcha`,
                    status:200,
                    success:false
                })
                return
            }
            users.resgisterPost(req,res)

        })
    })

    app.post('/api/login',function(req,res){
        users.loginPost(req,res)
    })

}




module.exports = { route }