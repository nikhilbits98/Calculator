var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Calculator listening at %s:%s", host, port)
})

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/page.html', function (req, res) {
   res.sendFile( __dirname + "/" + "page.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {
   
    var first_number = parseInt(req.body.first_number);
    var second_number = parseInt(req.body.second_number);
    var operator = req.body.operation;
    console.log(first_number,operator,second_number);
    //res.write(first_number,operator,second_number);
    var result;
   if(operator=='+'){
   response = {
     result: first_number + second_number
   };}
   else if(operator=='*'){
   response = {
     result: first_number * second_number
   };}
   else if(operator=='-'){
   response = {
     result: first_number - second_number
   };}
   else if(operator=='/'){
   response = {
     result: first_number / second_number
   };}
   console.log(response);
   res.write(JSON.stringify(response));
   res.end();
})

