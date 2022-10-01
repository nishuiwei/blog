import { postTransformer } from './post'

export const typeTransformer = (type) => {
	return {
		id: type.id,
		label: type.label,
		count: type.articles.length,
	}
}

export const typeByIdTransformer = (detail) => {
	return {
		id: detail.id,
		label: detail.label,
		description: detail.description,
		created_time: detail.createdAt,
		articles: detail.articles_data.map((item) => postTransformer(item, true)),
	}
}
