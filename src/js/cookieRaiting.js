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



function readCookie (arr) {                                            // ф-ия для чтения кук и установления рейтинга
	let datacookie = document.cookie;                                    // читаем куки и записываем в переменную
	let valuecookie = '';                                                // переменная для временной записи результатов кук
	let valuestars = 0;                                                  // переменная для временной записи результатов звёзд
	datacookie = datacookie.split('; ');                                 // сплитим строку чтоб отделить одни куки от других

	for (let i = 0; i < datacookie.length; i++) {                        // прбегаемся по всему массиву и читаем каждую переменную типа "key=value"
		valuecookie = datacookie[i];
		valuecookie = valuecookie.split('=');                              // сплитим чтобы отделить key от value
		for (let j = 0; j < valuecookie.length; j++) {                     // перебираем получившееся
			if (valuecookie[j] == 'stars') {                                 // если в куках есть кука с ключём stars
				valuestars = valuecookie[j + 1];                               // берём значение этой куки
			}
		}
	}

  for (let x = 0; x < stars.length; x++) {                             // пробегаемся по всем звёздам
    for (let z = 0; z < valuestars; z++) {                             // пробегаемся value-раз по звёздам
    	stars[z].classList.remove('fa-star-o');                          // и удаляем класс не закрашенной звезды
    	stars[z].classList.add('fa-star');                               // ставим класс закрашенной звезды
		}
  }

}


setRaiting(stars);                                                   // вызываем ф-ию установления рейтинга на звёздах
readCookie(stars);                                                   // вызываем ф-ию читающую куки

