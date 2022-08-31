export default () => {
	const useAdvicon = () => useState('Advicon')
	const setAdvicon = (comp, data) => {
		const Advicon = useAdvicon()
		Advicon.value = comp
	}

	return {
		useAdvicon,
		setAdvicon,
	}
}
