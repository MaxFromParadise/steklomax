'use strict';
document.addEventListener('DOMContentLoaded', function () {
	const navbar = document.querySelector('.nav');
	const navbarToggle = document.querySelector('[data-menu-btn]');
	const navbarClose = document.querySelector('[data-menu-close]');
	const navbarList = document.querySelector('.nav__list');
	const faqItems = document.querySelectorAll('.faq__item');

	document.addEventListener('click', (e) => {
		// NAVBAR
		if (e.target === navbarToggle) {
			navbar.classList.toggle('active');
		} else if (e.target === navbarClose || e.target != navbarList) {
			navbar.classList.remove('active');
		}

		// FAQ
		const clickedItem = e.target.closest('.faq__item');

		if (clickedItem) {
			faqItems.forEach((item) => {
				if (item !== clickedItem) {
					item.classList.remove('faq__item--active');
					item.querySelector('.faq__answer').style.maxHeight = null;
				}
			});

			if (clickedItem.classList.contains('faq__item--active')) {
				clickedItem.classList.remove('faq__item--active');
				clickedItem.querySelector('.faq__answer').style.maxHeight = null;
			} else {
				clickedItem.classList.add('faq__item--active');
			}
		} else {
			faqItems.forEach((item) => {
				if (!item.contains(e.target)) {
					item.classList.remove('faq__item--active');
					item.querySelector('.faq__answer').style.maxHeight = null;
				}
			});
		}
	});
	// Swiper
	const swiper = new Swiper('.gallery__swiper', {
		navigation: {
			nextEl: '.gallery__next',
			prevEl: '.gallery__prev',
		},
		slidesPerView: 4,
		spaceBetween: 20,
		loop: true,
		breakpoints: {
			992: {
				slidesPerView: 4,
			},

			550: {
				slidesPerView: 2,
			},
			0: {
				slidesPerView: 1,
			},
		},
	});
});
