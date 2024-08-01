new Swiper('.swiper-home-1', {
	// Optional parameters
	spaceBetween: 20,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// Responsive breakpoints
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 4,
		},
		1200: {
			slidesPerView: 5,
		},
	},
})

new Swiper('.swiper-home-2', {
	// Optional parameters
	spaceBetween: 20,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	// Responsive breakpoints
	breakpoints: {
		320: {
			slidesPerView: 1.2,
		},
		480: {
			slidesPerView: 1.8,
		},
		768: {
			slidesPerView: 2.2,
		},
		992: {
			slidesPerView: 2.6,
		},
		1200: {
			slidesPerView: 3.3,
		},
	},
})
