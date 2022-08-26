import { typeTransformer } from './article_type'
import { userTransformer } from './user'
// import human from 'human-time'

export const postTransformer = (post) => {
	console.log(post.createdAt)
	return {
		id: post.id,
		abstract: post.abstract,
		title: post.title,
		mediaFile: post.article_image,
		createdAt: post.createdAt.split(' ')[0],
		type: !!post.type ? typeTransformer(post.type) : null,
		author: !!post.author ? userTransformer(post.author) : null,
	}
}
