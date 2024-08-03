/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		screens: {
			xl: { max: '1449.99px' },
			lg: { max: '1199.99px' },
			md: { max: '991.99px' },
			sm: { max: '767.99px' },
			xs: { max: '479.99px' },
		},
		container: {
			center: true,
			padding: '16px',
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				red: {
					300: '#F7C3C7',
					600: '#E22A2B',
				},
				blue: {
					300: '#B4DCF6',
				},
				neutral: {
					300: '#FEEDE0',
				},
				gray: {
					400: '#DBDBDB',
					500: '#9D9C9C',
					600: '#666666',
				},
			},
			keyframes: {
				'fade-in': {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
			},
			animation: {
				fadeIn: 'fade-in .3s ease',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
