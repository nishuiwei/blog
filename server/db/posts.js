import { prisma } from '.'

export const getPosts = (params = {}) => {
	return prisma.articles.findMany({
		...params,
	})
}

// export const getTweetById = (tweetId, params = {}) => {
// 	return prisma.tweet.findUnique({
// 		...params,
// 		where: {
// 			...params.where,
// 			id: tweetId,
// 		},
// 	})
// }
