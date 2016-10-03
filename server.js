var express = require('express');
var app = express();
var querystring = require('querystring');
var fs = require('fs');


app.get('/do',function(req,res){
	/*
	let param = querystring.parse(req._parsedUrl.query)
	console.log(param)
	res.send({ err: 'true' });
	*/
	let obj = readFileSync('./announce.json','utf-8');
	let data = JSON.parse(obj);
});

app.use(express.static('public'));

app.listen(1099,function(){
	console.log('app listening on port 1099');
});
