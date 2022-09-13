import { randomImageTransformer } from '~~/server/transformers/random_image'

export default () => {
	const getHomeRandom = (query) => {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await useFetchApi(
					'https://api.unsplash.com/photos/random?client_id=QyzoBAOk7g3lYwq5vZ57-pxB8hi93RpsP-66DDsEo4w',
					{
						method: 'GET',
						params: query,
					}
				)
				const data = randomImageTransformer(response)
				resolve(data)
			} catch (error) {
				reject(error)
			}
		})
	}

	return {
		getHomeRandom,
	}
}
