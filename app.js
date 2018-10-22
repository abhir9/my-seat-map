var express = require('express');
var path = require('path');
var app = express();
app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname)));
var seatmap={width:10,height:5,booked:[1,2,6,8,9,12,48,0],notshow:[35,34,43,44,45,46]};

app.use('/', function(req,res){
	  res.render('index', { seatmap: seatmap ,clickHandler:"selectDeselect();" });
});

var http = require('http');
var server = http.createServer(app);

server.listen(process.env.PORT || '3000');
