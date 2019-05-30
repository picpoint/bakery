const blockstars = document.querySelector('.pancakes__stars');  // доступ к блоку со звёздочками
const stars = blockstars.children;                              // массив элементов звёздочек

function setRaiting (arr) {                                     // ф-ия для установления рентинга на звёздочках
	let mass = [];
	for (let i = 0; i < arr.length; i++) {                        // пробегаемся по массиву всех элементов

		arr[i].addEventListener('mouseover', function (e) {         // на каждом i-м элементе добавляем событие наведение мыши
			for (let j = 0; j <= i; j++) {                            // пробегаемся по всем элементам на которых сработало событие наведения
				arr[j].classList.remove('fa-star-o');                   // каждому элементу удаляем старый класс пустой звёздочки
				arr[j].classList.add('fa-star');                        // устанавливаем новый класс закрашенной звезды
			}
			arr[i+1].classList.remove('fa-star');                     // для всех остальных элементов делаем наоборот удаляем класс закрашенной
      arr[i+1].classList.add('fa-star-o');                      // устанавливаем класс пустой звёздочки
      mass.push(i + 1);                                         // пушим в массив все значения на которых было событие рейтинга
		});
	}
	console.log(mass);                                            // выводим в консоль значения
	setCoockie(mass);                                             // вызываем ф-ию для записи куков и передаём туда массив
}



function setCoockie(arr) {                                      // ф-ия записи кук
	let result = [];
	for (let i = 0; i < arr.length; i++) {                        // перебираем все значения из массива
		result.push(arr[i]);                                        // пушим все в массив
	}
	console.log(result);                                          // выводим массив
	//document.cookie = `stars=${result}`;
}

setRaiting(stars);                                              // вызываем ф-ию установления рейтинга на звёздах

