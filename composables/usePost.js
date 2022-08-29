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

	const getPostById = (postId) => {
		console.log(postId)
		return new Promise(async (resolve, reject) => {
			try {
				const response = await useFetchApi(`/api/posts/${postId}`, {
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
		getPostById,
	}
}
