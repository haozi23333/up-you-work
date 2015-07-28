//jQuery
function UpladFile() {

    var name = jQuery("#name").val();
    var lable = jQuery("#lable").val();
    var index = jQuery("#index").val();
    var jieshao = jQuery("#jianjie").val();
    if (name == "") {
        alert("名称不能为空");
        return 0;
    }
    if (lable == "") {
        alert("标签不能为空");
        return 0;
    }
    if (index == "") {
        alert("首页不能为空");
        return 0;
    }
    if (jieshao == "") {
        alert("介绍不能为空");
        return 0;
    }
    var filelist = document.getElementById("update").files;
    var filelist2 = document.getElementById("update_img").files;
    if (!filelist) {
        alert("文件不能为空");
        return 0;
    }
    if (!filelist2) {
        alert("image不能为空");
        return 0;
    }
    if (filelist[0].name.split('.')[1] !== 'zip') {
        alert('必须上传zip文件');
    }
    for (var i = 0; i < filelist.length; i++) {
        var fileObj = filelist[i]; // 获取文件对象
        var FileController =dizhi+ '/update';                    // 接收上传文件的后台地址
        // FormData 对象
        var form = new FormData();
        UID = "wqerfwqef";
        form.append("wenjian", fileObj);
        form.append("tupian", filelist2[0]);
        form.append("UID", getCookie('user'));
        form.append("name", name);
        form.append("lable", lable);
        form.append("index", index);
        form.append("jieshao", jieshao);
        // 文件对象
        // XMLHttpRequest 对象
        console.log(fileObj.name);
        var xhr = new XMLHttpRequest();
        xhr.open("post", FileController, true);
        if (i + 1 == filelist.length) {
            xhr.onload = function () {
                alert("上传完成!");
            };
        }
        jQuery.ajax({
            url:"/update",
            type: "POST",
            data: form,
            processData: false,  // 告诉jQuery不要去处理发送的数据
            contentType: false,   // 告诉jQuery不要去设置Content-Type请求头
            success: function (req) {
                if (req.type == 'success') {
                    window.location.href = dizhi + "/show.html?" + req.msg;
                }
                if (req.type = 'error') {
                    alert(req.msg);
                    return 0;
                }
            }
        });
    }
}
window.onload = function () {


    if (!getCookie('user')) {
        alert('登陆过期重新登陆');
        window.location.href = "http:10.3.16.2:8888" + "/login.html"
    }

}
