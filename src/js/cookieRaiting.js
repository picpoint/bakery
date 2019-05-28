const blockstars = document.querySelector('.pancakes__stars');
const stars = blockstars.children;


function setRaiting (arr) {

	for (let i = 0; i < arr.length; ++i) {
		stars[i].addEventListener('mouseover', function (e) {
			for (let j = 0; j <= i; ++j) {
				stars[j].setAttribute('src', 'pict/star_solid.png');
			}
			stars[i+1].setAttribute('src', 'pict/star_transparent.png');
			console.log(i+1);
		});
	}


}

setRaiting(stars);

