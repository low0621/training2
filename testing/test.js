/*
var fs = require('fs');

var obj = fs.readFileSync('./package.json', 'utf-8');

var v = JSON.parse(obj);

console.log(v['main']);
*/
var obj = {
	a: [
		{b: 1, c: 2},
		{b: 2, c: 3}
	]
};

console.log(obj.a[0].b);
