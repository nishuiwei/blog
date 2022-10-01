import { getTypeById } from '~~/server/db/type'
import { typeByIdTransformer } from '~~/server/transformers/article_type'
export default defineEventHandler(async (event) => {
	const { id } = event.context.params
	const typeDeatil = await getTypeById(id, {
		include: {
			articles_data: {
				include: {
					author: true,
				},
			},
		},
	})

	return {
		data: typeByIdTransformer(typeDeatil),
	}
})
