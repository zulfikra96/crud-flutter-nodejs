const chai = require('chai')

const chaiHttp = require('chai-http')

const server = require('../crud-api/core/server')
let should = chai.should()

let token  = {
    '_token':'e106e8ae0a7f2318b3ae882ee78f2302355de9daaa26276c77f316861e6d9249031cd2bac196f6c129d86551566f541d20823bf75c5069fabdfd1539566dd0c973e59a66b0985fbe7347'
}


chai.use(chaiHttp)

    describe('test auth',function(){
        it('test login',function(done){
            chai.request(server)
                .post('/api/login')
                .send({
                    "username":"zulfikra1",
                    "password":"123456"
                })
                .end(function(err,result){
                    if(err) console.log(err)

                    result.should.have.status(200)
                    result.body.should.be.an('object')
                    done()
                })
        })
    })

    it('test register',function(done){
        chai.request(server)
            .post('/api/register')
            .send({
                "fullname":"zulfikra lahmudin abjul",
                "username":"zulfikralahmudin",
                "password":"123456",
                "password_validation":"123456"
            })
            .end(function(err,result){
                if(err) console.log(err)
                console.log(result)
                result.should.status(200)
                result.body.should.be.an('object')
                
                done()
            })
    })
