export const randomImageTransformer = (image) => {
	return {
		url: image.urls.raw.replaceAll('https://images.unsplash.com/', ''),
		title: image?.location?.title || image?.user?.name,
	}
}
