var app = require('../server/server');
var request = require('supertest');
var assert = require('assert');
var loopback = require('loopback');

describe("create role test",function(){
    before(function(done){
        require('./start-server');
        done();
    })
     it("create a user",function(){
        var User = app.models.user;
        User.create([
            { username: 'John', email: '1657919948@qq.com', password: '123456' }
           
          ], function (err, users) {
            if (err) throw err;
        
            console.log('Created users:', users);
        
        })
     
    })
})
    /*it("login test",function(){
        app.models.User.login({
            email:"1657919948@qq.com",
            password:"123456"
        },'user',function(err,token){
            if(err){console.log('login failed:'+err);return}
            token=token.toJSON();
            console.log("token.username:"+token.user.username);
            console.log("accesstoken:"+token.id);
        })
    })
    it("show user",function(){
        var user=app.models.User;
        console.log("showUser:"+user);
    })
    */
