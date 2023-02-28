import { defineNuxtConfig } from 'nuxt/config'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxt/image-edge', '@nuxtjs/tailwindcss'],
	app: {
		head: {
			title: 'hi - blog 我的技术分享',
			viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
			charset: 'utf-8',
			meta: [
				{
					name: 'description',
					content:
						'卫慧杰的个人博客，致力于分享前端开发等技术经验，由html、css、javascript等分类组成，涵盖了vue、react、nginx、flutter、electron、node等内容。',
				},
				{
					name: 'keywords',
					content:
						'卫慧杰, 个人博客, html, css,  javascript, vue, react, nginx, flutter, electron, node, koa, express, nuxt, nest, docker',
				},
				{
					name: 'baidu-site-verification',
					content: 'code-8ysqEMZrqp',
				},
				{
					name: 'sogou_site_verification',
					content: 'D3Z4duAsa3',
				},
				{
					name: 'baidu_union_verify',
					content: '0f5b448e0aaced892bd27859f3c312a8',
				},
			],
			script: [
				{
					src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5041052854428027',
					async: true,
					crossOrigin: 'anonymous',
				},
			],
		},
	},
	css: ['~/assets/main.css'],
	runtimeConfig: {
		// Cloudinary
		cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
		cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
		cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
	},
	image: {
		cloudinary: {
			baseURL: 'https://res.cloudinary.com/dnc0d5evo/image/upload/',
		},
		presets: {
			blog: {
				modifiers: {
					format: 'webp',
					fit: 'cover',
					quality: '60',
					animated: true,
				},
			},
		},
	},
	build: {},
	nitro: {
		compressPublicAssets: true,
		prerender: {
			crawlLinks: true,
		},
	},
	devServerHandlers: [],
})
