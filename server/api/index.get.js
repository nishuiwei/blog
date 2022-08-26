import { getPosts } from '~~/server/db/posts'
import { postTransformer } from '~~/server/transformers/post'
export default defineEventHandler(async (event) => {
	// const posts = await getPosts({
	// 	include: {
	// 		author: true,
	// 		mediaFile: true,
	// 		article_type: true,
	// 	},
	// 	orderBy: [
	// 		{
	// 			createAt: 'desc',
	// 		},
	// 	],
	// })

	return {
		data: 'hello world',
	}
})
