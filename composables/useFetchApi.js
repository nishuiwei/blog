export default (url, options = {}) => {
	return $fetch(url, {
		...options,
		headers: {
			...options.headers,
		},
	})
}
