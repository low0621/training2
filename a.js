var fs = require('fs');

var obj = fs.readFileSync('./announce.json','utf-8');

var a = JSON.parse(obj);


console.log(a.data[0].title);
