import { getPostById } from '~~/server/db/posts'
import { postTransformer } from '~~/server/transformers/post'
export default defineEventHandler(async (event) => {
	const { id } = event.context.params

	const post = await getPostById(id, {
		include: {
			author: true,
			type: true,
		},
	})

	return {
		data: postTransformer(post, true),
	}
})
