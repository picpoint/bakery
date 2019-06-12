const blockread = document.querySelector('.breakfast__btnread');
const btnread = blockread.firstElementChild;
const menuscreen = document.querySelector('.breakfast__shadowscreen');
const closescreen = document.querySelector('.breakfast__closescreen');
const allId = document.getElementsByTagName('input');
const totalsumm = document.querySelector('.breakfast__totalsumm');
//console.log(totalsumm);

let sum = 0;
//let arrValues = [];

blockread.addEventListener('click', function () {
  menuscreen.style.display = 'flex';
});

closescreen.addEventListener('click', function () {
  menuscreen.style.display = 'none';
});



function countPriceMenu() {
	let arrValues = [];
	let counter = 0;

	for (let i = 0; i < allId.length; i++) {
    allId[i].addEventListener('click', function () {
			allId[i].setAttribute('checked', true);
    	for (let j = 0; j < allId.length; j++) {
				//allId[i].setAttribute('checked', true);
				if (allId[j].hasAttribute('checked')) {
					console.log(j + 'checked');
					console.log(allId[j]);
				}
			}

			console.log('------------');
		});
  }

}


function ajaxRequest (item) {
  let objValue = 0;
  let count = 0;
	const xhr = new XMLHttpRequest();
	const url = 'https://raw.githubusercontent.com/picpoint/bakery/master/menu.json';
	xhr.responseType = 'json';
	xhr.open('GET', url);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	xhr.addEventListener('readystatechange', function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			let obj = xhr.response;

			for (let i = 0; i < obj.length; i++) {
			  objValue = obj[i];
			  for (let key in objValue) {
			  	if (count == item) {
						console.log('cost => ', objValue[key]);
						console.log(sum);
						sum += +objValue[key];
						totalsumm.firstElementChild.innerHTML = sum;
					}
					count++;
        }
      }
		}

	});

	xhr.send();

}


countPriceMenu();