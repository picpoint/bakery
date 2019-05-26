const backbtn = document.querySelector('.pancakes__backbtn');
const forvardbtn = document.querySelector('.pancakes__forvardbtn');
const firstimg = document.querySelector('.pancakes__firstimg');
const secondimg = document.querySelector('.pancakes__secondimg');

let count = 0;
let arrslide = [
	'../pict/slide/bekkon.png',
	'../pict/slide/berries.png',
	'../pict/slide/cheese.png',
	'../pict/slide/corn.png',
	'../pict/slide/egg.png',
	'../pict/slide/eggs.jpg',
	'../pict/slide/rukkolosalad.png',
	'../pict/slide/salad.jpg',
	'../pict/slide/saladchicken.jpg',
	'../pict/slide/vegetables.png'
];

function previewPictfirst (arr) {
	count++;
	console.log(count);
	for (let i = 0; i < arr.length; i++) {
		if (count >= arr.length) {
			count = 0;
		} else {
			return arr[count];
		}
	}
}


function previewPictsecond (arr) {
	++count;
	console.log(count);
	for (let i = 0; i < arr.length; i++) {
		if (count >= arr.length) {
			count = 0;
		} else {
			return arr[count];
		}
	}
}




backbtn.addEventListener('click', function () {
	//firstimg.lastElementChild.setAttribute('src', previewPictfirst(arrslide));
	secondimg.lastElementChild.setAttribute('src', previewPictsecond(arrslide));
});

forvardbtn.addEventListener('click', function () {
	console.log('=>');
});