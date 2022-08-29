import { prisma } from '.'

export const getPosts = (params = {}) => {
	return prisma.articles.findMany({
		...params,
	})
}

export const getPostById = (postId, params = {}) => {
	return prisma.articles.findUnique({
		...params,
		where: {
			...params.where,
			id: postId,
		},
	})
}
