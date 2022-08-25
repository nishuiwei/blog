/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	darkMode: 'class',
	theme: {
		screens: {
			xs: '768px',
			sm: '992px',
			md: '1022px',
			lg: '1092px',
			xl: '1280px',
		},
		extend: {
			colors: {
				dim: {
					50: '#f2f2f2', // 文字颜色
					100: '#080c21', // 背景颜色
					200: '#d2d2d2', // 按钮边框颜色
					300: '#e5e5e5', // 名字颜色
					600: '#f9d400',
					700: '#192734',
					800: '#162d40',
					900: '#15202b',
				},
				him: {
					100: '#6b6b6b',
					200: '#4c4c4c',
					400: '#e50b4f', // 高亮
				},
			},
		},
	},
	plugins: [],
}
