import { getPosts } from '~~/server/db/posts'
import { postTransformer } from '~~/server/transformers/post'
export default defineEventHandler(async (event) => {
	const query = useQuery(event)
	const keyword = query?.keyword
	const posts = await getPosts(
		{
			include: {
				author: true,
				type: true,
			},
			orderBy: [
				{
					createdAt: 'desc',
				},
			],
		},
		keyword
	)

	return {
		data: posts.map(postTransformer),
	}
})
