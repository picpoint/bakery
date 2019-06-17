const blockread = document.querySelector('.breakfast__btnread');       // div с кнопкой READ для показа меню
const btnread = blockread.firstElementChild;                           // доступ к самой кнопке button
const menuscreen = document.querySelector('.breakfast__shadowscreen'); // прозрачный div на котором лежит div с меню
const closescreen = document.querySelector('.breakfast__closescreen'); // кнопка крестик для закрытия меню
const allId = document.getElementsByTagName('input');                  // все input type="checkbox"
const totalsumm = document.querySelector('.breakfast__totalsumm');     // элемент для записи конечно суммы


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
      let arrValues = [];                                              // объявляем пустой массив для последующей записи
			for (let j = 0; j < allId.length; j++) {                         // пробегаемся по всем элементам
				if (allId[j].checked == true) {                                // если j-й элемент имеет галочку(выбран)
					arrValues.push(j + 1);                                       // добавляем его в массив(индекс +1)
				}
			}
      ajaxRequest(arrValues);                                          // передаём массив в ф-ию ajax запроса
		});
  }

}


function ajaxRequest (arrValues) {                                     // ф-ия ajax запрос к серверу
  let count = 0;
  let value = 0;
  let summ = 0;
	const xhr = new XMLHttpRequest();                                    // создаем объект класса
	const url = 'https://raw.githubusercontent.com/picpoint/bakery/master/menu.json'; // делаем запрос по соответствующему URL-y
	xhr.responseType = 'json';                                           // указываем, что ответ от сервера будет в json
	xhr.open('GET', url);                                                // устанавливаем метод запроса
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // устанавливаем тип контента не закодированный

	xhr.addEventListener('readystatechange', function () {               // добавляем событие ответа от сервера
		if (xhr.readyState === 4 && xhr.status === 200) {                  // если состояние == 4 и статус 200
			let obj = xhr.response;                                          // в переменную записываем результат ответа, а эменно массив объектов
			for (let i = 0; i < obj.length; i++) {                           // пробегаемся по данному массиву объектов
				if (arrValues.length == 0) {                                   // если массив пуст
          totalsumm.firstElementChild.innerText = 0;                   // в поле c результатом $ записываем - 0 т.к. Ничего нет
          return;                                                      // завершаем, чтобы не выполнился код ниже
				}
				for (let j = 0; j < arrValues.length; j++) {                   // если массив не пуст, пробегаемся по каждому номеру объекта от 1 до 11
					if (arrValues[j] == i + 1) {                                 // если номер объекта == номеру нажатого элемента
						for (let key in obj[i]) {                                  // берём данный элемент(объект) пробегаемся по нему
							value = obj[i];                                          // в переменную присваиваем значение объекта
							summ += +value[key];                                     // в сумму присваиваем сумму + значение объекта преобразованного к числу
							totalsumm.firstElementChild.innerText = summ;            // в поле с $ записываем результат суммы значений
						}
					}
				}
			}
		}
	});
	xhr.send();                                                          // делаем непосредственно запрос к серверу
}


countPriceMenu();                                                      // вызываем ф-ию для подсчёта суммы блюд