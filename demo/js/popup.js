$(function() {
	$('h1').css({color: 'yellow'})
	chrome.extension.onMessage.addListener(function(request, sender, response){
		console.log(request.value)
		document.write(request.value)
	})
	$('#get').click(inject)
});

function inject() {
	chrome.windows.getCurrent(function(currentWindow) {
		chrome.tabs.query({
			active: true,
			windowId: currentWindow.id
		}, function(activeTabs) {
			console.log("TabId: " + activeTabs[0].id)
			chrome.tabs.executeScript(activeTabs[0].id, {
				file: "js/getcontent.js",
				allFrames: false
			})
		})
	})
}