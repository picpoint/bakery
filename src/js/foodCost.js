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
	let arrValues = [];
	let counter = 0;

	for (let i = 0; i < allId.length; i++) {                             // пробегаемся по всем input
    allId[i].addEventListener('click', function () {                   // на каждом элементе при клике делаем следующее
			allId[i].setAttribute('checked', true);                          // устанавливаем при клике с-во checked чтоб была галочка и с-во отображалось в DOM

			for (let j = 0; j < allId.length; j++) {                         // пробегаемся по всем элементам ещё раз неважно на каком элементе было событие
				if (allId[j].hasAttribute('checked') == true) {                // если элемент имеет атрибут checked
					console.log(allId[j]);                                       // просто пока выводим элемент
				} else {                                                       // иначе если юзер снял галочку
					allId[j].removeAttribute('checked');                         // удаляем свойство, это нужно для того чтоб посчитать действительно количество отмеченных пунктов
				}
			}
			console.log('------------');
		});
  }

}


function ajaxRequest (item) {                                          // ф-ия ajax запрос к серверу
  let objValue = 0;
  let count = 0;
	const xhr = new XMLHttpRequest();                                    // создаем объект класса
	const url = 'https://raw.githubusercontent.com/picpoint/bakery/master/menu.json'; // делаем запрос по соответствующему URL-y
	xhr.responseType = 'json';                                           // указываем, что ответ от сервера будет в json
	xhr.open('GET', url);                                                // устанавливаем метод запроса
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // устанавливаем тип контента не закодированный

	xhr.addEventListener('readystatechange', function () {               // добавляем событие ответа от сервера
		if (xhr.readyState === 4 && xhr.status === 200) {                  // если состояние == 4 и статус 200
			let obj = xhr.response;                                          // в переменную записываем результат ответа, а эменно массив объектов

			for (let i = 0; i < obj.length; i++) {                           // пробегаемся по массиву
			  objValue = obj[i];                                             // на каждом шаге присваиваем объект в переменную
			  for (let key in objValue) {                                    // пробегаемся по объекту
			  	if (count == item) {                                         // если счётчик == значениею переданному в ajax запрос
						console.log('cost => ', objValue[key]);
						console.log(sum);
						sum += +objValue[key];                                     // в переменную sum присваиваем значение объекта, а именно стоимость блюда(2е значение объекта)
						totalsumm.firstElementChild.innerHTML = sum;               // в span элемент пишем резульат всех блюд
					}
					count++;                                                     // наращиваем счётчик для пробегапо элементам
        }
      }
		}

	});

	xhr.send();                                                          // делаем запрос к серверу

}


countPriceMenu();                                                      // вызываем ф-ию для подсчёта суммы блюд