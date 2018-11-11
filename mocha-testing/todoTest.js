const chai = require('chai')

const chaiHttp = require('chai-http')

const server = require('../crud-api/core/server')
let should = chai.should()

let token  = {
    '_token':'e106e8ae0a7f2318b3ae882ee78f2302355de9daaa26276c77f316861e6d9249031cd2bac196f6c129d86551566f541d20823bf75c5069fabdfd1539566dd0c973e59a66b0985fbe7347'
}


chai.use(chaiHttp)

describe('Test REST API',function(){

    describe('test todo',function(){

        it('testing get todo',function(done){
            chai.request(server)
                .get('/api/todo')
                .set(token)
                .end(function(err,result){
                    if(err) console.log(err)
                    result.should.have.status(200)
                    result.body.should.be.an('array')
                    done()
                })
        })

        it('testing post todo',function(done){
            chai.request(server)
                .post('/api/todo')
                .set(token)
                .set('Content-Type','multipart/form-data')
                .field("title","test title")
                .attach('photo','download.jpeg')
                .end(function(err,result){
                    if(err) console.log("error is %s",err)
                    result.should.have.status(200)

                    done()
                })
                
        })
    })
})  