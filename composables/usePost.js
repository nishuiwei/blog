export default () => {
	const usePostDetail = () => useState('detail')
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
	const setPostDateil = (post) => {
		const detail = usePostDetail()
		detail.value = post
	}

	const getPostById = (postId) => {
		console.log(postId)
		return new Promise(async (resolve, reject) => {
			try {
				const response = await useFetchApi(`/api/posts/${postId}`, {
					method: 'GET',
				})
				setPostDateil(response.data)
				resolve(response)
			} catch (error) {
				reject(error)
			}
		})
	}

	return {
		getHomePosts,
		getPostById,
		usePostDetail,
	}
}
