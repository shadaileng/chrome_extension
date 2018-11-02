function get() {
	let content = document.querySelectorAll('#content')

	console.log(content)
	
	let arr = []
	
	Array.prototype.forEach.call(content, function(el) {
		let inner = el.innerHTML
		arr.push(inner)
	})

	chrome.extension.sendMessage(arr)
}
get()