import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxt/image-edge', '@nuxtjs/tailwindcss', '~/modules/sitemap'],
	sitemap: {
		hostname: 'https://weihuijieonline.com',
	},
	app: {
		head: {
			title: 'hi - blog',
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
			],
		},
	},
	css: ['~/assets/main.css'],
	// pageTransition: {
	// 	name: 'my-page',
	// 	mode: 'out-in',
	// },
	// nuxt-image config
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
				},
			},
		},
	},
	router: {
		scrollBehavior: () => {
			return { x: 0, y: 0 }
		},
	},
})
