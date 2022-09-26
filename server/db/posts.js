import { prisma } from '.'

export const getPosts = (params = {}, keyword = '') => {
	return prisma.articles.findMany({
		...params,
		where: {
			...params.where,
			OR: [
				{
					content: {
						contains: keyword || '',
						mode: 'insensitive',
					},
				},
				{
					title: {
						contains: keyword || '',
						mode: 'insensitive',
					},
				},
			],
		},
	})
}

export const getPostCount = (params = {}, keyword = '') => {
	return prisma.articles.count({
		where: {
			...params.where,
			OR: [
				{
					content: {
						contains: keyword || '',
						mode: 'insensitive',
					},
				},
				{
					title: {
						contains: keyword || '',
						mode: 'insensitive',
					},
				},
			],
		},
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
