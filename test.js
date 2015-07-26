var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var multer = require('multer');
var util = require('util');
var fs = require("fs");
var path = require("path");
var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var db;
var unzip = require('unzip');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

var zp_UID = "";

MongoClient.connect("mongodb://root:admin@127.0.0.1:27017/student", function (err, database) {

    if (err) throw err;
    db = database;
    app.listen(80, function () {
        console.log("server is start");
        if (db)
            console.log("mongodb 链接正常");
        //  shell()
    })
});

//register
app.post("/register", function (res, req) {
    _user = res.body;
    d = ["register", _user.account, _user.p1, _user.email];
    db.eval(pingjie(d), function (err, json) {
        console.log(json);
        req.send(json);
    });

});

//login
app.post("/login", function (res, req) {
    _user = res.body;
    console.log(_user);
    d = ["login", _user.account, _user.password];
    db.eval(pingjie(d), function (err, _json) {
        console.log(_json);
        req.send(_json);
    });
});

app.post("/work", function (res, req) {
    db.eval('select_work_all()', function (err, _json) {
        console.log(_json);
        req.send(_json);
    });
});


//通用的调用存储过程 for mongodb
app.post('/query', function (res, req) {
    console.log(eval(res.body.A));
    db.eval(pingjie(res.body), function (err, _json) {
        console.log(_json);
        req.send(_json);
    });
})

//函数
//拼接存储过程
function pingjie(a) {
    var c = a[0] + "('";
    for (var i = 1; i < a.length; i++) {
        c += a[i] + "','";
        if (i == a.length - 2) {
            console.log(c += a[a.length - 1] + "')");
            return c;
        }
    }
}

app.post('/show', function (res, req) {
    console.log(res.body.a);
    console.log("select_work_UID('" + res.body.a + "')");
    db.eval("select_work_UID('" + res.body.a + "')", function (err, _json) {
        console.log(_json);
        req.send(_json);
    });
})


//乱码啊   艹 (╯‵□′)╯︵┻━┻。。。 
//滚(╯‵□′)╯︵┻━┻。。。
//function jys(file) {

//    var zip = new AdmZip('./public/wz/' + file);
//    var zipEntries = zip.getEntries();
//    zipEntries.forEach(function (zipEntry) {
//        console.log(zipEntry.toString('utf8'));
//    });
//    //输出调试信息->单个文件信息
//    zip.extractAllTo('./public/wz/', true);
//}



//function update(name,lable,up_UID,introduction,index)
//{
//    var a = {};
//    a.name = name;
//    a.lable = lable;
//    time = new Date();
//    a.up_time = time.getTime();
//    a.up_UID = up_UID;
//    a.introduction = introduction;
//    a.index = index;    }


var wenjian = multer({ dest: './public/wz/' })

app.post('/update', wenjian, function (req, res) {
    _user = req.body;
    console.log(_user);
    d = ['add_work', _user.name, _user.lable, _user.UID, _user.jieshao];
    db.eval(pingjie(d), function (err, json) {
        //req.files.wenjian.+'/'+
        console.log(json);
        console.log(zp_UID);
if(json.type=="error")
  {res.send({ 'type': 'error', "msg": "你上传的东西太多辣，联系换管理员删除几个吧qwq" });
return 0;}
        var exec = require('child_process').exec;
        console.log(json.msg);
        console.log(req.files.wenjian.path);
        var cmdStr = 'sh test.sh ' + json.msg + " " + req.files.wenjian.path + " " + _user.index;
        exec(cmdStr, function (err, stdout, stderr) {
            if (err) {
                res.send({ 'type': 'error', "msg": "服务器遇到了问题，上传粗错辣，好好的检查一下你的文件吧，压缩包不要加密哦，再试一遍吧QAQ" });
            } else {
console.log(stdout);
if(!stdout)
{
  res.send({ 'type': 'error', "msg": "服务器遇到了问题-》没有找到你填写的首页，请检查你填写的首页是否填写错误" });
return 0;
}
                var sql = ['add_user_index', json.msg, stdout];
                db.eval(pingjie(sql), function (err, _json) {
                    if (err) {
                        res.send({ 'type': 'error', "msg": _json.msg });
                    }
                    res.send({ 'type': 'success', "msg": _json.msg });
                });
            }
        }
         )
        //(json.msg,req.files.wenjian.path,_user.index)});
    });

})


function shell(UID, name, index) {
    var exec = require('child_process').exec;
    var cmdStr = 'sh public/wz/test.sh ' + UID + " " + name + " " + index;
    exec(cmdStr, function (err, stdout, stderr) {
        if (err) {
            zp_UID = "error";
        } else {
            var sql = ['add_user_index', UID, stdout];
            db.eval(pingjie(sql), function (err, _json) {
                if (err) {
                    zp_UID = "error";
                }
                return _json.msg;
            });
        }
    }
     )
    console.log(zp_UID);
}
