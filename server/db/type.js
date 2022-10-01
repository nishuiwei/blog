import { prisma } from '.'

export const getTypes = (params = {}) => {
	return prisma.articletypes.findMany({
		...params,
	})
}

export const getTypeById = (typeId, params = {}) => {
	return prisma.articletypes.findUnique({
		...params,
		where: {
			...params.where,
			id: typeId,
		},
	})
}
