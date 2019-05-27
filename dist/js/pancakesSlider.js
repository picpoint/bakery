const backbtn = document.querySelector('.pancakes__backbtn');
const forvardbtn = document.querySelector('.pancakes__forvardbtn');
const firstimg = document.querySelector('.pancakes__firstimg');
const secondimg = document.querySelector('.pancakes__secondimg');
const thirdimg = document.querySelector('.pancakes__thirdimg');

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

let arrnumb = [
	'../pict/slide/1.jpg',
	'../pict/slide/2.jpg',
	'../pict/slide/3.jpg',
	'../pict/slide/4.jpg',
	'../pict/slide/5.jpg',
	'../pict/slide/6.jpg',
	'../pict/slide/7.jpg',
	'../pict/slide/8.jpg',
	'../pict/slide/9.jpg',
	'../pict/slide/10.jpg'
];

function firstPictRight (arr) {
	count++;
	if (count >= arr.length) {
		count = 0;
	}
	return arr[count];
}


function secondtPictRight (arr) {
	count++;
	if (count >= arr.length) {
		count = 0;
	}
	return arr[count];
}


function thirdPictRight (arr) {
	count++;
	if (count >= arr.length) {
		count = 0;
	}
	return arr[count];
}



function firstPictLeft (arr) {
	--count;
	if (count < 0) {
		count = arr.length - 1;
	}
	return arr[count];
}

function secondPictLeft (arr) {
	--count;
	if (count < 0) {
		count = arr.length;
	}
	return arr[count];
}

function thirdPictLeft (arr) {
	--count;
	if (count < 0) {
		count = arr.length;
	}
	return arr[count];
}


backbtn.addEventListener('click', function () {
	thirdimg.lastElementChild.setAttribute('src', firstPictLeft(arrnumb));
	secondimg.lastElementChild.setAttribute('src', firstPictLeft(arrnumb));
	firstimg.lastElementChild.setAttribute('src', firstPictLeft(arrnumb));
});



forvardbtn.addEventListener('click', function () {
	firstimg.lastElementChild.setAttribute('src', firstPictRight(arrnumb));
	secondimg.lastElementChild.setAttribute('src', secondtPictRight(arrnumb));
	thirdimg.lastElementChild.setAttribute('src', thirdPictRight(arrnumb));
});