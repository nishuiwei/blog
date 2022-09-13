import formidable from 'formidable'

import { uploadToCloudinary } from '~~/server/utils/cloudinary'

export default defineEventHandler(async (event) => {
	const form = formidable({})
	const response = await new Promise((resolve, reject) => {
		form.parse(event.req, (err, fields, files) => {
			if (err) reject(err)
			console.log(fields, files)
			resolve({ fields, files })
		})
	})

	const { fields, files } = response

	const filePrimises = Object.keys(files).map(async (key) => {
		const file = files[key]
		const cloudinaryResource = await uploadToCloudinary(file.filepath)
		return cloudinaryResource.secure_url
	})

	const secure_url = await Promise.all(filePrimises)

	return {
		url: secure_url[0],
	}
})
