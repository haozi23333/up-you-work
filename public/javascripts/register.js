var R = {};
R.go_login = function () {

    window.location.href =dizhi+"/login.html";

}
R.click = function () {
    _user = {};
    _user.account = jQuery("#account").val();
    _user.email = jQuery("#email").val();
    _user.p1 = jQuery("#p1").val();
    _user.p2 = jQuery("#p2").val();
    if (_user.account == null)
    {
        alert("用户名为空");
        return 0;
    }
    if (_user.email == null) {
        alert("邮箱为空");
        return 0;
    }
    if (_user.p1 == null) {
        alert("密码为空");
        return 0;
    }
    if (_user.p2 == null) {
        alert("密码为空");
        return 0;
    }

    if (_user.p1 != _user.p2) {
        alert("两次输入密码不相同，请核对");
        return 0;
    }
        jQuery.ajax({
        type: 'POST',
        url: dizhi+"/register",
        data: _user,
        success: function (res) {
            var jg = eval(res);
            if (jg.type == 'success')
            {
                alert('注册成功');
                window.location.href = dizhi+"/login.html";
            } 
            if (jg.type == 'error') {
                alert(jg.msg);
            }
        },
    });
}