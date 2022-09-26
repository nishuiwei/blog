import { mkdirSync, writeFileSync } from 'fs'
import { Readable } from 'stream'
import { dirname } from 'path'
import { SitemapStream, streamToPromise } from 'sitemap'
import { defineNuxtModule, createResolver } from '@nuxt/kit'
import axios from 'axios'
Date.prototype.format = function (fmt) {
	var o = {
		'M+': this.getMonth() + 1, //月份
		'd+': this.getDate(), //日
		'h+': this.getHours(), //小时
		'm+': this.getMinutes(), //分
		's+': this.getSeconds(), //秒
		'q+': Math.floor((this.getMonth() + 3) / 3), //季度
		S: this.getMilliseconds(), //毫秒
	}
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(
			RegExp.$1,
			(this.getFullYear() + '').substr(4 - RegExp.$1.length)
		)
	}
	for (var k in o) {
		if (new RegExp('(' + k + ')').test(fmt)) {
			fmt = fmt.replace(
				RegExp.$1,
				RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
			)
		}
	}
	return fmt
}
export default defineNuxtModule({
	meta: {
		name: 'sitemap',
		version: '0.0.1',
		configKey: 'sitemap',
		compatibility: { nuxt: '^3.0.0' },
	},
	defaults: {
		hostname: 'https://www.weihuijieonline.com',
	},
	async setup(options, nuxt) {
		async function generateSitemap() {
			const response = await axios.get('https://weihuijieonline.com/api/posts')
			const list = []
			await response.data.data.forEach((item) => {
				list.push({
					url: `/post/${item.id}`,
					changefreq: 'weekly',
					priority: 0.8,
					lastmod: new Date().format('yyyy-MM-dd hh:mm:ss'),
				})
			})
			const sitemapRoutes = list
			// https://github.com/ekalinin/sitemap.js#generate-a-one-time-sitemap-from-a-list-of-urls
			const stream = new SitemapStream({ hostname: options.hostname })
			return streamToPromise(Readable.from(sitemapRoutes).pipe(stream)).then(
				(data) => data.toString()
			)
		}

		function createSitemapFile(sitemap, filepath) {
			const dirPath = dirname(filepath)
			mkdirSync(dirPath, { recursive: true })
			writeFileSync(filepath, sitemap)
		}

		const resolver = createResolver(import.meta.url)
		const filePath = resolver.resolve(
			nuxt.options.srcDir,
			'node_modules/.cache/.sitemap/sitemap.xml'
		)

		nuxt.options.nitro.publicAssets = nuxt.options.nitro.publicAssets || []
		nuxt.options.nitro.publicAssets.push({
			baseURL: '/',
			dir: dirname(filePath),
		})

		nuxt.hook('pages:extend', async (pages) => {
			const sitemap = await generateSitemap(pages)
			createSitemapFile(sitemap, filePath)
		})
	},
})
