/**
 * Created by root on 15-7-28.
 */
﻿var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var multer = require('multer');
//var util = require('util');
//var fs = require("fs");
//var path = require("path");
//var mongodb = require('mongodb');
//var MongoClient = require('mongodb').MongoClient;
//var db;
//var unzip = require('unzip');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.listen(5656, function () {
    console.log("server is start")
})


var wenjian = multer({ dest: './public/wz/' })
var wenjian_img = multer({ dest: './public/' })
app.post('/update', wenjian, function (req, res) {

    //    var exec = require('child_process').exec;
    //    console.log(json.msg);
    //    console.log(req.files.wenjian.path);
    //    var cmdStr = 'sh test.sh ' + json.msg + " " + req.files.wenjian.path + " " + _user.index;
    //    exec(cmdStr, function (err, stdout, stderr) {
    //            if (err) {
    //                res.send({ 'type': 'error', "msg": "服务器遇到了问题，上传粗错辣，好好的检查一下你的文件吧，压缩包不要加密哦，再试一遍吧QAQ" });
    //            } else {
    //                console.log(stdout);
    //                if(!stdout)
    //                {
    //                    res.send({ 'type': 'error', "msg": "服务器遇到了问题-》没有找到你填写的首页，请检查你填写的首页是否填写错误" });
    //                    return 0;
    //                }
    //                var sql = ['add_user_index', json.msg, stdout];
    //                db.eval(pingjie(sql), function (err, _json) {
    //                    if (err) {
    //                        res.send({ 'type': 'error', "msg": _json.msg });
    //                    }
    //                    res.send({ 'type': 'success', "msg": _json.msg });
    //                });
    //            }
    //        }
    //    )
    //    //(json.msg,req.files.wenjian.path,_user.index)});
    //});

})

