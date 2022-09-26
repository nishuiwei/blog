import { getPosts } from '~~/server/db/posts'
import { postTransformer } from '~~/server/transformers/post'
export default defineEventHandler(async () => {
	const posts = await getPosts({
		take: 3,
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
