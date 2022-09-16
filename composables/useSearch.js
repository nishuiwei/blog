export default () => {
	const useSearchMark = () => useState(() => false)
	const setSearchMark = (mode) => {
		const searchMark = useSearchMark()
		searchMark.value = mode
	}

	return {
		useSearchMark,
		setSearchMark,
	}
}
