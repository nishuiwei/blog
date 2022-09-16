export default () => {
	const getHomePosts = (params = {}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await useFetchApi('/api/posts', {
					method: 'GET',
					params,
				})
				resolve(response)
			} catch (error) {
				reject(error)
			}
		})
	}
	const getPostById = (postId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await useFetchApi(`/api/posts/${postId}`)
				resolve(response)
			} catch (error) {
				reject(error)
			}
		})
	}

	return {
		getHomePosts,
		getPostById,
	}
}
