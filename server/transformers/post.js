import { typeTransformer } from './article_type'
import { userTransformer } from './user'

export const postTransformer = (post, isDetail = false) => {
	return {
		id: post.id,
		abstract: post.abstract,
		title: post.title,
		content: isDetail ? post.content : undefined,
		mediaFile: post.article_image,
		createdAt: post.createdAt.split(' ')[0],
		type: !!post.type ? typeTransformer(post.type) : null,
		author: !!post.author ? userTransformer(post.author) : null,
	}
}
