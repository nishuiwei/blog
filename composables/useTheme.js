export default () => {
	const useDarkMode = () => useState('darkMode')
	const setDarkMode = (mode) => {
		const darkMode = useDarkMode()
		darkMode.value = mode
	}

	const getDarkMode = () => {
		let darkColor
		if (process.client) {
			darkColor = window?.matchMedia('(prefers-color-scheme: dark)')
		}
		if (darkColor.matches) {
			setDarkMode(true)
		} else {
			// 浅色
			setDarkMode(false)
		}
	}

	return {
		getDarkMode,
		useDarkMode,
		setDarkMode,
	}
}
