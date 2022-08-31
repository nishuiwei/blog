<template>
	<div class="w-auto">
		<!-- <post-item :post="post" /> -->
		<article
			class="prose dark:prose-invert m-auto w-10/12"
			:class="[defaultTransition]"
		>
			<Viewer
				:value="props.post.content"
				:tabindex="2"
				:sanitize="23"
				:plugins="plugins"
			/>
		</article>
	</div>
</template>

<script setup>
import highlightSSR from '@bytemd/plugin-highlight-ssr'
import gfm from '@bytemd/plugin-gfm'
import frontMatter from '@bytemd/plugin-frontmatter'
import mediumZoom from '@bytemd/plugin-medium-zoom'
import { Viewer } from '@bytemd/vue-next'
import LazyHeaderDetail from '~~/components/header/detail.vue'
const { setAdvicon } = useAdv()
setAdvicon(LazyHeaderDetail)

const props = defineProps({
	post: {
		type: Object,
		// required: {true},
		default: {},
	},
})

const { defaultTransition } = useStyle()
const plugins = ref([highlightSSR(), mediumZoom(), gfm(), frontMatter()])
useHead({
	titleTemplate: (title) => `${props.post.title} - ${title}`,
	meta: [{ name: 'description', content: `${props.post.abstract}` }],
})
</script>
