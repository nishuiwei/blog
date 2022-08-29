<template>
	<div>
		<!-- <post-item :post="post" /> -->
		<article class="prose m-auto" :class="[blockquote, defaultTransition]">
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
import { Viewer } from '@bytemd/vue-next'
const props = defineProps({
	post: {
		type: Object,
		// required: {true},
		default: {},
	},
})
const { defaultTransition } = useStyle()
const plugins = ref([])
useHead({
	titleTemplate: (title) => `${props.post.title} - ${title}`,
	meta: [{ name: 'description', content: `${props.post.abstract}` }],
})

const blockquote = `prose-blockquote:before:content-['‟'] 
prose-blockquote:before:p-9 prose-blockquote:before:text-him-400 prose-blockquote:before:font-extrabold prose-blockquote:before:text-8xl prose-blockquote:before:text-center prose-blockquote:before:border-l-him-400 `
</script>

<style>
/* lockquote:before {
  color: #e50b4f;
  color: var(--color-primary);
  content: "‟";
  font-family: sans-serif;
  font-size: 6rem;
  font-weight: 800;
  font-weight: var(--font-weight-extra-bold);
  left: 0;
  line-height: 3rem;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
} */
</style>
