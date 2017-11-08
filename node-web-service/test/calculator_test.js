var app = require('../server/server');
var request = require('supertest');
var assert = require('assert');
var loopback = require('loopback');
function json(verb, url) {
    return request(app)[verb](url)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/);
  }
describe("getParams test...",function(){
    before(function(done){
        require('./start-server');
        done();
    })
    it("inputData...",function(done){
        json('post', '/api/emissions/inputData')
        .send({
            'uid':'3',
            'deviceId':'20000',
            'fuelType':'液体燃料',
            'fuelName':'一号燃料油',
            'deviceType':'滑轮',
            'power':'80',
            'sul1':'1',
            'cost1':'100'
        }) .expect(200, function (err, res) {
            console.log("res.body::",res.body);
            done();
        })

    }
    )
    // it("queryData...",function(done){
    //     json('post','/api/emissions/queryData')
    //     .send({
    //         'uid':'3'
    //     }).expect(200,function(err,res){
    //         console.log("res.body::",res.body);
    //         done();
    //     })
    // })

})