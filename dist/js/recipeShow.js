const btn = document.querySelector('.sandwich__recipebtn').lastElementChild;
const sandwichfullmenu = document.querySelector('.sandwich__fullmenu');
const sandwichmenublock = document.querySelector('.sandwich__menublock');
const sandwichclosebtn = document.querySelector('.sandwich__closebtn');
const sandwichpictburger = document.querySelector('.sandwich__pictburger');
const sandwichrecipeburger = document.querySelector('.sandwich__recipeburger');


function recipeShow () {
  sandwichfullmenu.classList.add('popup');
  sandwichmenublock.classList.add('popup2');
  sandwichpictburger.style.display = 'block';
  sandwichrecipeburger.style.display = 'flex';
  sandwichclosebtn.style.display = 'flex';
}


function recipeClose () {
  sandwichfullmenu.classList.remove('popup');
  sandwichmenublock.classList.remove('popup2');
  sandwichpictburger.style.display = 'none';
  sandwichrecipeburger.style.display = 'none';
  sandwichclosebtn.style.display = 'none';
}

btn.addEventListener('click', recipeShow);
sandwichclosebtn.addEventListener('click', recipeClose);