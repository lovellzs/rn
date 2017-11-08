function GET(objM) {
    objM.type = "get";
    Ajax(objM)
}
function POST(objM) {
    objM.type = "post";
    Ajax(objM)
}

function Ajax(objM) {

    var type = objM.type || "get";
    var url = objM.url;
    var obj = objM.objT;
    var successCallBack = objM.success;
    var errorCallBack = objM.error;
    //设置默认值
    var timerOut = objM.timeT || 1000;


    //01 创建请求对象
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    //处理参数
    var arrM = [];
    for(var i in obj)
    {
        arrM.push(i+"=" + obj[i]);
    }
    var res = arrM.join("&");


    if(type == "get")
    {
        //缓存处理:
        var date = new Date();
        url = encodeURI(url + "?" + "t=" + date.getTime() + "&" + res);

        //[2] 设置请求路径
        xmlhttp.open("get",url,true);

        //[3] 发送请求
        xmlhttp.send();
    }
    else if(type == "post")
    {
        //02 设置请求信息
        xmlhttp.open("post",url,true);

        //++ 设置请求头信息
        xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

        //03 发送请求
        xmlhttp.send(res);
    }

    //04 监听状态
    xmlhttp.onreadystatechange = function () {
        if(xmlhttp.readyState == 4)
        {

            //取消定时器
            clearTimeout(timer);

            //[5] 处理服务器的响应
            //判断网络请求是否成功，如果成功那么就解析服务器返回的数据
            if(xmlhttp.status == 200)
            {
                //xmlhttp.responseText
                successCallBack(xmlhttp);
            }else
            {
                errorCallBack(xmlhttp);
            }
        }
    }

    //控制请求超时
    var timer = setTimeout(function () {
        //认为请求失败 + 弹框提示用户
        //取消网络请求
        xmlhttp.abort();

        alert("请检查您周围是否有几个胖子挡住了信号");
    },timerOut);

}