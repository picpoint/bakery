//1) Меню скручивается в гамбурер и обратно (JS)

const hmbrgr = document.querySelector('.hmbrgr');
const pastryMenuBlock = document.querySelector('.pastry__menublock');
const pastryMenu = document.querySelector('.pastry__menu');

function menuTwisted() {
  const widthWin = document.documentElement.clientWidth;
  const heightWin = document.documentElement.clientHeight;
	const pastryHeaderMeny = document.querySelector('.pastry__headerMenu');
  //const pastryMenu = document.querySelector('.pastry__menu');

  if (widthWin <= 480) {
    pastryMenu.style.display = 'none';
    pastryHeaderMeny.style.height = '150px';
    hmbrgr.style.display = 'block';
  } else {
    pastryMenu.style.display = 'flex';
		pastryMenu.classList.remove('showmenu');
		pastryHeaderMeny.style.height = 'auto';
		hmbrgr.style.display = 'none';
  }
}


window.addEventListener('resize', menuTwisted);

hmbrgr.addEventListener('click', function () {
  pastryMenu.classList.toggle('showmenu');

  if (pastryMenu.classList.contains('showmenu')) {
  	hmbrgr.lastElementChild.setAttribute('src', 'pict/close.png');
	} else {
		hmbrgr.lastElementChild.setAttribute('src', 'pict/hmbrgr.png');
	}
});


//menuTwisted();