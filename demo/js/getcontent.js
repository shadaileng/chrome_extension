function get() {
	let content = document.querySelector('#content')

	console.log(content)

	chrome.extension.sendMessage(content)
}
get()