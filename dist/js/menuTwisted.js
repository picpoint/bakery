const hmbrgr = document.querySelector('.hmbrgr');                          // константа hmbrgr - элемент значёк гамбургер
const pastryMenu = document.querySelector('.pastry__menu');                // константа pastryMenu - элемент меню

function menuTwisted() {                                                   // ф-ия для показа/скрытия меню
  const widthWin = document.documentElement.clientWidth;                   // определяем клиентскую ширину окна
	const pastryHeaderMeny = document.querySelector('.pastry__headerMenu');  // доступ к полной области меню

  if (widthWin <= 480) {                                                   // если ширина экрана <= 480
    pastryMenu.style.display = 'none';                                     // меню скрываем
    hmbrgr.style.display = 'block';                                        // показываем значёк гамбугрера
  } else {                                                                 // иначе
    pastryMenu.style.display = 'flex';                                     // меню показываем и делаем его flex
		pastryMenu.classList.remove('showmenu');                               // удаляем класс showmenu
		pastryHeaderMeny.style.height = 'auto';                                // полному меню присваиваем ширину auto
		hmbrgr.style.display = 'none';                                         // значек гамбургера скрываем
  }
}


window.addEventListener('resize', menuTwisted);                            // вешаем событие resize для автослежения размена экрана через
                                                                           // колбек menuTwisted
hmbrgr.addEventListener('click', function () {                             // вешаем событие click на значёк гамбургера
  pastryMenu.classList.toggle('showmenu');                                 // при нажатии переключаем класс для показа скрытия меню

  if (pastryMenu.classList.contains('showmenu')) {                         // если меню содержит класс showmenu
  	hmbrgr.lastElementChild.setAttribute('src', 'pict/close.png');         // у элемента гамбургер устанавливаем атрибут картинки в крестик
	} else {                                                                 // иначе
		hmbrgr.lastElementChild.setAttribute('src', 'pict/hmbrgr.png');        // устанавливаем картинку гамбургера 
	}
});

