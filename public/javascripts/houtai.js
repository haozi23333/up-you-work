window.onload = function () {
    if (!getCookie('user')) {
        alert('你还没有登陆');
        window.location.href = dizhi+"/login.html";
    }
}