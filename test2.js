var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var multer = require('multer');
var fs = require('fs')
var exec = require('child_process').exec;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.listen(8888,function(){
  console.log("2333");
})


var wenjian = multer({ dest: './public/wz/' })
var wenjian_img = multer({ dest: './public/wz/tx/' })

app.post('/update', wenjian_img, function (req, res) {
console.log(req.files);
var cmdStr = 'mv '+req.files.tupian.path+" "+"public/wz/tx/233/";
exec(cmdStr, function (err, stdout, stderr) {
  var cmdStr = 'rm '+req.files.tupian.path;
  exec(cmdStr, function (err, stdout, stderr) {
    console.log(stdout)
  })
})


})
