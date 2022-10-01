import { useAsyncDataApi, useFetchApi } from './useFetchApi'

export default () => {
	const getHomePosts = (params = {}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await useAsyncDataApi('post', '/api/posts', {
					method: 'GET',
					params,
				})
				resolve(response)
			} catch (error) {
				reject(error)
			}
		})
	}
	const getPostTop = () => {
		return new Promise(async (resolve, reject) => {
			try {
				// const response = await useFetchApi(`/api/posts/top`)
				const response = await useFetchApi(`/api/posts/top`)
				resolve(response)
			} catch (error) {
				reject(error)
			}
		})
	}
	const getPostById = (postId = '') => {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await useAsyncDataApi(postId, `/api/posts/${postId}`)
				resolve(response)
			} catch (error) {
				reject(error)
			}
		})
	}

	return {
		getHomePosts,
		getPostById,
		getPostTop,
	}
}
