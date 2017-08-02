/* 拦截器 */
axios.defaults.notLogin = 0;
axios.interceptors.response.use(function (response) {
    // 在发送请求之前做些什么
    var successData = response.data.success;
    var errorData = response.data.error;
	if(successData === undefined) {
		if(errorData.code == 400) {
			if(axios.defaults.notLogin ==0){
                axios.defaults.notLogin = 1;
                alert('登录已失效，请重新登录');
                localStorage.clear();//清空localStorage
                
                var ua = navigator.userAgent.toLowerCase();
                if (ua.match(/MicroMessenger/i) == "micromessenger") {//微信端
                    //window.close();
                    WeixinJSBridge.call('closeWindow');
                } else {
                	location.reload();
                }
                return;
			}else{
				return response;
			}
		}
//		return;
	}
    return response;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});