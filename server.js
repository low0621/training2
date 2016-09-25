var express = require('express');
var app = express();
/*
app.get('/',function(req,res){
	res.send('Hello Word!');
});*/

app.use(express.static('public'));

app.listen(1099,function(){
	console.log('app listening on port 1099');
});
