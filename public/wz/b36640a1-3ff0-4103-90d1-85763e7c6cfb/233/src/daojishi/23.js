var Radius=8;
var Margin_top=60;
var Margin_left=60;
const endtime=new Date(2015,6,28,21,00);
var curShowTimeSeconds=0
var balls=[];
const colors=["#33B5E5","#0099CC","#AA66CC","#9933CC","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"]

window.onload= function () {//绘制画布
    var canvas=document.getElementById("canvas");
    var context=canvas.getContext("2d");
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    curShowTimeSeconds=getCurrentShowTimeSeconds()
    setInterval(function(){
        render(context)
        update()
    },50)

}
function update(){ //修改时间
var nextShowTimeSeconds=getCurrentShowTimeSeconds();
    var nexthours=parseInt(nextShowTimeSeconds/3600);
    var nextminutes=parseInt((nextShowTimeSeconds-nexthours*3600)/60);
    var nextseconds=nextShowTimeSeconds%60;

    var curhours=parseInt(curShowTimeSeconds/3600);
    var curminutes=parseInt((curShowTimeSeconds-curhours*3600)/60);
    var curseconds=curShowTimeSeconds%60;
    if(curseconds!=nextseconds){
        if(parseInt(curhours/10)!=parseInt(nexthours/10)){
            addBalls(Margin_left+0,Margin_top,parseInt(curhours/10));
        }
        if(parseInt(curhours%10)!=parseInt(nexthours%10)){
            addBalls(Margin_left+15*(Radius+1),Margin_top,parseInt(curhours%10));
        }
        if(parseInt(curminutes/10)!=parseInt(nextminutes/10)){
            addBalls(Margin_left+39*(Radius+1),Margin_top,parseInt(nextminutes/10));
        }
        if(parseInt(curminutes%10)!=parseInt(nextminutes%10)){
            addBalls(Margin_left+54*(Radius+1),Margin_top,parseInt(nextminutes%10));
        }
        if(parseInt(curseconds/10)!=parseInt(nextseconds/10)){
            addBalls(Margin_left+78*(Radius+1),Margin_top,parseInt(nextseconds/10));
        }
        if(parseInt(curseconds%10)!=parseInt(nextseconds%10)){
            addBalls(Margin_left+93*(Radius+1),Margin_top,parseInt(nextseconds%10));
        }
        curShowTimeSeconds=nextShowTimeSeconds
    }
}

function getCurrentShowTimeSeconds(){ //获取当前时间
    var curTime=new Date();
    var ret=endtime.getTime()-curTime.getTime();
    ret=Math.round(ret/1000);
    return ret >= 0 ? ret:0;
}
function render(cxt){
    cxt.clearRect(0,0,canvas.width,canvas.height);
    var hours=parseInt(curShowTimeSeconds/3600);
    var minutes=parseInt((curShowTimeSeconds-hours*3600)/60);
    var seconds=curShowTimeSeconds%60;
    renderDigit(Margin_left,Margin_top,parseInt(hours/10),cxt);
    renderDigit(Margin_left+15*(Radius+1),Margin_top,parseInt(hours%10),cxt);
    renderDigit(Margin_left+30*(Radius+1),Margin_top,10,cxt);
    renderDigit(Margin_left+39*(Radius+1),Margin_top,parseInt(minutes/10),cxt);
    renderDigit(Margin_left+54*(Radius+1),Margin_top,parseInt(minutes%10),cxt);
    renderDigit(Margin_left+69*(Radius+1),Margin_top,10,cxt);
    renderDigit(Margin_left+78*(Radius+1),Margin_top,parseInt(seconds/10),cxt);
    renderDigit(Margin_left+93*(Radius+1),Margin_top,parseInt(seconds%10),cxt);

}
function renderDigit(x,y,num,cxt){ //根据数组绘制圆圈
    cxt.fillStyle="rgb(0,102,153";
    for(var i=0;i<digit[num].length;i++){
        for(var j=0;j<digit[num][i].length;j++){
            if(digit[num][i][j]==1) {
                cxt.beginPath()
                cxt.arc(x + j * 2 * (Radius + 1) + (Radius + 1), y + i * 2 * (Radius + 1) + (Radius + 1), Radius, 0, 2 * Math.PI)
                cxt.closePath()
                cxt.fill()
            }
        }
    }
}
