const blockstars = document.querySelector('.pancakes__stars');
const stars = blockstars.children;


function setRaiting (arr) {

	for (let i = 0; i < arr.length; ++i) {
		stars[i].addEventListener('mouseover', function (e) {
			for (let j = 0; j <= i; ++j) {
				stars[j].classList.remove('fa-star-o');
				stars[j].classList.add('fa-star');
			}
			stars[i+1].classList.remove('fa-star');
      stars[i+1].classList.add('fa-star-o');
			console.log(i+1);
		});
	}


}

setRaiting(stars);

