var path = require('path')
var fs = require('fs')
exports.privateKey = fs.readFileSync(path.join(__dirname, './certs/server.key')).toString();
exports.certificate = fs.readFileSync(path.join(__dirname, './certs/server.crt')).toString();
