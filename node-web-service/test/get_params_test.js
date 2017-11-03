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
    it("sendData",function(done){
        json('post', '/api/emissions/calculate')
        .send({
            'uid':'126',
            'deviceId':'10',
            'fuelType':'10',
            'fuelNo':'10',
            'deviceType':'10',
            'power':'10',
            'ash1':'10',
            'ash2':'10',
            'ash3':'10',
            'ash4':'10',
            'ash5':'10',
            'ash6':'10',
            'ash7':'10',
            'ash8':'10',
            'ash9':'10',
            'ash10':'10',
        }) .expect(200, function (err, res) {
            console.log("res.body::",res.body);
            done();
        })

    }

    )

})