if (chrome.browserAction) {
	chrome.browserAction.setBadgeText({text: 'new'});
	chrome.browserAction.setBadgeBackgroundColor({color: [255, 200, 200, 250]});
}
/*
chrome.runtime.onInstalled.addListener(function(){
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
		chrome.declarativeContent.onPageChanged.addRules([
		    {
		        conditions: [
		            // 只有打开百度才显示pageAction
		            new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'baidu.com'}})
		        ],
		        actions: [new chrome.declarativeContent.ShowPageAction()]
		    }
		]);
	});
});
*/
chrome.contextMenus.create({
	title: "选择: %s",
	contexts: ['selection'],
	onclick: function(params) {
		console.log(params)
	}
})
