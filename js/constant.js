/* 常量  */
var NODE_ENV = 'test';
var baseUrl,pageUrl,wsUrl,wxAppId;

if(NODE_ENV == 'pro'){//线上
	baseUrl = 'http://api.live.hgh188.com'; //接口域名地址
	pageUrl = 'http://live.hgh188.com'; //页面地址
	wsUrl = 'ws://122.152.212.39:9379'; //webscket地址
	wxAppId = 'wxb1589ad1aa596fd7';
}else{//测试
	baseUrl = 'http://wx.api.xiejing.net'; //接口域名地址
	pageUrl = 'http://wx.api.xiejing.net/red_stock';//页面地址
	wsUrl = 'ws://122.114.229.18:9379'; //webscket地址
	wxAppId = 'wxeb0dcefc76c5ddfe';
}

var wxUrl = baseUrl + '/api/user/login/weixin?redirect_uri=' + location.href + '&wx=' + wxAppId;

function getBaseUrl() {
	return baseUrl;
}
function getPageUrl() {
	return pageUrl;
}
function getWsUrl() {
	return wsUrl;
}
function getWxAppId() {
	return wxAppId;
}
//聊天集合最大长度
var chatListMaxLen = 1000;
function getChatListMaxLen() {
	return chatListMaxLen;
}