// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

var bodyParser = require('body-parser');
var boot = require('loopback-boot');
var loopback = require('loopback');
var path = require('path');
var https = require('https')
var sslConfig = require('./ssl-config');
var options = {
  key: sslConfig.privateKey,
  cert: sslConfig.certificate
};

var app = module.exports = loopback();

app.middleware('initial', bodyParser.urlencoded({ extended: true }));

// Bootstrap the application, configure models, datasources and middleware.



app.set('view engine', 'ejs'); // LoopBack comes with EJS out-of-box
app.set('json spaces', 2); // format json responses for easier viewing

// must be set to serve views properly when starting the app via `slc run` from
// the project root
app.set('views', path.resolve(__dirname, 'views'));


app.start = function () {
  // start the web server
  let server = https.createServer(options, app);

  return new Promise(function (resolve, reject) {
    server.listen(app.get('port'), function () {
      var baseUrl = 'https://' + app.get('host') + ':' + app.get('port');

      app.emit('started', baseUrl);
      console.log('Web server listening at: %s', baseUrl);
      if (app.get('loopback-component-explorer')) {
        var explorerPath = app.get('loopback-component-explorer').mountPath;
        console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
      }
      resolve()
    });
  })

};


// start the server if `$ node server.js`
boot(app,__dirname,function(err){
  if(err) throw err;
  if(require.main===module)
  app.start();
});

