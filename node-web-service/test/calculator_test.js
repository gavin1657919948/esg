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
    it("inputData",function(done){
        json('post', '/api/emissions/inputData')
        .send({
            'uid':'3',
            'deviceId':'100010',
            'fuelType':'固体燃料',
            'fuelName':'无烟煤',
            'deviceType':'煤粉锅炉',
            'power':'80',
            'ash1':'15',
            'sul1':'10',
            'cost1':'100000'
        }) .expect(200, function (err, res) {
            console.log("res.body::",res.body);
            done();
        })

    }

    )

})