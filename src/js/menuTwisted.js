//1) Меню скручивается в гамбурер и обратно (JS)

function menuTwisted() {
  const widthWin = document.documentElement.clientWidth;
  const heightWin = document.documentElement.clientHeight;
	const pastryMenu = document.querySelector('.pastry__menu');
	const pastryHeaderMeny = document.querySelector('.pastry__headerMenu');
	const hmbrgr = document.querySelector('.hmbrgr');
  //console.log(widthWin);
  //console.log(pastryHeaderMeny);
  //console.log(pastryMenu);
  console.log(hmbrgr);

  if (widthWin <= 480) {
    pastryMenu.style.display = 'none';
    pastryHeaderMeny.style.height = '150px';
    hmbrgr.style.display = 'block';
  } else {
    pastryMenu.style.display = 'flex';
		pastryHeaderMeny.style.height = 'auto';
		hmbrgr.style.display = 'none';
  }
}

window.addEventListener('resize', menuTwisted);

//menuTwisted();