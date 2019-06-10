const blockread = document.querySelector('.breakfast__btnread');
const btnread = blockread.firstElementChild;
const menuscreen = document.querySelector('.breakfast__shadowscreen');
const closescreen = document.querySelector('.breakfast__closescreen');
const allId = document.getElementsByTagName('input');
const totalsumm = document.querySelector('.breakfast__totalsumm');
console.log(totalsumm);


blockread.addEventListener('click', function () {
  menuscreen.style.display = 'flex';
});

closescreen.addEventListener('click', function () {
  menuscreen.style.display = 'none';
});



function countPriceMenu() {

  for (let i = 0; i < allId.length; i++) {
    if (i == 10) {
      allId[i].setAttribute('checked', true);
    }
    if (allId[i].hasAttribute('checked')) {
      ajaxRequest(i);
    }
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
						console.log(objValue[key]);
						totalsumm.firstElementChild.innerHTML = objValue[key];
					}
					count++;
        }
      }
		}

	});
	xhr.send();

}


countPriceMenu();