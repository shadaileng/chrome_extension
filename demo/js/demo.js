// let divs = document.getElementsByTagName('div');
// for (let i = 0, l = divs.length; i < l; i++){
// 	divs[i].style.outline = "0.5px solid rgba(255, 0, 255, 0.6)";
// }

// let imgs = document.getElementsByTagName('img');
// if (imgs != null && imgs.length > 0) {
// 	imgs[0].addEventListener('mousemove', function(e) {
// 		console.log(e)
// 		console.log("(" + e.movementX + ", " + e.movementY + ")")
// 		// console.log(e)
// 	})
// }

document.querySelectorAll('div').forEach((el) => {el.style.outline = "0.5px solid rgba(255, 0, 255, 0.6)"})
document.querySelectorAll('img').forEach((el) => {
	el.style.outline = "1px solid rgba(0, 255, 0, 0.6)"
	el.addEventListener('mousemove', function(e) {
		console.log("(" + e.movementX + ", " + e.movementY + ")")
	})
})
