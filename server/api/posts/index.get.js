import { getPosts } from '~~/server/db/posts'
import { postTransformer } from '~~/server/transformers/post'
export default defineEventHandler(async (event) => {
	const posts = await getPosts({
		include: {
			author: true,
			type: true,
		},
		orderBy: [
			{
				createdAt: 'desc',
			},
		],
	})

	return {
		data: posts.map(postTransformer),
	}
})
