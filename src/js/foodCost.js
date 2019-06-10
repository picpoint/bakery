const blockread = document.querySelector('.breakfast__btnread');
const btnread = blockread.firstElementChild;
const menuscreen = document.querySelector('.breakfast__shadowscreen');
const closescreen = document.querySelector('.breakfast__closescreen');
const allId = document.getElementsByTagName('input');


blockread.addEventListener('click', function () {
  menuscreen.style.display = 'flex';
});

closescreen.addEventListener('click', function () {
  menuscreen.style.display = 'none';
});



function countPriceMenu() {

  for (let i = 0; i < allId.length; i++) {
    if (i % 2 != 0) {
      allId[i].setAttribute('checked', true);
    }
    if (allId[i].hasAttribute('checked')) {
      console.log(i);
    }
  }


}








countPriceMenu();