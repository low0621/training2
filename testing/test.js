
var fs = require('fs');

var obj = fs.readFileSync('../package.json', 'utf-8');

var v = JSON.parse(obj);

console.log(v.main);

