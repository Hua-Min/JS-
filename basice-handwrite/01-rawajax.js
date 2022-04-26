// open() => 五个参数
// method：HTTP 请求方法，必须参数，值包括 POST、GET 和 HEAD，大小写不敏感。
// url：请求的 URL 字符串，必须参数，大部分浏览器仅支持同源请求。
// async：指定请求是否为异步方式，默认为 true。如果为 false，当状态改变时会立即调用 onreadystatechange 属性指定的回调函数。
// username：可选参数，如果服务器需要验证，该参数指定用户名，如果未指定，当服务器需要验证时，会弹出验证窗口。
// password：可选参数，验证信息中的密码部分，如果用户名为空，则该值将被忽略

// readyState 的状态
// 0	未初始化。表示对象已经建立，但是尚未初始化，尚未调用 open() 方法
// 1	初始化。表示对象已经建立，尚未调用 send() 方法
// 2	发送数据。表示 send() 方法已经调用，但是当前的状态及 HTTP 头未知
// 3	数据传送中。已经接收部分数据，因为响应及 HTTP 头不安全，这时通过 responseBody 和 responseText 获取部分数据会出现错误
// 4	完成。数据接收完毕，此时可以通过 responseBody 和 responseText 获取完整的响应数据


// XMLHttpRequest 对象响应信息属性
// 响应信息	说明
// responseBody	将响应信息正文以 Unsigned Byte 数组形式返回
// responseStream 	以 ADO Stream 对象的形式返回响应信息
// responseText	将响应信息作为字符串返回
// responseXML	将响应信息格式化为 XML 文档格式返回


// 使用工厂函数兼容
function createXHR () {
    var XHR = [  //兼容不同浏览器和版本得创建函数数组
        function () { return new XMLHttpRequest () },
        function () { return new ActiveXObject ("Msxml2.XMLHTTP") },
        function () { return new ActiveXObject ("Msxml3.XMLHTTP") },
        function () { return new ActiveXObject ("Microsoft.XMLHTTP") }
    ];
    var xhr = null;
    //尝试调用函数，如果成功则返回XMLHttpRequest对象，否则继续尝试
    for (var i = 0; i < XHR.length; i ++) {
        try {
            xhr = XHR[i]();
        } catch(e) {
            continue  //如果发生异常，则继续下一个函数调用
        }
        break;  //如果成功，则中止循环
    }
    return xhr;  //返回对象实例
}
const ajax = {
   get(url, fn){
       const xhr = new XMLHttpRequest()
       xhr.open("GET",url,true)
       xhr.onreadystatechange=function(){
           if(xhr.readyState === 4){
               fn(xhr.responseText)
           }
       }
       xhr.send()
   },
   post(url, data,fn){
        const xhr = new XMLHttpRequest()
        xhr.open("POST", url, true)
        xhr.serRequestHeader('Content-type','application/x-wwww-form-urlencoded')
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4){
                fn(xhr.responseText)
            }
        } 
   xhr.send(data)

   }

}