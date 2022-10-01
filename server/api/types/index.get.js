import { getTypes } from '~~/server/db/type'
import { typeTransformer } from '~~/server/transformers/article_type'

export default defineEventHandler(async () => {
	const type = await getTypes({})
	return {
		data: type.map(typeTransformer),
	}
})
