export default () => {
	const getHomePosts = () => {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await useFetchApi('/api/posts', {
					method: 'GET',
				})
				resolve(response)
			} catch (error) {
				reject(error)
			}
		})
	}

	return {
		getHomePosts,
	}
}
