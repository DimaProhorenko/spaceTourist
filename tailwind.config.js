/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
			},
			fontSize: {
				'title-sm': '5rem',
				'title-lg': '9.375rem',
			},
			colors: {
				glass: 'rgba(255, 255, 255, 0.1)',
			},
		},
	},
	plugins: [],
};
