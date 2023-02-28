import { getPostCount, getPosts } from '~~/server/db/posts'
import { postTransformer } from '~~/server/transformers/post'
export default defineEventHandler(async (event) => {
	const query = getQuery(event)
	const keyword = query?.keyword
	const count = await getPostCount({}, keyword)
	const offset = query?.offset || 1
	const size = query?.size || 10
	const page =
		count >= offset * size ? Math.ceil(count / (offset * size)) : offset
	const posts = await getPosts(
		{
			skip: ~~(offset - 1) * size,
			take: ~~size,
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
		page: {
			curr_page: ~~offset,
			page_size: ~~size,
			page_total: ~~page,
			total_count: ~~count,
		},
	}
})
