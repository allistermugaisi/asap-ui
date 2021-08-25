// search-box open close js code
let navbar = document.querySelector('.navbar');
let searchBox = document.querySelector('.search-box .bx-search');
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener('click', () => {
	navbar.classList.toggle('showInput');
	if (navbar.classList.contains('showInput')) {
		searchBox.classList.replace('bx-search', 'bx-x');
	} else {
		searchBox.classList.replace('bx-x', 'bx-search');
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

let jsArrow = document.querySelector('.js-arrow');
jsArrow.onclick = function () {
	navLinks.classList.toggle('show3');
};

let slideIndex = 0;

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
x.addListener(myFunction); // Attach listener function on state changes

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

// Search functionality
function filterFunction(that, event) {
	let container, input, filter, li, input_val;
	container = document.querySelector(that).closest('.searchable');
	input_val = container.querySelector('input').value.toUpperCase();

	if (['ArrowDown', 'ArrowUp', 'Enter'].indexOf(event.key) != -1) {
		keyControl(event, container);
	} else {
		li = container.querySelector('ul li');
		li.each(function (i, obj) {
			if (
				document.querySelector(this).text().toUpperCase().indexOf(input_val) >
				-1
			) {
				document.querySelector(this).show();
			} else {
				document.querySelector(this).hide();
			}
		});

		container.querySelector('ul li').removeClass('selected');
		setTimeout(function () {
			container
				.querySelector('ul li:visible')
				.first()
				.classList.add('selected');
		}, 100);
	}
}

function keyControl(e, container) {
	if (e.key == 'ArrowDown') {
		if (container.querySelector('ul li').classList.contains('selected')) {
			if (
				container
					.querySelector('ul li:visible')
					.index(container.querySelector('ul li.selected')) +
					1 <
				container.querySelector('ul li:visible').length
			) {
				container
					.querySelector('ul li.selected')
					.removeClass('selected')
					.nextAll()
					.not('[style*="display: none"]')
					.first()
					.classList.add('selected');
			}
		} else {
			container.querySelector('ul li:first-child').classList.add('selected');
		}
	} else if (e.key == 'ArrowUp') {
		if (
			container
				.querySelector('ul li:visible')
				.index(container.querySelector('ul li.selected')) > 0
		) {
			container
				.querySelector('ul li.selected')
				.removeClass('selected')
				.prevAll()
				.not('[style*="display: none"]')
				.first()
				.classList.add('selected');
		}
	} else if (e.key == 'Enter') {
		container
			.querySelector('input')
			.val(container.querySelector('ul li.selected').text())
			.blur();
		onSelect(container.querySelector('ul li.selected').text());
	}

	container.querySelector('ul li.selected')[0].scrollIntoView({
		behavior: 'smooth',
	});
}

function onSelect(val) {
	alert(val);
}

document.querySelector('.searchable input').focus(function () {
	document
		.querySelector(this)
		.closest('.searchable')
		.querySelector('ul')
		.show();
	document
		.querySelector(this)
		.closest('.searchable')
		.querySelector('ul li')
		.show();
});
document.querySelector('.searchable input').blur(function () {
	let that = this;
	setTimeout(function () {
		document
			.querySelector(that)
			.closest('.searchable')
			.querySelector('ul')
			.hide();
	}, 300);
});

document
	.querySelector(document)
	.addEventListener('click', '.searchable ul li', function () {
		document
			.querySelector(this)
			.closest('.searchable')
			.querySelector('input')
			.val(document.querySelector(this).text())
			.blur();
		onSelect(document.querySelector(this).text());
	});

document.querySelector('.searchable ul li').hover(function () {
	document
		.querySelector(this)
		.closest('.searchable')
		.querySelector('ul li.selected')
		.removeClass('selected');
	document.querySelector(this).classList.add('selected');
});
