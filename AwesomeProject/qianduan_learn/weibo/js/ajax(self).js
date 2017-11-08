

function GET(objM) {

    ajax(objM);
    objM.type = 'get';
}
function POST(objM) {
   Ajax(objM);
    objM.type='post';

}

function Ajax(objM) {
    var type=objM.type;
    var url=objM.url;
    var obj=objM.objT;
    var successCallback=objM.success;
    var errorCallback=objM.error;
    var timeout=objM.timout||1000;

    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }


    //处理参数:
    var arr=[];
    for(var i in obj){
        arr.push(i+"="+obj[i]);
    }
    var res=arr.join('&');

    if(type=='get'){
        //解决缓存问题:
        var data=new Date();
        var t=data.getTime();
        // console.log(t);
        url=url+'?'+'t='+t;
        url=url+'&'+res;

        xhr.open('get', url, true);
        xhr.send();


    }
    else if(type=='post'){
        xhr.open('post', url, true);

        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

        xhr.send(res);

    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {

            clearTimeout(timer);

            //[5] 处理服务器的响应
            //判断网络请求是否成功，如果成功那么就解析服务器返回的数据
            if(xhr.status==200){

//                    console.log(xhr.responseText)
//                 console.log("====");
                successCallback(xhr);

            }else {
                // errorCallback(xhr);
                   console.log('请求失败');
            }
        }
    };


    var timer=setTimeout(function () {
        xhr.abort();
        //取消请求
        alert('请求失败');


    },timeout)
}