L = {};
L.click = function () {
    _user = {};
    _user.account = jQuery("#account").val();
    _user.password = jQuery("#password").val();
    if (_user.account == "")
    {
        alert("用户名为空");
        return 0;
    }
    if (_user.account == "") {
        alert("密码为空");
        return 0;
    }
    jQuery.ajax({
        type: 'POST',
        url: dizhi+"/login",
        data: _user,
        success: function (res) {
            var jg = eval(res);
            if (jg.type == 'success')
            {
                setCookie('user', jg.msg[0].UID, 7);
                alert("登陆成功正在为您跳转");
                window.location.href = dizhi;
            }
            if (jg.type == 'error') {
                alert(jg.msg);
            }
        },
    });
}

L.go_register = function () {
    window.location.href = dizhi+"/register.html";
}
window.onload = function () {

    //if (getCookie('user'))
    //{

    //}
}