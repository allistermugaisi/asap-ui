// search-box open close js code
let navbar = document.querySelector('.navbar');
let searchIconBox = document.querySelector('.search-box .bx-search');
// let searchIconBoxCancel = document.querySelector(".search-box .bx-x");

searchIconBox.addEventListener('click', () => {
	navbar.classList.toggle('showInput');
	if (navbar.classList.contains('showInput')) {
		searchIconBox.classList.replace('bx-search', 'bx-x');
	} else {
		searchIconBox.classList.replace('bx-x', 'bx-search');
	}
});

// sidebar open close js code
let navLinks = document.querySelector('.nav-links');
let menuOpenBtn = document.querySelector('.navbar .bx-menu');
let menuCloseBtn = document.querySelector('.nav-links .bx-x');
menuOpenBtn.onclick = function () {
	navLinks.style.left = '0';
};
menuCloseBtn.onclick = function () {
	navLinks.style.left = '-100%';
};

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector('.htmlcss-arrow');
htmlcssArrow.onclick = function () {
	navLinks.classList.toggle('show1');
};

let moreArrow = document.querySelectorAll('.more-arrow');

for (i = 0; i < moreArrow.length; i++) {
	moreArrow[i].onclick = function () {
		navLinks.classList.toggle('show2');
	};
}

// let jsArrow = document.querySelector('.js-arrow');
// jsArrow.onclick = function () {
// 	navLinks.classList.toggle('show3');
// };

let slideIndex = 0;
// showSlides();

function showSlides() {
	let i;
	let slides = document.getElementsByClassName('testimonial-card-responsive');
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex - 1].style.display = 'block';
	setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function myFunction(x) {
	if (x.matches) {
		// If media query matches
		showSlides();
	}
}

let x = window.matchMedia('(max-width: 576px)');
myFunction(x); // Call listener function at run time
x.addEventListener('DOMContentLoaded', myFunction); // Attach listener function on state changes

// Product tabs
function productTabs(event, tabName) {
	let evt = event;
	let i, x, tablinks;
	x = document.getElementsByClassName('product-tab');

	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}

	tablinks = document.getElementsByClassName('tablink');
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace('tab-bg', '');
	}
	document.getElementById(tabName).style.display = 'block';
	evt.currentTarget.className += ' tab-bg';
}

let id = window.location.toString().split('#')[1];

