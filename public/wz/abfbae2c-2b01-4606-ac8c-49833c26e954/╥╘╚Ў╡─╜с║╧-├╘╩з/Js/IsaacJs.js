// JavaScript source code
                                                                            //x轴i
var a = new Array([[5, 6, "cv", 6, 7, 5, "f", 4, "g", 6, 6, 6, 6, 6, 6, 6, 7], //|   0
                  ["c", 1, 0, 1, 8, "c", 1, 0, 1, "k", 0, 0, "bk", 0, 0, 0, 8], //|   1
                  ["c", "fr", 0, "fr", 8, "c", 1, 0, 1, "x", "k", 0, 1, 1, 1, 0, 8], //|   2
                  ["c", 1, 0, 1, 8, "c", 1, 0, 1, 1, 1, "bk", 1, "w", 1, 0, 8], //|   3
                  ["c", "fr", 0, "fr", 8, "c", 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 8], //|   4
                  ["c", 1, 0, 1, 8, "c", 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 8], //|   5
                  ["c", 0, 0, 0, 8, "c", "sud", 0, 0, 0, 0, "y", 1, 0, "l", 0, 8], //|   6
                  ["b", "h", "q", "i", 9, "b", "a", "a", "a", "a", "a", "a", "a", "h", 2, "i", 9]]//|   7
                   ,
                  [["g5", "g6", "gul", "g6", "g6", "g6", "g6", "g6", "g6", "g6", "g6", "g6", "g6", "g6", "g6", "g6", "g7"], //|   0
                  ["gc", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gst", "gst", "gst", "g8"], //|   1
                  ["gc", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gl", "gs", "gst", "g8"], //|   2
                  ["gc", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gst", "gs", "gst", "g8"], //|   3
                  ["gc", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gst", "gs", "gst", "g8"], //|   4
                  ["gc", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gst", "gs", "gst", "g8"], //|   5
                  ["gc", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gs", "gst", "gs", "grb", "g8"], //|   6
                  ["gb", "ga", "ga", "ga", "ga", "ga", "ga", "ga", "ga", "ga", "ga", "ga", "ga", "ga", "ga", "ga", "g9"]]//|   7
                   ,
                  [["b5", "b6", "b6", "b6", "b6", "b6", "b6", "b6", "bcv", "b6", "b6", "b6", "b6", "b6", "b6", "b6", "b7"], //|   0
                  ["bc", "bf", "bst", "bst", "bst", "bst", "bf", "bs", "l", "bs", "bf", "bst", "bst", "bst", "bst", "bf", "b8"], //|   1
                  ["bc", "bst", "bs", "dlu", "dru", "bs", "bst", "bs", "bs", "bs", "bst", "bs", "alu", "aru", "bs", "bst", "b8"], //|   2
                  ["bc", "bst", "bf", "dld", "drd", "bf", "bst", "bs", "bs", "bs", "bst", "bf", "ald", "ard", "bf", "bst", "b8"], //|   3
                  ["bc", "bst", "bs", "bs", "bs", "bs", "bst", "bs", "bs", "bs", "bst", "bs", "bs", "bs", "bs", "bst", "b8"], //|   4
                  ["bc", "bf", "bst", "bst", "bst", "bst", "bf", "bs", "bs", "bs", "bf", "bst", "bst", "bst", "bst", "bf", "b8"], //|   5
                  ["bc", "bs", "bs", "bs", "bs", "bs", "bs", "bs", "bs", "bs", "bs", "bs", "bs", "bs", "bs", "bs", "b8"], //|   6
                  ["bb", "ba", "ba", "ba", "ba", "ba", "ba", "ba", "ba", "ba", "ba", "ba", "ba", "ba", "ba", "ba", "b9"]]//|   7
                   ,
                  [["r5", "r6", "r6", "r6", "r6", "r6", "r6", "r6", "rul", "r6", "r6", "r6", "r6", "r6", "r6", "r6", "r7"], //|   0
                  ["rc", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "l", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "r8"], //|   1
                  ["rc", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "r8"], //|   2
                  ["rc", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "r8"], //|   3
                  ["rc", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "r8"], //|   4
                  ["rc", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "r8"], //|   5
                  ["rc", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "rs", "r8"], //|   6
                  ["rb", "ra", "ra", "ra", "ra", "ra", "ra", "ra", "ra", "ra", "ra", "ra", "ra", "ra", "ra", "ra", "r9"]]);//|   7
                 //-0--1--2--3--4--5--6--7--8--9--10-11-12-13-14-15-16----- y轴n

var dp = 0;
var i = 6, n = 14;
var m = 0, j = 0, p = 0, q = 1;
var mdt = 0;;
var key = 0 , gkey = 0;
var nb = 0, gdb = 0, rdb = 0;
var steven = 0;
var steven_attack = 0;
var jiawen_alive = 0;
var jiawen_attack = 0;
var azazel_alive = 0;
var azazel_attack = 0;
var broken = 0, sbroken = 0, allbroken = 0;
var prompt = 0;
var secret = 0;
var say = 11, dialog_alive = 0;
var redlaser = 0;
var knife = 0;
var blood = 0;
var direction = 0;
var md = 4, tmd = 1;
var jd = 4;
var ld = 2;
var ad = 0;
var lt = 0;
var ftl = 0;
var mm = 0;
var first_talk = 0;
var cz = 0;
var hide = 0;
var pact = 0;
var monster = document.createElement("div");
var jiawen = document.createElement("div");
var azazel = document.createElement("div");

window.onload = hehe;

function hehe() {
    if (first_talk == 0) {
        talk();
        first_talk++;
    }
    if (jiawen_alive == 0) {
        create_jiawen();
        jiawen_alive = 1;
    }
    var i, n;
    for (i = 0; i < a[dp].length; i++) {
        for (n = 0; n < a[dp][i].length; n++) {
            var b = document.createElement("div");
            b.style.cssText = "width:80px;height:80px;position:absolute;z-index:-5;";
            b.style.top = i * 80 + "px";
            b.style.left = n * 80 + "px";
            b.id = dp + i + "_" + n;
            if (a[dp][i][n] == 0) { b.style.backgroundImage = "url(Images/Space.png)"; }
            if (a[dp][i][n] == 1) { b.style.backgroundImage = "url(Images/Stone.png)"; }
            if (allbroken == 0) {
                if (a[dp][i][n] == "bk") { b.style.backgroundImage = "url(Images/BrokenStone.png)"; }
            }
            else if (allbroken == 2) {
                if (a[dp][i][n] == "bk") { b.style.backgroundImage = "url(Images/Space.png)"; }
            }
            if (a[dp][i][n] == 2) { b.style.backgroundImage = "url(Images/StartDoor.png)"; }
            if (a[dp][i][n] == 3) { b.style.backgroundImage = "url(Images/GoldDoor.png)"; }
            if (a[dp][i][n] == 4) { b.style.backgroundImage = "url(Images/NightmareDoor.png)"; }
            if (a[dp][i][n] == 5) { b.style.backgroundImage = "url(Images/LeftUp.png)"; }
            if (a[dp][i][n] == 6) { b.style.backgroundImage = "url(Images/Up.png)"; }
            if (a[dp][i][n] == 7) { b.style.backgroundImage = "url(Images/RightUp.png)"; }
            if (a[dp][i][n] == 8) { b.style.backgroundImage = "url(Images/Right.png)"; }
            if (a[dp][i][n] == 9) { b.style.backgroundImage = "url(Images/RightDown.png)"; }
            if (a[dp][i][n] == 'a') { b.style.backgroundImage = "url(Images/Down.png)"; }
            if (a[dp][i][n] == 'b') { b.style.backgroundImage = "url(Images/LeftDown.png)"; }
            if (a[dp][i][n] == 'c') { b.style.backgroundImage = "url(Images/Left.png)"; }
            if (a[dp][i][n] == 'd') { b.style.backgroundImage = "url(Images/GoldDoorUp.png)"; }
            if (a[dp][i][n] == 'e') { b.style.backgroundImage = "url(Images/GoldDoorDown.png)"; }
            if (a[dp][i][n] == 'f') { b.style.backgroundImage = "url(Images/NightmareDoorLeft.png)"; }
            if (a[dp][i][n] == 'g') { b.style.backgroundImage = "url(Images/NightmareDoorRight.png)"; }
            if (a[dp][i][n] == 'h') { b.style.backgroundImage = "url(Images/StartDoorLeft.png)"; }
            if (a[dp][i][n] == 'i') { b.style.backgroundImage = "url(Images/StartDoorRight.png)"; }
            if (a[dp][i][n] == "cv") { b.style.backgroundImage = "url(Images/Cave.png)" }
            if (secret < 2) {
                if (a[dp][i][n] == "sud") { b.style.backgroundImage = "url(Images/Stone.png)" }
            }
            else if (secret == 2) {
                if (a[dp][i][n] == "sud") { b.style.backgroundImage = "url(Images/UnderDoor.png)" }
            }
            if (a[dp][i][n] == "fr") { b.style.backgroundImage = "url(Images/Fire.png)" }
            if (a[dp][i][n] == "k") { b.style.backgroundImage = "url(Images/Space.png)" }
            if (dp == 0)
            {
                if (a[dp][i][n] == 'l') { b.style.backgroundImage = "url(Images/Space.png)"; }    //Isaac站的地方
            }
            else if (dp == 1) {
                if (a[dp][i][n] == 'l') { b.style.backgroundImage = "url(Images/GraySpace.png)"; }    //Isaac站的地方
            }
            else if (dp == 2) {
                if (a[dp][i][n] == 'l') { b.style.backgroundImage = "url(Images/BlackSpace.png)"; }    //Isaac站的地方
            }
            else if (dp == 3) {
                if (a[dp][i][n] == 'l') { b.style.backgroundImage = "url(Images/RedSpace.png)"; }    //Isaac站的地方
            }
            if (a[dp][i][n] == 'q') { b.style.backgroundImage = "url(Images/StartDoor.png)"; }
            if (a[dp][i][n] == "y") { b.style.backgroundImage = "url(Images/Boy.png)"; b.innerHTML = "智者"; b.style.fontFamily = "Microsoft YaHei"; b.style.fontSize = "16px"; b.style.textAlign = "center"; }
            if (nb == 0) {
                if (a[dp][i][n] == "x") { b.style.backgroundImage = "url(Images/Box.png)" }
            }
            else {
                if (a[dp][i][n] == "x") { b.style.backgroundImage = "url(Images/OpenBox.png)" }
            }
            if (gdb == 0) {
                if (a[dp][i][n] == "w") { b.style.backgroundImage = "url(Images/GoldBox.png)" }
            }
            else {
                if (a[dp][i][n] == "w") { b.style.backgroundImage = "url(Images/OpenGoldBox.png)" }
            }
            if (a[dp][i][n] == "fq") { b.style.backgroundImage = "url(Images/StartDoor.png)" }
            if (a[dp][i][n] == "gs") { b.style.backgroundImage = "url(Images/GraySpace.png)" }
            if (a[dp][i][n] == "g5") { b.style.backgroundImage = "url(Images/GrayLeftUp.png)" }
            if (a[dp][i][n] == "g6") { b.style.backgroundImage = "url(Images/GrayUp.png)" }
            if (a[dp][i][n] == "g7") { b.style.backgroundImage = "url(Images/GrayRightUp.png)" }
            if (a[dp][i][n] == "g8") { b.style.backgroundImage = "url(Images/GrayRight.png)" }
            if (a[dp][i][n] == "g9") { b.style.backgroundImage = "url(Images/GrayRightDown.png)" }
            if (a[dp][i][n] == "ga") { b.style.backgroundImage = "url(Images/GrayDown.png)" }
            if (a[dp][i][n] == "gb") { b.style.backgroundImage = "url(Images/GrayLeftDown.png)" }
            if (a[dp][i][n] == "gc") { b.style.backgroundImage = "url(Images/GrayLeft.png)" }
            if (a[dp][i][n] == "gk") { b.style.backgroundImage = "url(Images/GrayKey.png)" }
            if (a[dp][i][n] == "gst") { b.style.backgroundImage = "url(Images/GrayStone.png)" }
            if (a[dp][i][n] == "gl") { b.style.backgroundImage = "url(Images/GrayLock.png)" }
            if (a[dp][i][n] == "gul") { b.style.backgroundImage = "url(Images/GrayUpLadder.png)" }
            if (rdb == 0) {
                if (a[dp][i][n] == "grb") { b.style.backgroundImage = "url(Images/RedBox.png)" }
            }
            else if (rdb == 1) {
                if (a[dp][i][n] == "grb") { b.style.backgroundImage = "url(Images/OpenRedBox.png)" }
            }
            if (a[dp][i][n] == "bs") { b.style.backgroundImage = "url(Images/BlackSpace.png)" }
            if (a[dp][i][n] == "b5") { b.style.backgroundImage = "url(Images/BlackLeftUp.png)" }
            if (a[dp][i][n] == "b6") { b.style.backgroundImage = "url(Images/BlackUp.png)" }
            if (a[dp][i][n] == "b7") { b.style.backgroundImage = "url(Images/BlackRightUp.png)" }
            if (a[dp][i][n] == "b8") { b.style.backgroundImage = "url(Images/BlackRight.png)" }
            if (a[dp][i][n] == "b9") { b.style.backgroundImage = "url(Images/BlackRightDown.png)" }
            if (a[dp][i][n] == "ba") { b.style.backgroundImage = "url(Images/BlackDown.png)" }
            if (a[dp][i][n] == "bb") { b.style.backgroundImage = "url(Images/BlackLeftDown.png)" }
            if (a[dp][i][n] == "bc") { b.style.backgroundImage = "url(Images/BlackLeft.png)" }
            if (a[dp][i][n] == "bcv") { b.style.backgroundImage = "url(Images/BlackCave.png)" }
            if (a[dp][i][n] == "bd") { b.style.backgroundImage = "url(Images/BHang.png)" }
            if (a[dp][i][n] == "bf") { b.style.backgroundImage = "url(Images/BlackFire.png)" }
            if (a[dp][i][n] == "bp") { b.style.backgroundImage = "url(Images/Pact.png)" }
            if (a[dp][i][n] == "bst") { b.style.backgroundImage = "url(Images/BlackStone.png)" }
            if (a[dp][i][n] == "bud") { b.style.backgroundImage = "url(Images/BUnderDoor.png)" }
            if (a[dp][i][n] == "dlu") { b.style.backgroundImage = "url(Images/DemonLeftUp.png)" }
            if (a[dp][i][n] == "dld") { b.style.backgroundImage = "url(Images/DemonLeftDown.png)" }
            if (a[dp][i][n] == "dru") { b.style.backgroundImage = "url(Images/DemonRightUp.png)" }
            if (a[dp][i][n] == "drd") { b.style.backgroundImage = "url(Images/DemonRightDown.png)" }
            if (a[dp][i][n] == "alu") { b.style.backgroundImage = "url(Images/AngelLeftUp.png)" }
            if (a[dp][i][n] == "ald") { b.style.backgroundImage = "url(Images/AngelLeftDown.png)" }
            if (a[dp][i][n] == "aru") { b.style.backgroundImage = "url(Images/AngelRightUp.png)" }
            if (a[dp][i][n] == "ard") { b.style.backgroundImage = "url(Images/AngelRightDown.png)" }
            if (a[dp][i][n] == "rs") { b.style.backgroundImage = "url(Images/RedSpace.png)" }
            if (a[dp][i][n] == "r5") { b.style.backgroundImage = "url(Images/RedLeftUp.png)" }
            if (a[dp][i][n] == "r6") { b.style.backgroundImage = "url(Images/RedUp.png)" }
            if (a[dp][i][n] == "r7") { b.style.backgroundImage = "url(Images/RedRightUp.png)" }
            if (a[dp][i][n] == "r8") { b.style.backgroundImage = "url(Images/RedRight.png)" }
            if (a[dp][i][n] == "r9") { b.style.backgroundImage = "url(Images/RedRightDown.png)" }
            if (a[dp][i][n] == "ra") { b.style.backgroundImage = "url(Images/RedDown.png)" }
            if (a[dp][i][n] == "rb") { b.style.backgroundImage = "url(Images/RedLeftDown.png)" }
            if (a[dp][i][n] == "rc") { b.style.backgroundImage = "url(Images/RedLeft.png)" }
            if (a[dp][i][n] == "rul") { b.style.backgroundImage = "url(Images/RedUpLadder.png)" }
            if (a[dp][i][n] == "wd") { b.style.backgroundImage = "url(Images/DemonDoor.png)" }
            if (a[dp][i][n] == "wdl") { b.style.backgroundImage = "url(Images/DemonDoorLeft.png)" }
            if (a[dp][i][n] == "wdr") { b.style.backgroundImage = "url(Images/DemonDoorRight.png)" }
            document.body.appendChild(b);
        }
    }
}
 document.onkeydown = function xiao()       //onkeydown事件会在按下一个键盘按键时发生
 {
     if (dialog_alive == 0 && first_talk == 2 && say != 12 && say != 19) {
         var c = document.getElementById("Isaac");
         //判断事件 按下的键  获取键盘按键的键码
         if (event.keyCode == 37) {                 //Left
             if (n > 0) {
                 if (a[dp][i][n - 1] == 1 || a[dp][i][n - 1] == "c" || a[dp][i][n - 1] == "d" || a[dp][i][n - 1] == "e" || a[dp][i][n - 1] == "gc" || a[dp][i][n - 1] == "bc" || a[dp][i][n - 1] == "rc" || a[dp][i][n - 1] == "gst") { }
                 if (a[dp][i][n] == "l") {
                     if (knife == 0) {
                         if (redlaser == 0) {
                             document.getElementById("Isaac").style.background = "url(Images/IsaacLeft.png)";
                         }
                         else if (redlaser == 1) {
                             if (dp == 0) {
                                 document.getElementById("Isaac").style.background = "url(Images/RedIsaacLeft.png)";
                             }
                             else if (dp == 1) {
                                 document.getElementById("Isaac").style.background = "url(Images/GRedIsaacLeft.png)";
                             }
                             else if (dp == 2) {
                                 document.getElementById("Isaac").style.background = "url(Images/BRedIsaacLeft.png)";
                             }
                             else if (dp == 3) {
                                 document.getElementById("Isaac").style.background = "url(Images/RRedIsaacLeft.png)";
                             }
                         }
                     }
                     else if (knife == 1) {
                         if (dp == 0) {
                             document.getElementById("Isaac").style.background = "url(Images/DeathIsaacLeft.png)";
                         }
                         else if (dp == 1) {
                             document.getElementById("Isaac").style.background = "url(Images/GDeathIsaacLeft.png)";
                         }
                         else if (dp == 2) {
                             document.getElementById("Isaac").style.background = "url(Images/BDeathIsaacLeft.png)";
                         }
                         else if (dp == 3) {
                             document.getElementById("Isaac").style.background = "url(Images/RDeathIsaacLeft.png)";
                         }
                     }
                 }
                 direction = 1;
                 if (m == 0) {
                     m++;
                     j = 0;
                     p = 0;
                     q = 0;
                 }
                 else {
                     if (m != 0 && a[dp][i][n - 1] == 0 || a[dp][i][n - 1] == "bs" || a[dp][i][n - 1] == "gs" || a[dp][i][n - 1] == "rs") {
                         if (dp == 0) {
                             a[dp][i][n] = 0;
                             n--;
                             a[dp][i][n] = "l"
                             c.style.left = parseInt(c.style.left) - 80 + "px";      //parseInt()   返回某个整数值
                         }
                         else if (dp == 1) {
                             a[dp][i][n] = "gs";
                             n--;
                             a[dp][i][n] = "l"
                             c.style.left = parseInt(c.style.left) - 80 + "px";      //parseInt()   返回某个整数值
                         }
                         else if (dp == 2) {
                             a[dp][i][n] = "bs";
                             n--;
                             a[dp][i][n] = "l"
                             c.style.left = parseInt(c.style.left) - 80 + "px";      //parseInt()   返回某个整数值
                         }
                         else if (dp == 3) {
                             a[dp][i][n] = "rs";
                             n--;
                             a[dp][i][n] = "l"
                             c.style.left = parseInt(c.style.left) - 80 + "px";      //parseInt()   返回某个整数值
                         }
                     }
                     else if (m != 0 && key != 1 && a[dp][i][n - 1] == "k") {
                         a[dp][i][n] = "k";
                         n--;
                         a[dp][i][n] = "l"
                         c.style.left = parseInt(c.style.left) - 80 + "px";
                     }
                     else if (m != 0 && a[dp][i][n - 1] == "gm") {
                         if (steven == 0) {
                             document.getElementById("Isaac").style.background = "url(Images/GIsaacDie.png)";
                             say = 16;
                             talk();
                         }
                         else {
                             a[dp][i][n] = "gs";
                             n--;
                             a[dp][i][n] = "l"
                             c.style.left = parseInt(c.style.left) - 80 + "px";
                         }
                     }
                     else if (m != 0 && a[dp][i][n - 1] == "j") {
                         if (steven == 0) {
                             document.getElementById("Isaac").style.background = "url(Images/IsaacDie.png)";
                             say = 16;
                             talk();
                         }
                         else {
                             a[dp][i][n] = 0;
                             n--;
                             a[dp][i][n] = "l"
                             c.style.left = parseInt(c.style.left) - 80 + "px";
                         }
                     }
                     else if (m != 0 && key != 1 && a[dp][i][n - 1] == "bk") {
                         if (allbroken > 1) {
                             a[dp][i][n] = "0";
                             n--;
                             a[dp][i][n] = "l"
                             c.style.left = parseInt(c.style.left) - 80 + "px";
                         }
                     }
                     else if (m != 0 && a[dp][i][n - 1] == "x") {
                         if (key == 0) {
                             a[dp][i][n] = "l";
                             n--;
                             a[dp][i][n] = "x";
                             document.getElementById(dp + i + "_" + n).style.background = "url(Images/OpenBox.png)";
                             i--;
                             a[dp][i][n] = "k";
                             document.getElementById(dp + i + "_" + n).style.background = "url(Images/Key.png)";
                             i = i + 1;
                             n = n + 1;
                             key++;
                             nb++;
                         }
                         else {
                             say=5;
                             talk();
                         }
                     }
                     else if (m != 0 && a[dp][i][n - 1] == "k" && redlaser == 0 && key == 1) {
                         a[dp][i][n] = 0;
                         document.getElementById(dp + i + "_" + n).style.background = "url(Images/Space.png)";
                         n--;
                         document.getElementById(dp + i + "_" + n).style.background = "url(Images/Space.png)";
                         a[dp][i][n] = "l"
                         c.style.left = parseInt(c.style.left) - 80 + "px";
                         say = 2;
                         talk();
                         key++;
                     }
                     else if (m != 0 && a[dp][i][n - 1] == "sud" && secret == 2) {
                         if (knife == 0) {
                             if (redlaser == 0) {
                                 dp = 1;
                                 hehe();
                                 document.getElementById("Isaac").style.background = "url(Images/GIsaacDie.png)";
                                 c.style.left = parseInt(c.style.left) - 400 + "px";
                                 c.style.top = parseInt(c.style.top) - 400 + "px";
                                 say = 10;
                                 talk();
                             }
                             else if (redlaser == 1) {
                                 dp = 1;
                                 hehe();
                                 document.getElementById("Isaac").style.background = "url(Images/GRedIsaacDown.png)";
                                 c.style.left = parseInt(c.style.left) - 400 + "px";
                                 c.style.top = parseInt(c.style.top) - 400 + "px";
                                 i = i - 5;
                                 n = n - 5;
                                 a[dp][i][n] = "l";
                                 m = 0;
                                 q = 1;
                                 direction = 4;
                                 hide = 1;
                             }
                         }
                         else if (knife == 1) {
                             dp = 1;
                             hehe();
                             document.getElementById("Isaac").style.background = "url(Images/GDeathIsaacDown.png)";
                             c.style.left = parseInt(c.style.left) - 400 + "px";
                             c.style.top = parseInt(c.style.top) - 400 + "px";
                             i = i - 5;
                             n = n - 5;
                             a[dp][i][n] = "l";
                             m = 0;
                             q = 1;
                             direction = 4;
                         }
                         if (steven == 0 && redlaser == 1) {
                             create_monster();
                         }
                     }
                     else if (m != 0 && a[dp][i][n - 1] == "bud") {
                         dp = 3;
                         hehe();
                         document.getElementById("Isaac").style.background = "url(Images/RDeathIsaacDown.png)";
                         c.style.left = parseInt(c.style.left) - 80 + "px";
                         c.style.top = parseInt(c.style.top) - 400 + "px";
                         i = i - 5;
                         n = n - 1;
                         a[dp][i][n] = "l";
                         m = 0;
                         q = 1;
                         direction = 4;
                         if (azazel_alive == 0) {
                             create_lastboss();
                         }
                     }
                     else if (m != 0 && gkey != 1 && a[dp][i][n - 1] == "gk") {
                         a[dp][i][n] = "gs";
                         n--;
                         a[dp][i][n] = "l"
                         c.style.left = parseInt(c.style.left) - 80 + "px";
                         hehe();
                         say = 2;
                         talk();
                         gkey++;
                     }
                     else if (m != 0 && a[dp][i][n - 1] == "bp") {
                         a[dp][i][n] = "bs";
                         n--;
                         a[dp][i][n] = "l"
                         c.style.left = parseInt(c.style.left) - 80 + "px";
                         hehe();
                         say = 17;
                         talk();
                     }
                 }
             }
             ftl = 1;
         }
         if (event.keyCode == 38) {                 //Up
             if (i > 0) {
                 if (a[dp][i - 1][n] == 1 || a[dp][i - 1][n] == 6 || a[dp][i - 1][n] == "f" || a[dp][i - 1][n] == "g" || a[dp][i - 1][n] == "g6" || a[dp][i - 1][n] == "b6" || a[dp][i - 1][n] == "r6" || a[dp][i - 1][n] == "gst") { }
                 if (a[dp][i][n] == "l") {
                     if (knife == 0) {
                         if (redlaser == 0) {
                             document.getElementById("Isaac").style.background = "url(Images/IsaacUp.png)";
                         }
                         else if (redlaser == 1) {
                             if (dp == 0) {
                                 document.getElementById("Isaac").style.background = "url(Images/RedIsaacUp.png)";
                             }
                             else if (dp == 1) {
                                 document.getElementById("Isaac").style.background = "url(Images/GRedIsaacUp.png)";
                             }
                             else if (dp == 2) {
                                 document.getElementById("Isaac").style.background = "url(Images/BRedIsaacUp.png)";
                             }
                             else if (dp == 3) {
                                 document.getElementById("Isaac").style.background = "url(Images/RRedIsaacUp.png)";
                             }
                         }
                     }
                     else if (knife == 1) {
                         if (dp == 0) {
                             document.getElementById("Isaac").style.background = "url(Images/DeathIsaacUp.png)";
                         }
                         else if (dp == 1) {
                             document.getElementById("Isaac").style.background = "url(Images/GDeathIsaacUp.png)";
                         }
                         else if (dp == 2) {
                             document.getElementById("Isaac").style.background = "url(Images/BDeathIsaacUp.png)";
                         }
                         else if (dp == 3) {
                             document.getElementById("Isaac").style.background = "url(Images/RDeathIsaacUp.png)";
                         }
                     }
                 }
                 direction = 2;
                 if (j == 0) {
                     j++;
                     m = 0;
                     p = 0;
                     q = 0;
                 }
                 else {
                     if (j != 0 && a[dp][i - 1][n] == 0 || a[dp][i - 1][n] == "bs" || a[dp][i - 1][n] == "gs" || a[dp][i - 1][n] == "rs") {
                         if (dp == 0) {
                             a[dp][i][n] = 0;
                             i--;
                             a[dp][i][n] = "l"
                             c.style.top = parseInt(c.style.top) - 80 + "px";      //parseInt()   返回某个整数值
                         }
                         else if (dp == 1) {
                             a[dp][i][n] = "gs";
                             i--;
                             a[dp][i][n] = "l"
                             c.style.top = parseInt(c.style.top) - 80 + "px";      //parseInt()   返回某个整数值
                         }
                         else if (dp == 2) {
                             a[dp][i][n] = "bs";
                             i--;
                             a[dp][i][n] = "l"
                             c.style.top = parseInt(c.style.top) - 80 + "px";      //parseInt()   返回某个整数值
                         }
                         else if (dp == 3) {
                             a[dp][i][n] = "rs";
                             i--;
                             a[dp][i][n] = "l"
                             c.style.top = parseInt(c.style.top) - 80 + "px";      //parseInt()   返回某个整数值
                         }
                     }
                     else if (j != 0 && a[dp][i - 1][n] == "k") {
                         a[dp][i][n] = "k";
                         i--;
                         a[dp][i][n] = "l"
                         c.style.top = parseInt(c.style.top) - 80 + "px";
                     }
                     else if (j != 0 && a[dp][i - 1][n] == "gm") {
                         if (steven == 0) {
                             document.getElementById("Isaac").style.background = "url(Images/GIsaacDie.png)";
                             say = 16;
                             talk();
                         }
                         else {
                             a[dp][i][n] = "gs";
                             i--;
                             a[dp][i][n] = "l"
                             c.style.top = parseInt(c.style.top) - 80 + "px";
                         }
                     }
                     else if (j != 0 && a[dp][i - 1][n] == "j") {
                         if (jiawen_alive == 0) {
                             document.getElementById("Isaac").style.background = "url(Images/IsaacDie.png)";
                             say = 16;
                             talk();
                         }
                         else {
                             a[dp][i][n] = 0;
                             i--;
                             a[dp][i][n] = "l"
                             c.style.top = parseInt(c.style.top) - 80 + "px";
                         }
                     }
                     else if (j != 0 && a[dp][i - 1][n] == "bk") {
                         if (allbroken > 1) {
                             a[dp][i][n] = "0";
                             i--;
                             a[dp][i][n] = "l"
                             c.style.top = parseInt(c.style.top) - 80 + "px";
                         }
                     }
                     else if (j != 0 && a[dp][i - 1][n] == 4) {
                         if (knife == 0) {
                             if (redlaser == 0) {
                                 document.getElementById("Isaac").style.background = "url(Images/IsaacDie.png)";
                                 say = 10;
                                 talk();
                             }
                             else if (redlaser == 1) {
                                 document.getElementById("Isaac").style.background = "url(Images/RedIsaacUp.png)";
                                 c.style.left = parseInt(c.style.left) - 400 + "px";
                                 c.style.top = parseInt(c.style.top) + 400 + "px";
                                 i = i + 5;
                                 n = n - 5;
                                 a[dp][i][n] = "l";
                             }
                         }
                         else if (knife == 1) {
                             document.getElementById("Isaac").style.background = "url(Images/DeathIsaacUp.png)";
                             c.style.left = parseInt(c.style.left) - 400 + "px";
                             c.style.top = parseInt(c.style.top) + 400 + "px";
                             i = i + 5;
                             n = n - 5;
                             a[dp][i][n] = "l";
                         }
                     }
                     else if (j != 0 && i >= 2 && a[dp][i - 2][n] == "w") {
                         j = 0;
                     }
                     else if (j != 0 && a[dp][i - 1][n] == "w") {
                         if (key <= 1) {
                             say =3;
                             talk();
                         }
                         else if (key == 2) {
                             redlaser++;
                             a[dp][i][n] = "l"
                             document.getElementById("Isaac").style.background = "url(Images/RedIsaacUp.png)";
                             i--;
                             document.getElementById(dp + i + "_" + n).style.background = "url(Images/OpenGoldBox.png)";
                             i++;
                             say = 4;
                             talk();
                             gdb++;
                             key++;
                         }
                         else if (key == 3) {
                             say = 5;
                             talk();
                         }
                     }
                     else if (j != 0 && a[dp][i - 1][n] == "cv") {
                         if (knife == 0) {
                             dp = 2;
                             document.getElementById("Isaac").style.background = "url(Images/BRedIsaacDown.png)";
                             c.style.left = parseInt(c.style.left) + 480 + "px";
                             i = i + 0;
                             n = n + 6;
                             a[dp][i][n] = "l";
                             j = 0;
                             q = 1;
                             direction = 4;
                             if (hide == 0 && pact == 0) {
                                 i = i + 4;
                                 a[dp][i][n] = "bp";
                                 i++;
                                 a[dp][i][n] = "bd";
                                 i = i - 5;
                                 pact++;
                             }
                             hehe();
                         }
                         if (knife == 1) {
                             dp = 2;
                             document.getElementById("Isaac").style.background = "url(Images/BDeathIsaacDown.png)";
                             c.style.left = parseInt(c.style.left) + 480 + "px";
                             i = i + 0;
                             n = n + 6;
                             a[dp][i][n] = "l";
                             j = 0;
                             q = 1;
                             direction = 4;
                             if (hide == 1) {
                                 i = i + 4;
                                 a[dp][i][n] = "bs";
                                 i++;
                                 a[dp][i][n] = "bud";
                                 i = i - 5;
                             }
                             hehe();
                         }
                     }
                     else if (a[dp][i - 1][n] == "bcv") {
                         if (knife == 0) {
                             dp = 0;
                             hehe();
                             document.getElementById("Isaac").style.background = "url(Images/RedIsaacDown.png)";
                             c.style.left = parseInt(c.style.left) - 480 + "px";
                             i = i + 0;
                             n = n - 6;
                             a[dp][i][n] = "l";
                             j = 0;
                             q = 1;
                             direction = 4;
                         }
                         else if (knife == 1) {
                             dp = 0;
                             hehe();
                             document.getElementById("Isaac").style.background = "url(Images/DeathIsaacDown.png)";
                             c.style.left = parseInt(c.style.left) - 480 + "px";
                             i = i + 0;
                             n = n - 6;
                             a[dp][i][n] = "l";
                             j = 0;
                             q = 1;
                             direction = 4;
                         }
                     }
                     else if (a[dp][i - 1][n] == "gul") {
                         if (steven == 0) {
                             say = 19;
                             talk();
                         }
                         else if (steven == 1) {
                             dp = 0;
                             hehe();
                             document.getElementById("Isaac").style.background = "url(Images/DeathIsaacDown.png)";
                             c.style.left = parseInt(c.style.left) + 400 + "px";
                             c.style.top = parseInt(c.style.top) + 400 + "px";
                             i = i + 5;
                             n = n + 5;
                             a[dp][i][n] = "l";
                             n--;
                             a[dp][i][n] = "sud";
                             n++;
                             j = 0;
                             q = 1;
                             direction = 4;
                         }
                             
                     }
                     else if (a[dp][i - 1][n] == "rul") {
                         if (azazel_alive == 0) {
                             say = 19;
                             talk();
                         }
                         else if(azazel_alive == 1){
                             dp = 2;
                             hehe();
                             document.getElementById("Isaac").style.background = "url(Images/BDeathIsaacDown.png)";
                             c.style.top = parseInt(c.style.top) + 320 + "px";
                             i = i + 4;
                             a[dp][i][n] = "l";
                             j = 0;
                             q = 1;
                             direction = 4;
                         }
                     }
                     else if (j != 0 && gkey != 1 && a[dp][i - 1][n] == "gk") {
                         a[dp][i][n] = "gs";
                         i--;
                         a[dp][i][n] = "l"
                         c.style.top = parseInt(c.style.top) - 80 + "px";
                         hehe();
                         say = 2;
                         talk();
                         gkey++;
                     }
                 }
             }
             ftl = 1;
         }
         if (event.keyCode == 39) {                 //Right
             if (n < 16) {
                 if (a[dp][i][n + 1] == 1 || a[dp][i][n + 1] == 8 || a[dp][i][n + 1] == "d" || a[dp][i][n + 1] == "e" || a[dp][i][n + 1] == "g8" || a[dp][i][n + 1] == "b8" || a[dp][i][n + 1] == "r8" || a[dp][i][n + 1] == "gst") { }
                 if (a[dp][i][n] == "l") {
                     if (knife == 0) {
                         if (redlaser == 0) {
                             document.getElementById("Isaac").style.background = "url(Images/IsaacRight.png)";
                         }
                         else if (redlaser == 1) {
                             if (dp == 0) {
                                 document.getElementById("Isaac").style.background = "url(Images/RedIsaacRight.png)";
                             }
                             else if (dp == 1) {
                                 document.getElementById("Isaac").style.background = "url(Images/GRedIsaacRight.png)";
                             }
                             else if (dp == 2) {
                                 document.getElementById("Isaac").style.background = "url(Images/BRedIsaacRight.png)";
                             }
                             else if (dp == 3) {
                                 document.getElementById("Isaac").style.background = "url(Images/RRedIsaacRight.png)";
                             }
                         }
                     }
                     else if (knife == 1) {
                         if (dp == 0) {
                             document.getElementById("Isaac").style.background = "url(Images/DeathIsaacRight.png)";
                         }
                         else if (dp == 1) {
                             document.getElementById("Isaac").style.background = "url(Images/GDeathIsaacRight.png)";
                         }
                         else if (dp == 2) {
                             document.getElementById("Isaac").style.background = "url(Images/BDeathIsaacRight.png)";
                         }
                         else if (dp == 3) {
                             document.getElementById("Isaac").style.background = "url(Images/RDeathIsaacRight.png)";
                         }
                     }
                 }
                 direction = 3;
                 if (p == 0) {
                     p++;
                     j = 0;
                     m = 0;
                     q = 0;
                 }
                 else {
                     if (p != 0 && a[dp][i][n + 1] == 0 || a[dp][i][n + 1] == "bs" || a[dp][i][n + 1] == "gs" || a[dp][i][n + 1] == "rs") {
                         if (dp == 0) {
                             a[dp][i][n] = 0;
                             n++;
                             a[dp][i][n] = "l"
                             c.style.left = parseInt(c.style.left) + 80 + "px";      //parseInt()   返回某个整数值
                         }
                         else if (dp == 1) {
                             a[dp][i][n] = "gs";
                             n++;
                             a[dp][i][n] = "l"
                             c.style.left = parseInt(c.style.left) + 80 + "px";      //parseInt()   返回某个整数值
                         }
                         else if (dp == 2) {
                             a[dp][i][n] = "bs";
                             n++;
                             a[dp][i][n] = "l"
                             c.style.left = parseInt(c.style.left) + 80 + "px";      //parseInt()   返回某个整数值
                         }
                         else if (dp == 3) {
                             a[dp][i][n] = "rs";
                             n++;
                             a[dp][i][n] = "l"
                             c.style.left = parseInt(c.style.left) + 80 + "px";      //parseInt()   返回某个整数值
                         }
                     }
                     else if (p != 0 && a[dp][i][n + 1] == "k") {
                         a[dp][i][n] = "k";
                         n++;
                         a[dp][i][n] = "l"
                         c.style.left = parseInt(c.style.left) + 80 + "px";
                     }
                     else if (p != 0 && a[dp][i][n + 1] == "gm") {
                         if (steven == 0) {
                             document.getElementById("Isaac").style.background = "url(Images/GIsaacDie.png)";
                             say = 16;
                             talk();
                         }
                         else {
                             a[dp][i][n] = "gs";
                             n++;
                             a[dp][i][n] = "l"
                             c.style.left = parseInt(c.style.left) + 80 + "px";
                         }
                     }
                     else if (p != 0 && a[dp][i][n + 1] == "j") {
                         if (jiawen_alive == 0) {
                             document.getElementById("Isaac").style.background = "url(Images/IsaacDie.png)";
                             say = 16;
                             talk();
                         }
                         else {
                             a[dp][i][n] = 0;
                             n++;
                             a[dp][i][n] = "l"
                             c.style.left = parseInt(c.style.left) + 80 + "px";
                         }
                     }
                     else if (p != 0 && a[dp][i][n + 1] == "bk") {
                         if (allbroken > 1) {
                             a[dp][i][n] = 0;
                             n++;
                             a[dp][i][n] = "l"
                             c.style.left = parseInt(c.style.left) + 80 + "px";
                         }
                     }
                     else if (i >= 14 && a[dp][i][n + 2] == "y") {
                         p = 0;
                     }
                     else if (p != 0 && a[dp][i][n + 1] == "y") {
                         if (prompt != 5) {
                             if (knife == 0) {
                                 say = 6;
                                 talk()
                                 prompt++;
                             }
                             else {
                                 say = 14;
                                 talk()
                                 prompt++;
                             }
                         }
                         else {
                             say = 7;
                             talk();
                             secret++;
                             prompt++;
                         }
                     }
                     else if (p != 0 && a[dp][i][n + 1] == "bud") {
                         dp = 3;
                         hehe();
                         document.getElementById("Isaac").style.background = "url(Images/RDeathIsaacDown.png)";
                         c.style.left = parseInt(c.style.left) + 80 + "px";
                         c.style.top = parseInt(c.style.top) - 400 + "px";
                         i = i - 5;
                         n = n + 1;
                         a[dp][i][n] = "l";
                         p = 0;
                         q = 1;
                         direction = 4;
                         if (azazel_alive == 0) {
                             create_lassboss();
                         }
                     }
                     else if (p != 0 && a[dp][i][n + 1] == "grb") {
                         if (rdb == 0) {
                             knife++;
                             rdb++;
                             a[dp][i][n] = "l";
                             document.getElementById("Isaac").style.background = "url(Images/GDeathIsaacRight.png)";
                             n++;
                             a[dp][i][n] = "grb";
                             n--;
                             hehe();
                             say = 8;
                             talk();
                         }
                         else {
                             say = 5;
                             talk();
                         }
                     }
                     else if (p != 0 && a[dp][i][n + 1] == "gl") {
                         if (gkey == 1) {
                             a[dp][i][n] = "gs";
                             n++;
                             a[dp][i][n] = "gs"
                             hehe();
                             c.style.left = parseInt(c.style.left) + 80 + "px";
                         }
                         else if (gkey == 0) {
                             say = 3;
                             talk()
                         }
                     }
                     else if (p != 0 && gkey != 1 && a[dp][i][n + 1] == "gk") {
                         a[dp][i][n] = "gs";
                         n++;
                         a[dp][i][n] = "l"
                         c.style.left = parseInt(c.style.left) + 80 + "px";
                         hehe();
                         say = 2;
                         talk();
                         gkey++;
                     }
                     else if (p != 0 && a[dp][i][n + 1] == "bp") {
                         a[dp][i][n] = "bs";
                         n++;
                         a[dp][i][n] = "l"
                         c.style.left = parseInt(c.style.left) + 80 + "px";
                         hehe();
                         say = 17;
                         talk();
                     }
                 }
             }
             ftl = 1;
         }
         if (event.keyCode == 40) {                 //Down
             if (i < 7) {
                 if (a[dp][i + 1][n] == 1 || a[dp][i + 1][n] == 9 || a[dp][i + 1][n] == "h" || a[dp][i + 1][n] == "i" || a[dp][i + 1][n] == "ga" || a[dp][i + 1][n] == "ba" || a[dp][i + 1][n] == "ra" || a[dp][i + 1][n] == "gst") { }
                 if (a[dp][i][n] == "l") {
                     if (knife == 0) {
                         if (redlaser == 0) {
                             document.getElementById("Isaac").style.background = "url(Images/IsaacDown.png)";
                         }
                         else if (redlaser == 1) {
                             if (dp == 0) {
                                 document.getElementById("Isaac").style.background = "url(Images/RedIsaacDown.png)";
                             }
                             else if (dp == 1) {
                                 document.getElementById("Isaac").style.background = "url(Images/GRedIsaacDown.png)";
                             }
                             else if (dp == 2) {
                                 document.getElementById("Isaac").style.background = "url(Images/BRedIsaacDown.png)";
                             }
                             else if (dp == 3) {
                                 document.getElementById("Isaac").style.background = "url(Images/RRedIsaacDown.png)";
                             }
                         }
                     }
                     else if (knife == 1) {
                         if (dp == 0) {
                             document.getElementById("Isaac").style.background = "url(Images/DeathIsaacDown.png)";
                         }
                         else if (dp == 1) {
                             document.getElementById("Isaac").style.background = "url(Images/GDeathIsaacDown.png)";
                         }
                         else if (dp == 2) {
                             document.getElementById("Isaac").style.background = "url(Images/BDeathIsaacDown.png)";
                         }
                         else if (dp == 3) {
                             document.getElementById("Isaac").style.background = "url(Images/RDeathIsaacDown.png)";
                         }
                     }
                 }
                 direction = 4;
                 if (q == 0) {
                     q++;
                     m = 0;
                     p = 0;
                     j = 0;
                 }
                 else {
                     if (q != 0 && a[dp][i + 1][n] == 0 || a[dp][i + 1][n] == "bs" || a[dp][i + 1][n] == "gs" || a[dp][i + 1][n] == "rs") {
                         if (dp == 0) {
                             a[dp][i][n] = 0;
                             i++;
                             a[dp][i][n] = "l"
                             c.style.top = parseInt(c.style.top) + 80 + "px";      //parseInt()   返回某个整数值
                         }
                         else if (dp == 1) {
                             a[dp][i][n] = "gs";
                             i++;
                             a[dp][i][n] = "l"
                             c.style.top = parseInt(c.style.top) + 80 + "px";      //parseInt()   返回某个整数值
                         }
                         else if (dp == 2) {
                             a[dp][i][n] = "bs";
                             i++;
                             a[dp][i][n] = "l"
                             c.style.top = parseInt(c.style.top) + 80 + "px";      //parseInt()   返回某个整数值
                         }
                         else if (dp == 3) {
                             a[dp][i][n] = "rs";
                             i++;
                             a[dp][i][n] = "l"
                             c.style.top = parseInt(c.style.top) + 80 + "px";      //parseInt()   返回某个整数值
                         }
                     }
                     else if (q != 0 && key != 1 && a[dp][i + 1][n] == "k") {
                         a[dp][i][n] = "k";
                         i++;
                         a[dp][i][n] = "l"
                         c.style.top = parseInt(c.style.top) + 80 + "px";
                     }
                     else if (q != 0 && a[dp][i + 1][n] == "gm") {
                         if (steven == 0) {
                             document.getElementById("Isaac").style.background = "url(Images/GIsaacDie.png)";
                             say = 16;
                             talk();
                         }
                         else {
                             a[dp][i][n] = "gs";
                             i++;
                             a[dp][i][n] = "l"
                             c.style.top = parseInt(c.style.top) + 80 + "px";
                         }
                     }
                     else if (q != 0 && a[dp][i + 1][n] == "j") {
                         if (jiawen_alive == 1) {
                             document.getElementById("Isaac").style.background = "url(Images/IsaacDie.png)";
                             say = 16;
                             talk();
                         }
                         else {
                             a[dp][i][n] = 0;
                             i++;
                             a[dp][i][n] = "l"
                             c.style.top = parseInt(c.style.top) + 80 + "px";
                         }
                     }
                     else if (q != 0 && a[dp][i + 1][n] == "bk") {
                         if (allbroken > 1) {
                             a[dp][i][n] = 0;
                             i++;
                             a[dp][i][n] = "l"
                             c.style.top = parseInt(c.style.top) + 80 + "px";
                         }
                     }
                     else if (q != 0 && a[dp][i + 1][n] == 2) {
                         if (knife == 0) {
                             if (redlaser == 0) {
                                 document.getElementById("Isaac").style.background = "url(Images/IsaacDown.png)";
                             }
                             else if (redlaser == 1) {
                                 document.getElementById("Isaac").style.background = "url(Images/RedIsaacDown.png)";
                             }
                         }
                         else if (knife == 1) {
                             document.getElementById("Isaac").style.background = "url(Images/DeathIsaacDown.png)";
                         }
                         say = 1;
                         talk();
                     }
                     else if (i <= 5 && a[dp][i + 2][n] == 'q') {
                         q = 0;
                     }
                     else if (q != 0 && a[dp][i + 1][n] == 'q') {
                         if (knife == 0) {
                             document.getElementById("Isaac").style.background = "url(Images/RedIsaacDown.png)";
                             c.style.left = parseInt(c.style.left) + 400 + "px";
                             c.style.top = parseInt(c.style.top) - 400 + "px";
                             i = i - 5;
                             n = n + 5;
                             a[dp][i][n] = "l";
                         }  
                         else if (knife == 1) {
                             document.getElementById("Isaac").style.background = "url(Images/DeathIsaacDown.png)";
                             c.style.left = parseInt(c.style.left) + 400 + "px";
                             c.style.top = parseInt(c.style.top) - 400 + "px";
                             i = i - 5;
                             n = n + 5;
                             a[dp][i][n] = "l";
                         }
                     }
                     else if (q != 0 && a[dp][i + 1][n] == "x") {
                         if (key == 0) {
                             a[dp][i][n] = "l";
                             i++;
                             a[dp][i][n] = "x";
                             document.getElementById(dp + i + "_" + n).style.background = "url(Images/OpenBox.png)";
                             n++;
                             a[dp][i][n] = "k";
                             document.getElementById(dp + i + "_" + n).style.background = "url(Images/Key.png)";
                             i = i - 1;
                             n = n - 1;
                             key++;
                             nb++;
                         }
                         else {
                             say = 5;
                             talk();
                         }
                     }
                     else if (q != 0 && a[dp][i + 1][n] == "k" && redlaser == 0 && key == 1) {
                         a[dp][i][n] = 0;
                         document.getElementById(dp + i + "_" + n).style.background = "url(Images/Space.png)";
                         i++;
                         document.getElementById(dp + i + "_" + n).style.background = "url(Images/Space.png)";
                         a[dp][i][n] = "l"
                         c.style.top = parseInt(c.style.top) + 80 + "px";
                         say = 2;
                         talk();
                         key++;
                     }
                     else if (q != 0 && a[dp][i + 1][n] == "bud") {
                         dp = 3;
                         hehe();
                         document.getElementById("Isaac").style.background = "url(Images/RDeathIsaacDown.png)";
                         c.style.top = parseInt(c.style.top) - 320 + "px";
                         i = i - 4;
                         a[dp][i][n] = "l";
                         j = 0;
                         q = 1;
                         if (azazel_alive == 0) {
                             create_lastboss();
                             create_bossblood();
                         }
                     }
                     else if (q != 0 && gkey != 1 && a[dp][i + 1][n] == "gk") {
                         a[dp][i][n] = "gs";
                         i++;
                         a[dp][i][n] = "l"
                         c.style.top = parseInt(c.style.top) + 80 + "px";
                         hehe();
                         say = 2;
                         talk();
                         gkey++;
                     }
                     else if (q != 0 && a[dp][i + 1][n] == "bp") {
                         a[dp][i][n] = "bs";
                         i++;
                         a[dp][i][n] = "l"
                         c.style.top = parseInt(c.style.top) + 80 + "px";
                         hehe();
                         say = 17;
                         talk();
                     }
                 }
             }
             ftl = 1;
         }
         if (event.keyCode == 32) {
             var tear = document.createElement("div");
             if (knife == 0) {
                 if (dp == 0) {
                     if (redlaser == 0)
                     { tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/Tear.png);"; }
                     else if (redlaser == 1)
                     { tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/RedTear.png);"; }
                 }
                 else if (dp == 1) {
                     tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/GRedTear.png);"
                 }
                 else if (dp == 2) {
                     tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/BRedTear.png);"
                 }
                 else if (dp == 3) {
                     tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/RRedTear.png);"
                 }
             }
             else if (knife == 1) {
                 if (m == 1 && j == 0 && p == 0 && q == 0) {
                     if (dp == 0) {
                         tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/KnifeLeft.png);"
                     }
                     else if (dp == 1) {
                         tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/GKnifeLeft.png);"
                     }
                     else if (dp == 2) {
                         tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/BKnifeLeft.png);"
                     }
                     else if (dp == 3) {
                         tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/RKnifeLeft.png);"
                     }
                 }
                 else if (j == 1 && m == 0 && p == 0 && q == 0) {
                     if (dp == 0) {
                         tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/KnifeUp.png);"
                     }
                     else if (dp == 1) {
                         tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/GKnifeUp.png);"
                     }
                     else if (dp == 2) {
                         tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/BKnifeUp.png);"
                     }
                     else if (dp == 3) {
                         tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/RKnifeUp.png);"
                     }
                 }
                 else if (p == 1 && j == 0 && m == 0 && q == 0) {
                     if (dp == 0) {
                         tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/KnifeRight.png);"
                     }
                     else if (dp == 1) {
                         tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/GKnifeRight.png);"
                     }
                     else if (dp == 2) {
                         tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/BKnifeRight.png);"
                     }
                     else if (dp == 3) {
                         tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/RKnifeRight.png);"
                     }
                 }
                 else if (q == 1 && j == 0 && p == 0 && m == 0) {
                     if (dp == 0) {
                         tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/KnifeDown.png);"
                     }
                     else if (dp == 1) {
                         tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/GKnifeDown.png);"
                     }
                     else if (dp == 2) {
                         tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/BKnifeDown.png);"
                     }
                     else if (dp == 3) {
                         tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/RKnifeDown.png);"
                     }
                 }
             }
             tear.x = n;
             tear.y = i;
             tear.style.left = n * 80 + "px";
             tear.style.top = i * 80 + "px";
             document.body.appendChild(tear);
             she_tear(tear, direction);
         }
     }
     else if (dialog_alive == 1 && event.keyCode == 13) {
         dialog_alive = 0;
         talk();
     }
     if (dialog_alive == 0 && first_talk == 1 && event.keyCode == 13) {
         if (cz != 2) {
             caozuo();
         }
     }
     if (dialog_alive == 1 && say == 12) {
         if (event.keyCode == 89) {
             history.go(0);
         }
         else if (event.keyCode == 78) {
             window.opener = null;
             window.open('', '_self');
             window.close();
         }
     }
 }

 function she_tear(tr, d) {
     if (a[dp][tr.y][tr.x] == "w" || a[dp][tr.y][tr.x] == "i" || a[dp][tr.y][tr.x] == 8 || a[dp][tr.y][tr.x] == "x" || a[dp][tr.y][tr.x] == "c" || a[dp][tr.y][tr.x] == "y" || a[dp][tr.y][tr.x] == 1 || a[dp][tr.y][tr.x] == 4 || a[dp][tr.y][tr.x] == 3 || a[dp][tr.y][tr.x] == "a" || a[dp][tr.y][tr.x] == 6 || a[dp][tr.y][tr.x] == 2 || a[dp][tr.y][tr.x] == "h" || a[dp][tr.y][tr.x] == "r" || a[dp][tr.y][tr.x] == "b6" || a[dp][tr.y][tr.x] == "b8" || a[dp][tr.y][tr.x] == "ba" || a[dp][tr.y][tr.x] == "bc" || a[dp][tr.y][tr.x] == "cv" || a[dp][tr.y][tr.x] == "bcv" || a[dp][tr.y][tr.x] == "q" || a[dp][tr.y][tr.x] == "fq" || a[dp][tr.y][tr.x] == "fr" || a[dp][tr.y][tr.x] == "bf" || a[dp][tr.y][tr.x] == "g6" || a[dp][tr.y][tr.x] == "g8" || a[dp][tr.y][tr.x] == "ga" || a[dp][tr.y][tr.x] == "gc" || a[dp][tr.y][tr.x] == "r6" || a[dp][tr.y][tr.x] == "r8" || a[dp][tr.y][tr.x] == "ra" || a[dp][tr.y][tr.x] == "rc" || a[dp][tr.y][tr.x] == "gl" || a[dp][tr.y][tr.x] == "bud" || a[dp][tr.y][tr.x] == "grb" || a[dp][tr.y][tr.x] == "gul" || a[dp][tr.y][tr.x] == "rul" || a[dp][tr.y][tr.x] == "gst" || a[dp][tr.y][tr.x] == "bst" || a[dp][tr.y][tr.x] == "bd" || a[dp][tr.y][tr.x] == "bp") {
         tr.parentNode.removeChild(tr);
         return;
     }
     if (a[dp][tr.y][tr.x] == "l") {
         if (ftl == 0) {
             tr.parentNode.removeChild(tr);
             return;
         }
     }
     if (a[dp][tr.y][tr.x] == "k") {
         if (key == 1) {
             tr.parentNode.removeChild(tr);
             return;
         }
     }
     if (a[dp][tr.y][tr.x] == "gl") {
         if (gkey == 0) {
             tr.parentNode.removeChild(tr);
             return;
         }
     }
     if (a[dp][tr.y][tr.x] == "bk") {
         if (broken < 4) {
             tr.parentNode.removeChild(tr);
             broken++;
             return;
         }
         else if (broken == 4) {
             var fi = i, fn = n;
             tr.parentNode.removeChild(tr);
             i = tr.y;
             n = tr.x;
             a[dp][i][n] = 0;
             document.getElementById(dp + i + "_" + n).style.background = "url(Images/Space.png)";
             broken = 0;
             allbroken++;
             i = fi;
             n = fn;
             return;
         }
     }
     if (a[dp][tr.y][tr.x] == "gm") {
         if (steven_attack < 10) {
             tr.parentNode.removeChild(tr);
             steven_attack++;
             blood++;
             create_bossblood();
             return;
         }
         else if (steven_attack == 10) {
             var fi = i, fn = n;
             tr.parentNode.removeChild(tr);
             i = tr.y;
             n = tr.x;
             a[dp][i][n] = "gs";
             document.getElementById(dp + i + "_" + n).style.background = "url(Images/GraySpace.png)";
             document.getElementById("Steven").style.background = "url(Images/GraySpace.png)";
             monster.parentNode.removeChild(monster);
             i = 4;
             n = 8;
             a[dp][i][n] = "gk";
             i = fi;
             n = fn;
             hehe();
             steven++;
             blood++;
             steven_attack++;
             say = 13;
             talk();
             create_bossblood();
             return;
         }
     }
         if (a[dp][tr.y][tr.x] == "lb") {
             if (azazel_attack < 10) {
                 tr.parentNode.removeChild(tr);
                 azazel_attack++;
                 blood++;
                 create_bossblood();
                 return;
             }
             else if (azazel_attack == 10) {
                 var fi = i, fn = n;
                 tr.parentNode.removeChild(tr);
                 i = tr.y;
                 n = tr.x;
                 a[dp][i][n] = "rs";
                 document.getElementById(dp + i + "_" + n).style.background = "url(Images/RedSpace.png)";
                 document.getElementById("Azazel").style.background = "url(Images/RedSpace.png)";
                 azazel.parentNode.removeChild(azazel);
                 i = fi;
                 n = fn;
                 hehe();
                 azazel_alive=1;
                 blood++;
                 azazel_attack++;
                 say = 18;
                 talk();
                 create_bossblood();
                 return;
             }
     }
     if (a[dp][tr.y][tr.x] == "j") {
         if (jiawen_attack < 5) {
             tr.parentNode.removeChild(tr);
             jiawen_attack++;
             return;
         }
         else if (jiawen_attack == 5) {
             var fi = i, fn = n;
             tr.parentNode.removeChild(tr);
             i = tr.y;
             n = tr.x;
             a[dp][i][n] = 0;
             document.getElementById(dp + i + "_" + n).style.background = "url(Images/Space.png)";
             document.getElementById("Jiawen").style.background = "url(Images/Space.png)";
             jiawen.parentNode.removeChild(jiawen);
             i = fi;
             n = fn;
             jiawen++;
             jiawen_attack++;
             say = 15;
             talk();
             return;
         }
     }
     if (a[dp][tr.y][tr.x] == "sud") {
         if (secret < 1) {
             tr.parentNode.removeChild(tr);
             return;
         }
         else if (secret >= 1) {
             if (sbroken != 4) {
                 tr.parentNode.removeChild(tr);
                 sbroken++;
                 return;
             }
             else if (sbroken == 4) {
                 var sfi = i, sfn = n;
                 tr.parentNode.removeChild(tr);
                 i = tr.y;
                 n = tr.x;
                 a[dp][i][n] = "sud";
                 sbroken++;
                 secret++;
                 hehe();
                 i = sfi;
                 n = sfn;
                 return;
             }
         }
     }
     if (d == 1) {
         tr.style.left = tr.x * 80 + "px";
         tr.x--;
     }
     if (d == 2) {
         tr.style.top = tr.y * 80 + "px";
         tr.y--;
     }
     if (d == 3) {
         tr.style.left = tr.x * 80 + "px";
         tr.x++;
     }
     if (d == 4) {
         tr.style.top = tr.y * 80 + "px";
         tr.y++;
     }
     setTimeout(function () { she_tear(tr, d); }, 60);
 }

 function create_monster() {
     monster.id = "Steven"
     monster.innerHTML = "路西法";
     monster.style.cssText = "width: 80px; height: 80px;position: absolute;line-height: 0px;text-align: center;z-index: -1;font-size:16px;font-family: Microsoft YaHei;background: url(Images/MonsterLeft.png);"
     n = n + 9;
     monster.x = n;
     monster.y = i;
     n = n - 9;
     a[dp][monster.y][monster.x] = "gm";
     monster.style.left = monster.x * 80 + "px";
     monster.style.top = monster.y * 80 + "px";
     document.body.appendChild(monster);
     monster_move(monster);
     create_bossblood();
 }

 function create_jiawen() {
     jiawen.id = "Jiawen"
     jiawen.innerHTML = "基阿文";
     jiawen.style.cssText = "width: 80px; height: 80px;position: absolute;line-height: 0px;text-align: center;z-index: -1;font-size:16px;font-family: Microsoft YaHei;background: url(Images/JiawenDown.png);"
     i = i - 5;
     n = n - 4;
     jiawen.x = n;
     jiawen.y = i;
     i = i + 5;
     n = n + 4;
     a[dp][jiawen.y][jiawen.x] = "j";
     jiawen.style.left = jiawen.x * 80 + "px";
     jiawen.style.top = jiawen.y * 80 + "px";
     document.body.appendChild(jiawen);
     jiawen_move(jiawen);
 }

 function create_lastboss() {
     azazel.id = "Azazel"
     azazel.innerHTML = "阿撒兹勒";
     azazel.style.cssText = "width: 80px; height: 80px;position: absolute;line-height: 0px;text-align: center;z-index: -1;font-size:16px;font-family: Microsoft YaHei;background: url(Images/Azazel.png);"
     i = i + 5;
     n = n - 7;
     azazel.x = n;
     azazel.y = i;
     i = i - 5;
     n = n + 7;
     a[dp][azazel.y][azazel.x] = "lb";
     azazel.style.left = azazel.x * 80 + "px";
     azazel.style.top = azazel.y * 80 + "px";
     document.body.appendChild(azazel);
     azazel_move(azazel);
 }

 function monster_move(m) {
     if (steven_attack < 11) {
         if (dialog_alive == 0) {
             if (md == 1) {
                 if (a[1][m.y][m.x - 1] == "gs") {
                     a[1][m.y][m.x] = "gs";
                     m.x--;
                     a[1][m.y][m.x] = "gm";
                     m.style.left = parseInt(m.style.left) - 80 + "px";      //parseInt()   返回某个整数值
                     mdt = 0;
                 }
                 else if (a[1][m.y][m.x - 1] == "gc") {
                     md = 2;
                     tmd = 3;
                     mdt = 1;
                     document.getElementById("Steven").style.background = "url(Images/MonsterRight.png)";
                 }
                 else if (a[1][m.y][m.x - 1] == "l") {
                     document.getElementById("Isaac").style.background = "url(Images/GIsaacDie.png)";
                     say = 16;
                     talk();
                 }
             }
             else if (md == 2) {
                 if (a[1][m.y - 1][m.x] == "gs") {
                     a[1][m.y][m.x] = "gs";
                     m.y--;
                     a[1][m.y][m.x] = "gm";
                     m.style.top = parseInt(m.style.top) - 80 + "px";      //parseInt()   返回某个整数值
                     mdt = 0;
                 }
                 else if (a[1][m.y - 1][m.x] == "g6") {
                     md = 3;
                     tmd = 4;
                     mdt = 1;
                     document.getElementById("Steven").style.background = "url(Images/MonsterDown.png)";
                 }
                 else if (a[1][m.y - 1][m.x] == "l") {
                     document.getElementById("Isaac").style.background = "url(Images/GIsaacDie.png)";
                     say = 16;
                     talk();
                 }
             }
             else if (md == 3) {
                 if (a[1][m.y][m.x + 1] == "gs") {
                     a[1][m.y][m.x] = "gs";
                     m.x++;
                     a[1][m.y][m.x] = "gm";
                     m.style.left = parseInt(m.style.left) + 80 + "px";      //parseInt()   返回某个整数值
                     mdt = 0;
                 }
                 else if (a[1][m.y][m.x + 1] == "gst") {
                     md = 4;
                     tmd = 1;
                     mdt = 1;
                     document.getElementById("Steven").style.background = "url(Images/MonsterLeft.png)";
                 }
                 else if (a[1][m.y][m.x + 1] == "l") {
                     document.getElementById("Isaac").style.background = "url(Images/GIsaacDie.png)";
                     say = 16;
                     talk();
                 }
             }
             else if (md == 4) {
                 if (a[1][m.y + 1][m.x] == "gs") {
                     a[1][m.y][m.x] = "gs";
                     m.y++;
                     a[1][m.y][m.x] = "gm";
                     m.style.top = parseInt(m.style.top) + 80 + "px";      //parseInt()   返回某个整数值
                     mdt = 0;
                 }
                 else if (a[1][m.y + 1][m.x] == "ga") {
                     md = 1;
                     tmd = 2;
                     mdt = 1;
                     document.getElementById("Steven").style.background = "url(Images/MonsterUp.png)";
                 }
                 else if (a[1][m.y + 1][m.x] == "l") {
                     document.getElementById("Isaac").style.background = "url(Images/GIsaacDie.png)";
                     say = 16;
                     talk();
                 }
             }
             if (mdt != 1) {
                 var m_tear = document.createElement("div");
                 m_tear.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/BigRedTear.png);"
                 if (md == 1) {
                     m_tear.x = monster.x;
                     m_tear.y = monster.y - 1;
                     m_tear.style.left = m_tear.x * 80 + "px";
                     m_tear.style.top = m_tear.y * 80 + "px";
                 }
                 else if (md == 2) {
                     m_tear.x = monster.x + 1;
                     m_tear.y = monster.y;
                     m_tear.style.left = m_tear.x * 80 + "px";
                     m_tear.style.top = m_tear.y * 80 + "px";
                 }
                 else if (md == 3) {
                     m_tear.x = monster.x;
                     m_tear.y = monster.y + 1;
                     m_tear.style.left = m_tear.x * 80 + "px";
                     m_tear.style.top = m_tear.y * 80 + "px";
                 }
                 else if (md == 4) {
                     m_tear.x = monster.x - 1;
                     m_tear.y = monster.y;
                     m_tear.style.left = m_tear.x * 80 + "px";
                     m_tear.style.top = m_tear.y * 80 + "px";
                 }
                 document.body.appendChild(m_tear);
                 m_she_tear(m_tear, tmd);
             }
         }
         setTimeout(function () { monster_move(m); }, 300);
     }
 }

 function jiawen_move(j) {
     if (jiawen_attack < 6) {
         if (dialog_alive == 0 && cz == 2) {
             if (jd == 1) {
                 if (a[dp][j.y][j.x - 1] == 0) {
                     a[dp][j.y][j.x] = 0;
                     j.x--;
                     a[dp][j.y][j.x] = "j";
                     j.style.left = parseInt(j.style.left) - 80 + "px";      //parseInt()   返回某个整数值
                 }
                 else if (a[dp][j.y][j.x - 1] == "k") {
                     jd = 4;
                     document.getElementById("Jiawen").style.background = "url(Images/JiawenDown.png)";
                 }
                 else if (a[dp][j.y][j.x - 1] == "l") {
                     document.getElementById("Isaac").style.background = "url(Images/IsaacDie.png)";
                     say = 16;
                     talk();
                 }
             }
             else if (jd == 2) {
                 if (a[dp][j.y - 1][j.x] == 0) {
                     a[dp][j.y][j.x] = 0;
                     j.y--;
                     a[dp][j.y][j.x] = "j";
                     j.style.top = parseInt(j.style.top) - 80 + "px";      //parseInt()   返回某个整数值
                 }
                 else if (a[dp][j.y - 1][j.x] == 6) {
                     jd = 1;
                     document.getElementById("Jiawen").style.background = "url(Images/JiawenLeft.png)";
                 }
                 else if (a[dp][j.y - 1][j.x] == "l") {
                     document.getElementById("Isaac").style.background = "url(Images/IsaacDie.png)";
                     say = 16;
                     talk();
                 }
             }
             else if (jd == 3) {
                 if (a[dp][j.y][j.x + 1] == 0) {
                     a[dp][j.y][j.x] = 0;
                     j.x++;
                     a[dp][j.y][j.x] = "j";
                     j.style.left = parseInt(j.style.left) + 80 + "px";      //parseInt()   返回某个整数值
                 }
                 else if (a[dp][j.y][j.x + 1] == 1) {
                     jd = 2;
                     document.getElementById("Jiawen").style.background = "url(Images/JiawenUp.png)";
                 }
                 else if (a[dp][j.y][j.x + 1] == "l") {
                     document.getElementById("Isaac").style.background = "url(Images/IsaacDie.png)";
                     say = 16;
                     talk();
                 }
             }
             else if (jd == 4) {
                 if (a[dp][j.y + 1][j.x] == "k" || a[dp][j.y + 1][j.x] == 0) {
                     a[dp][j.y][j.x] = 0;
                     document.getElementById(dp+j.y+"_"+j.x).style.background = "url(Images/Space.png)";
                     j.y++;
                     a[dp][j.y][j.x] = "j";
                     j.style.top = parseInt(j.style.top) + 80 + "px";      //parseInt()   返回某个整数值
                 }
                 else if (a[dp][j.y + 1][j.x] == 1) {
                     jd = 3;
                     document.getElementById("Jiawen").style.background = "url(Images/JiawenRight.png)";
                 }
                 else if (a[dp][j.y - 1][j.x] == "l") {
                     document.getElementById("Isaac").style.background = "url(Images/IsaacDie.png)";
                     say = 16;
                     talk();
                 }
             }
         }
         setTimeout(function () { jiawen_move(j); }, 120);
     }
 }

 function azazel_move(l) {
     if (azazel_attack < 11) {
         if (dialog_alive == 0) {
             if (ld == 1) {
                 if (a[dp][l.y][l.x - 1] == "rs") {
                     a[dp][l.y][l.x] = "rs";
                     l.x--;
                     a[dp][l.y][l.x] = "lb";
                     l.style.left = parseInt(l.style.left) - 80 + "px";      //parseInt()   返回某个整数值
                     ad = 0;
                     lt++;
                 }
                 else if (a[dp][l.y][l.x - 1] == "l") {
                     document.getElementById("Isaac").style.background = "url(Images/RIsaacDie.png)";
                     say = 16;
                     talk();
                 }
                 else if (a[dp][l.y][l.x - 1] == "rc") {
                     ld = 2;
                     ad = 1;
                 }
             }
             else if (ld == 2) {
                 if (a[dp][l.y][l.x + 1] == "rs") {
                     a[dp][l.y][l.x] = "rs";
                     l.x++;
                     a[dp][l.y][l.x] = "lb";
                     l.style.left = parseInt(l.style.left) + 80 + "px";      //parseInt()   返回某个整数值
                     ad = 0;
                     lt++;
                 }
                 else if (a[dp][l.y][l.x + 1] == "l") {
                     document.getElementById("Isaac").style.background = "url(Images/RIsaacDie.png)";
                     say = 16;
                     talk();
                 }
                 else if (a[dp][l.y][l.x + 1] == "r8") {
                     ld = 1;
                     ad = 1;
                 }
             }
             if (ad == 0) {
                 if (lt == 3) {
                     var a_tear_1 = document.createElement("div");
                     var a_tear_2 = document.createElement("div");
                     var a_tear_3 = document.createElement("div");
                     a_tear_1.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/RBigRedTear.png);"
                     a_tear_2.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/RBigRedTear.png);"
                     a_tear_3.style.cssText = "width: 80px; height: 80px;position: absolute;z-index:-2;background: url(Images/RBigRedTear.png);"
                     a_tear_1.x = l.x;
                     a_tear_1.y = l.y - 1;
                     a_tear_2.x = l.x;
                     a_tear_2.y = l.y - 1;
                     a_tear_3.x = l.x;
                     a_tear_3.y = l.y - 1;
                     a_tear_1.style.left = a_tear_1.x * 80 + "px";
                     a_tear_1.style.top = a_tear_1.y * 80 + "px";
                     a_tear_2.style.left = a_tear_2.x * 80 + "px";
                     a_tear_2.style.top = a_tear_2.y * 80 + "px";
                     a_tear_3.style.left = a_tear_3.x * 80 + "px";
                     a_tear_3.style.top = a_tear_3.y * 80 + "px";
                     document.body.appendChild(a_tear_1);
                     document.body.appendChild(a_tear_2);
                     document.body.appendChild(a_tear_3);
                     three_tear1(a_tear_1);
                     three_tear2(a_tear_2);
                     three_tear3(a_tear_3);
                     lt = 0;
                 }
             }
             setTimeout(function () { azazel_move(l); }, 300);
         }
     }
 }

 function m_she_tear(mtr, d) {
     if (dialog_alive == 0) {
         if (a[dp][mtr.y][mtr.x] == "g6" || a[dp][mtr.y][mtr.x] == "g8" || a[dp][mtr.y][mtr.x] == "ga" || a[dp][mtr.y][mtr.x] == "gc" || a[dp][mtr.y][mtr.x] == "gl" || a[dp][mtr.y][mtr.x] == "gul" || a[dp][mtr.y][mtr.x] == "gst") {
             mtr.parentNode.removeChild(mtr);
             return;
         }
         else if (a[dp][mtr.y][mtr.x] == "l") {
             mtr.parentNode.removeChild(mtr);
             document.getElementById("Isaac").style.background = "url(Images/GIsaacDie.png)";
                 say = 9;
                 talk();
         }
         if (d == 1) {
             mtr.style.left = mtr.x * 80 + "px";
             mtr.x--;
         }
         if (d == 2) {
             mtr.style.top = mtr.y * 80 + "px";
             mtr.y--;
         }
         if (d == 3) {
             mtr.style.left = mtr.x * 80 + "px";
             mtr.x++;
         }
         if (d == 4) {
             mtr.style.top = mtr.y * 80 + "px";
             mtr.y++;
         }
     }
     setTimeout(function () { m_she_tear(mtr, d); }, 60);
 }

 function three_tear1(tt1) {
     if (dialog_alive == 0) {
         if (a[dp][tt1.y][tt1.x] == "rc" || a[dp][tt1.y][tt1.x] == "r6" || a[dp][tt1.y][tt1.x] == "r5" || a[dp][tt1.y][tt1.x] == "rul") {
             tt1.parentNode.removeChild(tt1);
             return;
         }
         if (a[dp][tt1.y][tt1.x] == "l") {
             tt1.parentNode.removeChild(tt1);
             document.getElementById("Isaac").style.background = "url(Images/RIsaacDie.png)";
             say = 9;
             talk();
         }
         tt1.style.left = tt1.x * 80 + "px"
         tt1.style.top = tt1.y * 80 + "px"
         tt1.y--;
         tt1.x--;
         
     }
     setTimeout(function () { three_tear1(tt1); }, 80);
 }

 function three_tear2(tt2) {
     if (dialog_alive == 0) {
         if (a[dp][tt2.y][tt2.x] == "r6" || a[dp][tt2.y][tt2.x] == "rul") {
             tt2.parentNode.removeChild(tt2);
             return;
         }
         if (a[dp][tt2.y][tt2.x] == "l") {
             tt2.parentNode.removeChild(tt2);
             document.getElementById("Isaac").style.background = "url(Images/RIsaacDie.png)";
             say = 9;
             talk();
         }
         tt2.style.top = tt2.y * 80 + "px"
         tt2.y--;
     }
     setTimeout(function () { three_tear2(tt2); }, 80);
 }

 function three_tear3(tt3){
     if (dialog_alive == 0) {
         if (a[dp][tt3.y][tt3.x] == "r6" || a[dp][tt3.y][tt3.x] == "r8" || a[dp][tt3.y][tt3.x] == "r7" || a[dp][tt3.y][tt3.x] == "rul") {
             tt3.parentNode.removeChild(tt3);
             return;
         }
         if (a[dp][tt3.y][tt3.x] == "l") {
             tt3.parentNode.removeChild(tt3);
             document.getElementById("Isaac").style.background = "url(Images/RIsaacDie.png)";
             say = 9;
             talk();
         }
         tt3.style.left = tt3.x * 80 + "px"
         tt3.style.top = tt3.y * 80 + "px"
         tt3.y--;
         tt3.x++;
     }
     setTimeout(function () { three_tear3(tt3); }, 80);
}

 function talk() {
     if (say == 0) {
         dialog_alive = 0;
         var st = document.getElementById("dialog");
         document.body.removeChild(st);
         return;
     }
     else {
         var dialog = document.createElement("div");
         dialog.id = "dialog";
         dialog.style.cssText = "width:350px;height:249px;left:505px;top:170px;line-height:135px;text-align:center;font-family:Microsoft YaHei;font-size:20px;color:white;position: absolute;background: url(Images/Dialog.png);"
         document.body.appendChild(dialog);
         if (say == 1) {
             dialog_alive=1;
             dialog.innerHTML = "以撒不想回到小黑屋!!!<br>- Enter -";
             say = 0;
             return;
         }
         else if (say == 2) {
             dialog_alive=1;
             dialog.innerHTML = "以撒得到了一把钥匙!!!<br>- Enter -";
             say = 0;
         }
         else if (say == 3) {
             dialog_alive=1;
             dialog.innerHTML = "以撒没有钥匙!!!<br>- Enter -";
             say = 0;
         }
         else if (say == 4) {
             dialog_alive=1;
             dialog.innerHTML = "以撒得到了科技眼!!!<br>- Enter -";
             say = 0;
         }
         else if (say == 5) {
             dialog_alive=1;
             dialog.innerHTML = "里面没有东西!!!!<br>- Enter -";
             say = 0;
         }
         else if (say == 6) {
             dialog_alive=1;
             dialog.innerHTML = '"无论如何,你都会孤独的死去."<br>- Enter -';
             say = 0;
         }
         else if (say == 7) {
             dialog_alive=1;
             dialog.innerHTML = '"你的命运在我前方那块石头里面."<br>- Enter -';
             say = 0;
         }
         else if (say == 8) {
             dialog_alive=1;
             dialog.innerHTML = "邪恶吞噬了以撒的身体!!!<br>- Enter -";
             say = 0;
         }
         else if (say == 9) {
             dialog_alive=1;
             dialog.innerHTML = "以撒,卒.<br>- Enter -";
             say = 12;
         }
         else if (say == 10) {
             dialog_alive=1;
             dialog.innerHTML = "以撒还不够强到足以踏进这里!!!<br>- Enter -";
             say = 9;
         }
         else if(say == 11) {
             dialog_alive=1;
             dialog.innerHTML = "以撒迷失了道路...<br>- Enter -";
             say = 0;
         }
         else if (say == 12) {
             dialog_alive=1;
             dialog.innerHTML = '重新开始吗?<br>重新开始请按"Y",退出请按"N".';
         }
         else if (say == 13) {
             dialog_alive=1;
             dialog.innerHTML = "以撒打败了路西法!!!<br>- Enter -";
             say = 0;
         }
         else if (say == 14) {
             dialog_alive=1;
             dialog.innerHTML = '"你现在这个样子,和死没有区别了."<br>- Enter -';
             say = 0;
         }
         else if (say == 15) {
             dialog_alive = 1;
             dialog.innerHTML = "以撒打败了基阿文!!!<br>- Enter -";
             say = 0;
         }
         else if (say == 16) {
             dialog_alive = 1;
             dialog.innerHTML = "你太弱了!!!<br>- Enter -";
             say = 9;
         }
         else if (say == 17) {
             dialog_alive = 1;
             dialog.innerHTML = '以撒得到提示"与智者对话六次".<br>- Enter -';
             say = 0;
         }
         else if (say == 18) {
             dialog_alive = 1;
             dialog.innerHTML = "以撒打败了阿撒兹勒!!!<br>- Enter -";
             say = 20;
         }
         else if (say == 19) {
             dialog_alive = 1;
             dialog.innerHTML = "必须通过该层!!!<br>- Enter -";
             say = 0;
         }
         else if (say == 20) {
             dialog_alive = 1;
             dialog.innerHTML = "恭喜你通关了!!!<br>- Enter -";
             say = 12;
         }
     }
 }

 function caozuo() {
     if (cz == 0) {
         var cz_dialog = document.createElement("div");
         cz_dialog.id = "czdialog";
         cz_dialog.style.cssText = "width:350px;height:249px;left:505px;top:170px;line-height:43px;text-align:center;font-family:Microsoft YaHei;font-size:20px;color:white;position: absolute;background: url(Images/Dialog.png);"
         cz_dialog.innerHTML = "<br>操作说明:<br>     上下左右键控制以撒的方向<br>按下空格键以撒会发射眼泪.<br>- Enter -";
         document.body.appendChild(cz_dialog);
         cz=1;
     }
     else if (cz == 1) {
         cz=2;
         first_talk++;
         dialog_alive = 0;
         var scz = document.getElementById("czdialog");
         document.body.removeChild(scz);
         return;
     }
 }

 function create_bossblood() {
     if (blood == 0) {
         var boss_blood = document.createElement("div");
         boss_blood.id = "bossblood";
         boss_blood.style.cssText = "width:370px;height:42px;left:495px;top:10px;z-index:-1;position: absolute;background: url(Images/FullBlood.png);"
         document.body.appendChild(boss_blood);
     }
     if (blood == 1) {
         document.getElementById("bossblood").style.background = "url(Images/Blood90%.png)";
     }
     if (blood == 2) {
         document.getElementById("bossblood").style.background = "url(Images/Blood80%.png)";
     }
     if (blood == 3) {
         document.getElementById("bossblood").style.background = "url(Images/Blood70%.png)";
     }
     if (blood == 4) {
         document.getElementById("bossblood").style.background = "url(Images/Blood60%.png)";
     }
     if (blood == 5) {
         document.getElementById("bossblood").style.background = "url(Images/Blood50%.png)";
     }
     if (blood == 6) {
         document.getElementById("bossblood").style.background = "url(Images/Blood40%.png)";
     }
     if (blood == 7) {
         document.getElementById("bossblood").style.background = "url(Images/Blood30%.png)";
     }
     if (blood == 8) {
         document.getElementById("bossblood").style.background = "url(Images/Blood20%.png)";
     }
     if (blood == 9) {
         document.getElementById("bossblood").style.background = "url(Images/Blood10%.png)";
     }
     if (blood == 10) {
         document.getElementById("bossblood").style.background = "url(Images/Blood1%.png)";
     }
     if (blood == 11) {
         var no_blood = document.getElementById("bossblood");
         document.body.removeChild(no_blood);
         blood = 0;
         return;
     }
 }
