const btn = document.querySelector('.sandwich__recipebtn').lastElementChild;    // кнопка FULL RECIPE
const sandwichfullmenu = document.querySelector('.sandwich__fullmenu');         // общий затемнённый фон на всём экране
const sandwichmenublock = document.querySelector('.sandwich__menublock');       // центральное окно на popup с рецептом и гамбуогером
const sandwichclosebtn = document.querySelector('.sandwich__closebtn');         // крестик для закрытия popup окна
const sandwichpictburger = document.querySelector('.sandwich__pictburger');     // левая часть popup с картинкой бургера
const sandwichrecipeburger = document.querySelector('.sandwich__recipeburger'); // правая часть popup с рецептом


function recipeShow () {                                                        // ф-ия для показа popup с рецептом и бургером
  sandwichfullmenu.classList.add('popup');                                      // общему фону добавляем класс popup для отрисовки его вида
  sandwichmenublock.classList.add('popup2');                                    // окну с рецептом и гамбургером добавляем класс popup2 для отрисовки его вида
  sandwichpictburger.style.display = 'block';                                   // картинке бургера добавляем с-во для его показа
  sandwichrecipeburger.style.display = 'flex';                                  // рецепту добавляем с-во для его показа
  sandwichclosebtn.style.display = 'flex';                                      // крестику закрытия добавляем с-во для его показа
}


function recipeClose (e) {                                                      // ф-ия для скрытия popup с рецептом и бургером
  sandwichfullmenu.classList.remove('popup');                                   // удаляем класс отображения у общего затемнённого экрана
  sandwichmenublock.classList.remove('popup2');                                 // удаляем класс отображения у центрального окна с рецептом и бургером
  sandwichpictburger.style.display = 'none';                                    // убираем отображение картинки бургера
  sandwichrecipeburger.style.display = 'none';                                  // убираем отображение рецепта
  sandwichclosebtn.style.display = 'none';                                      // убираем отображение кнопки крестика
}

btn.addEventListener('click', recipeShow);                                      // вешаем событие на кнопку FULL RECIPE
sandwichclosebtn.addEventListener('click', recipeClose);                        // вешаем событие на кнопку крестик для закрытия popup
sandwichfullmenu.addEventListener('click', function (e) {                       // событие закрытия popup на затемнённом экране
  if (e.target == sandwichfullmenu && e.currentTarget == sandwichfullmenu) {    // если исходный и текущий элемент это затемнённый фон
		recipeClose(e);                                                             // вызвать ф-ию закрытия popup
  }
});