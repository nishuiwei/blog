export const useAsyncDataApi = (handle = '', url, options = {}) => {
	return useAsyncData(
		handle,
		() =>
			$fetch(url, {
				...options,
				headers: {
					...options.headers,
				},
			}),
		{ initialCache: false }
	)
}

export const useFetchApi = (url, options = {}) => {
	return $fetch(url, {
		...options,
		headers: {
			...options.headers,
		},
	})
}
