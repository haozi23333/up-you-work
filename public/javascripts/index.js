I = {};
window.onresize = function () {

    $("#zs")[0].style.height = $("#works")[0].style.paddingTop = document.documentElement.clientHeight + 'px';
}
function tz()
{
    if (!getCookie('user'))
    {
        window.location.href = dizhi+"/login.html";
    }
    window.open(dizhi+"/houtai.html");
}

window.onload = function () {
    if (getCookie('user'))
    {
        document.getElementById('dz').href = "update.html";
    }
    jQuery.ajax({
        type: 'POST',
        url: dizhi+"/work",
        data: '1',
        success: function (res) {
            var zp = eval(res);
            len = zp.length;
            for (var i = 0; i < len; i++)
            {
if(zp[i].index==""&&zp[i].index=="1")
{
    creat('#a'+i%3, { zp_name: zp[i].zp_name, UID: zp[i].UID, account:zp[i].account , lable:zp[i].lable, Text: zp[i].introduction, "laiyuan": zp[i].account })
}
            
            }
        },
    });
}