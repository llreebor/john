// Global Scripts

// Toggle mobile menu items Visibility
function toogleSubmenuItems() {
	const triggers = document.querySelectorAll('.submenu-trigger')
	const submenus = document.querySelectorAll('.mobile-submenu')

	triggers.forEach((trigger, idx) => {
		trigger.addEventListener('click', () => {
			trigger.classList.toggle('active')
			slideToggle(submenus[idx])
		})
	})
}
toogleSubmenuItems()

// Toggle Mobile Menu Visibility
function toggleSidebar() {
	// Getting the elements for opening, closing, and the sidebar menu itself
	const openBtn = document.getElementById('burger')
	const menu = document.getElementById('mobile-menu')
	const menuBody = document.getElementById('menu-body')
	const closeBtn = document.getElementById('close-menu-btn')

	// Adding click event listener to the open button
	openBtn.addEventListener('click', () => {
		// Adding necessary classes to show the sidebar menu
		menu.classList.add('opened')
		menu.classList.remove('hidden')
		menu.classList.add('fixed')
		menuBody.classList.remove('-translate-x-full')
		document.querySelector('body').classList.add('overflow-hidden')
	})

	// Function to close the sidebar
	const closeSidebar = () => {
		// Removing classes to hide the sidebar menu
		menu.classList.remove('opened')
		menuBody.classList.add('-translate-x-full')
		document.querySelector('body').classList.remove('overflow-hidden')
		setTimeout(function () {
			menu.classList.add('hidden')
			menu.classList.remove('fixed')
		}, 200) // Delay to allow animation to complete
	}

	// Adding click event listener to the close button
	closeBtn.addEventListener('click', closeSidebar)

	// Adding click event listener to the sidebar menu
	menu.addEventListener('click', (e) => {
		// Checking if the click target is the sidebar itself
		if (e.target.classList.contains('mobile-menu-wrapper')) {
			// If yes, close the sidebar
			closeSidebar()
		}
	})
}
// Calling the toggleSidebar function to initialize it
toggleSidebar()

// Home Page Scripts
if (document.getElementById('home-page')) {
	console.log('home-page')

	// Home Slider 1
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
	// Home Slider 2
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
}

// Categories Page Scripts
if (document.getElementById('categories-page')) {
	// Categories Slider 1
	new Swiper('.swiper-categories-1', {
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

	// SHow more categories
	function showMoreCategories() {
		const btn = document.getElementById('more-categories-btn')
		const content = document.getElementById('more-categories-content')

		btn.addEventListener('click', () => {
			btn.style.display = 'none'
			content.style.display = 'grid'
			content.classList.add('grid-cols-1')
			content.classList.remove('grid-cols-3')
		})

		// Вот тут мы ставим брейкпоинт навбара
		window.addEventListener('resize', () => {
			if (window.innerWidth > 767.99) {
				content.classList.remove('grid-cols-1')
				content.classList.add('grid-cols-3')
			}
		})
	}
	showMoreCategories()
}

// Product Page Scripts
if (document.getElementById('product-page')) {
	console.log('product-page')
	// Show more details
	function showMoreProductDetails() {
		const btn = document.getElementById('show-more-details-btn')
		const content = document.getElementById('hidden-content')

		btn.addEventListener('click', () => {
			slideToggle(content)
		})
	}
	showMoreProductDetails()

	// Product Slider 1
	new Swiper('.swiper-product-1', {
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

	// Product Slider 2
	new Swiper('.swiper-product-2', {
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

	// Counter
	function counter() {
		document.addEventListener('DOMContentLoaded', (event) => {
			const decreaseButton = document.getElementById('decrease-count')
			const increaseButton = document.getElementById('increase-count')
			const productCount = document.getElementById('product-count')

			let count = 1

			increaseButton.addEventListener('click', () => {
				count++
				productCount.textContent = count
				decreaseButton.classList.remove('opacity-50')
			})

			decreaseButton.addEventListener('click', () => {
				if (count > 1) {
					count--
					productCount.textContent = count
				}
				if (count === 1) {
					decreaseButton.classList.add('opacity-50')
				}
			})
		})
	}
	counter()
}

// Animations
/* SLIDE UP */
let slideUp = (target, duration = 300) => {
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = duration + 'ms'
	target.style.boxSizing = 'border-box'
	target.style.height = target.offsetHeight + 'px'
	target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	target.style.border = 'none'

	window.setTimeout(() => {
		target.style.display = 'none'
		target.style.removeProperty('height')
		target.style.removeProperty('padding-top')
		target.style.removeProperty('padding-bottom')
		target.style.removeProperty('margin-top')
		target.style.removeProperty('margin-bottom')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		target.style.removeProperty('border')
	}, duration)
}
/* SLIDE DOWN */
let slideDown = (target, duration = 300) => {
	target.style.removeProperty('display')
	let display = window.getComputedStyle(target).display
	if (display === 'none') display = 'grid'
	target.style.display = display
	let height = target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	target.offsetHeight
	target.style.boxSizing = 'border-box'
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = duration + 'ms'
	target.style.height = height + 'px'
	target.style.border = 'none'

	target.style.removeProperty('padding-top')
	target.style.removeProperty('padding-bottom')
	target.style.removeProperty('margin-top')
	target.style.removeProperty('margin-bottom')
	target.style.removeProperty('border')

	window.setTimeout(() => {
		target.style.removeProperty('height')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		target.style.removeProperty('border')
	}, duration)
}
/* TOOGLE */
const slideToggle = (target, duration = 300) => {
	if (window.getComputedStyle(target).display === 'none') {
		return slideDown(target, duration)
	} else {
		return slideUp(target, duration)
	}
}
