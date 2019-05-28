const blockstars = document.querySelector('.pancakes__stars');
const stars = blockstars.children;

// function setRaiting(arr, e) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] == e.target) {
// 			console.log(e.target);
// 		}
// 	}
// }
//
// setRaiting(stars);

//console.log(stars);


blockstars.addEventListener('click', function (e) {
	for (let i = 0; i < stars.length; i++) {
		console.log(stars[i]);
	}
});