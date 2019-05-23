//1) Меню скручивается в гамбурер и обратно (JS)
const pastryMenu = document.querySelector('.pastry__menu');

function menuTwisted() {
  const widthWin = document.documentElement.clientWidth;
  const heightWin = document.documentElement.clientHeight;
  console.log(widthWin);
  //console.log(pastryMenu);

  if (widthWin <= 480) {
    pastryMenu.style.display = 'none';
  } else {
    pastryMenu.style.display = 'flex';
  }
}

window.addEventListener('resize', menuTwisted);

menuTwisted();