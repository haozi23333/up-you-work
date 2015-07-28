
window.onload = function () {
    document.getElementById("wy").height = parent.frames[0].top.innerHeight + "px";
    if (!cc()) {
        window.location.href = dizhi+"/404.html";
        return 0;
    }
        jQuery.ajax({
            type: 'POST',
            url: dizhi+"/show",
            data: {a:cc()},
            success: function (res) {
var c="";
if(res.index==""&&res.index=="1")
{
window.location.href = dizhi+"/404.html";
  return 0;
}
d=res.index;
for(var i=1;i<d.split("/").length;i++){
  c=c+"/"+d.split("/")[i]}
                document.getElementById('wy').src = dizhi+c;
            },
        });
}

function cc() {
    var reg = /(\?)/gi;
    while (reg.exec(location.href)) {
        return RegExp.rightContext;
    }
}
