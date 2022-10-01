import { useAsyncDataApi } from './useFetchApi'

export default () => {
	const getHomeTypes = (params = {}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await useAsyncDataApi('type', '/api/types', {
					method: 'GET',
					params,
				})
				resolve(response)
			} catch (error) {
				reject(error)
			}
		})
	}
	const getHomeTypeById = (typeId, params = {}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await useAsyncDataApi('type', `/api/types/${typeId}`, {
					method: 'GET',
					params,
				})
				resolve(response)
			} catch (error) {
				reject(error)
			}
		})
	}
	return {
		getHomeTypes,
		getHomeTypeById,
	}
}
