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
			document.cookie = `stars=${i + 1}; path=/; expires=` + setDate();  // устанавляваем куки
		});
	}
}



function setDate () {                                                   // ф-ия для установления даты жизни кук
	let date = new Date(new Date().getTime() + 60 * 60 * 24 * 14 * 1000); // новая дата на 14 суток
	return date.toUTCString();                                            // 60 сек * 60 мин * 24 часа * 14 суток * 1000 м/сек
}



function readCookie (arr) {                                        // ф-ия для чтения кук и установления рейтинга
	let datacook = document.cookie;                                  // читаем куки и записываем в переменную
	let value = '';                                                  // объявляем пустую переменную для последующей записи в неё

	if(datacook != 0) {                                              // если куки есть
		datacook = datacook.split('; ');                               // сплитим их по "; "

		for (let i = 0; i < datacook.length; i++) {                    // проходим по всем значениям
			value = datacook[i].split('=');                              // и сплитим их по "=", получаем массив со строками
			console.log(value);
			for (let j = 0; j < value.length; j++) {
				if (value[j] == 'stars') {
					console.log(value[j + 1]);
				}
			}
		}

		value = +value[1];

		for (let x = 0; x < stars.length; x++) {
			for (let z = 0; z < value; z++) {
				stars[z].classList.remove('fa-star-o');
				stars[z].classList.add('fa-star');
			}
		}

	}

}


setRaiting(stars);                                                   // вызываем ф-ию установления рейтинга на звёздах
readCookie(stars);                                                   // вызываем ф-ию читающую куки

