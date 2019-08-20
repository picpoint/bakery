const backbtn = document.querySelector('.pancakes__backbtn');       // доступ к кнопке backbtn "назад"
const forvardbtn = document.querySelector('.pancakes__forvardbtn'); // доступ к кнопке forvardbtn "вперёд"
const firstimg = document.querySelector('.pancakes__firstimg');     // доступ к первому блоку с изображением
const secondimg = document.querySelector('.pancakes__secondimg');   // доступ ко второму блоку с изображением
const thirdimg = document.querySelector('.pancakes__thirdimg');     // доступ к третьему блоку с изображением

let count = 0;                                                      // общий счетчик

let arrslide = [                                                    // массив с путями к картинкам для слайдера
	'pict/slide/bekkon.png',
	'pict/slide/berries.png',
	'pict/slide/cheese.png',
	'pict/slide/corn.png',
	'pict/slide/egg.png',
	'pict/slide/eggs.jpg',
	'pict/slide/rukkolosalad.png',
	'pict/slide/salad.jpg',
	'pict/slide/saladchicken.jpg',
	'pict/slide/vegetables.png'
];


function firstPictRight (arr) {                                     // ф-ия для переключения 1го блока вперёд
	count++;                                                          // наращиваем счётчик, т.к. при первом клике картинка долдна меняться на следующую
	if (count >= arr.length) {                                        // если счетчик > длинны массива
		count = 0;                                                      // сбрасываем счетчик на первый элемент массива
	}
	return arr[count];                                                // возвращаем элемент массива и подставляем соответствующую картинку
}


function secondtPictRight (arr) {                                   // ф-ия для переключения 2го блока вперёд
	count++;
	if (count >= arr.length) {
		count = 0;
	}
	return arr[count];
}


function thirdPictRight (arr) {                                     // ф-ия для переключения 3го блока вперёд
	count++;
	if (count >= arr.length) {
		count = 0;
	}
	return arr[count];
}



function firstPictLeft (arr) {                                      // ф-ия для переключения 1го блока назад
	--count;
	if (count < 0) {
		count = arr.length - 1;
	}
	return arr[count];
}

function secondPictLeft (arr) {                                     // ф-ия для переключения 2го блока назад
	--count;
	if (count < 0) {
		count = arr.length;
	}
	return arr[count];
}

function thirdPictLeft (arr) {                                      // ф-ия для переключения 3го блока назад
	--count;
	if (count < 0) {
		count = arr.length;
	}
	return arr[count];
}


backbtn.addEventListener('click', function () {                     // вешаем событие на кнопку "назад"
	thirdimg.lastElementChild.setAttribute('src', firstPictLeft(arrslide)); // 3й элемент, дочеренму элементу меняем артрибут пути на соответствующий картинке массива
	secondimg.lastElementChild.setAttribute('src', firstPictLeft(arrslide)); // 2й элемент, дочеренму элементу меняем артрибут пути на соответствующий картинке массива
	firstimg.lastElementChild.setAttribute('src', firstPictLeft(arrslide)); // 1й элемент, дочеренму элементу меняем артрибут пути на соответствующий картинке массива
});


forvardbtn.addEventListener('click', function () {                 // вешаем событие на кнопку "вперёд"
	firstimg.lastElementChild.setAttribute('src', firstPictRight(arrslide)); // 1й элемент, дочеренму элементу меняем артрибут пути на соответствующий картинке массива
	secondimg.lastElementChild.setAttribute('src', secondtPictRight(arrslide)); // 2й элемент, дочеренму элементу меняем артрибут пути на соответствующий картинке массива
	thirdimg.lastElementChild.setAttribute('src', thirdPictRight(arrslide)); // 3й элемент, дочеренму элементу меняем артрибут пути на соответствующий картинке массива
});
