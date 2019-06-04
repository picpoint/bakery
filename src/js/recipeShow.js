const btn = document.querySelector('.sandwich__recipebtn').lastElementChild;
const sandwichfullmenu = document.querySelector('.sandwich__fullmenu');
const sandwichmenublock = document.querySelector('.sandwich__menublock');
console.log(btn);
console.log(sandwichfullmenu);
console.log(sandwichmenublock);


function recipeShow () {
  sandwichfullmenu.classList.add('popup');
  sandwichmenublock.classList.add('popup2');
}

btn.addEventListener('click', recipeShow);