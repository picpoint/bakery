const blockread = document.querySelector('.breakfast__btnread');       // div с кнопкой READ для показа меню
const btnread = blockread.firstElementChild;                           // доступ к самой кнопке button
const menuscreen = document.querySelector('.breakfast__shadowscreen'); // прозрачный div на котором лежит div с меню
const closescreen = document.querySelector('.breakfast__closescreen'); // кнопка крестик для закрытия меню
const allId = document.getElementsByTagName('input');                  // все input type="checkbox"
const totalsumm = document.querySelector('.breakfast__totalsumm');     // элемент для записи конечно суммы
let sum = 0;                                                           // переменная дял записис суммы


blockread.addEventListener('click', function () {                      // событие по кнопке READ для показа меню
  menuscreen.style.display = 'flex';
});

closescreen.addEventListener('click', function () {                    // событие по кнопке крестику для закрытия меню
  menuscreen.style.display = 'none';
});



function countPriceMenu() {                                            // ф-ия подсчёта сумм блюд
	let counter = 0;

	for (let i = 0; i < allId.length; i++) {                             // пробегаемся по всем input
    allId[i].addEventListener('click', function () {                   // на каждом элементе при клике делаем следующее
      let arrValues = [];
			for (let j = 0; j < allId.length; j++) {
				if (allId[j].checked == true) {
					arrValues.push(j + 1);
          //console.log(arrValues);
				}
			}
      console.log('------------');
      ajaxRequest(arrValues);
		});
  }

}


function ajaxRequest (arrValues) {                                          // ф-ия ajax запрос к серверу
	console.log(arrValues);
	let objValue = 0;
  let count = 0;
  let valuesObj = 0;
  let value = 0;
	const xhr = new XMLHttpRequest();                                    // создаем объект класса
	const url = 'https://raw.githubusercontent.com/picpoint/bakery/master/menu.json'; // делаем запрос по соответствующему URL-y
	xhr.responseType = 'json';                                           // указываем, что ответ от сервера будет в json
	xhr.open('GET', url);                                                // устанавливаем метод запроса
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // устанавливаем тип контента не закодированный

	xhr.addEventListener('readystatechange', function () {               // добавляем событие ответа от сервера
		if (xhr.readyState === 4 && xhr.status === 200) {                  // если состояние == 4 и статус 200
			let obj = xhr.response;                                          // в переменную записываем результат ответа, а эменно массив объектов
			for (let i = 0; i < obj.length; i++) {
				console.log(obj[i]);
				for (let j = 0; j < arrValues.length; j++) {
					if (arrValues[j] == i + 1) {
						for (let key in obj[i]) {
							value = obj[i];
							console.log(value[key]);
						}
					}
				}
			}

		}

	});

	xhr.send();                                                          // делаем запрос к серверу
}


countPriceMenu();                                                      // вызываем ф-ию для подсчёта суммы блюд