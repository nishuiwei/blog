<template>
	<div
		v-if="props.post.length"
		class="overflow-y-auto max-h-[calc(100vh-172px)] sm:max-h-[70vh] mt-[1px] border-t border-neutral-200 h-auto"
	>
		<div class="py-3 px-4 sm:px-7">
			<h1
				class="uppercase text-xs text-neutral-400 font-semibold mb-1 tracking-wide"
			>
				Posts
			</h1>
			<template v-for="item in props.post" :key="item.id">
				<nuxt-link :to="`/post/${item.id}`">
					<search-panel-item
						:title="item.title"
						:abstract="item.abstract"
						v-model:keyowrd="props.keyword"
					/>
				</nuxt-link>
			</template>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	post: {
		type: Array,
		required: true,
	},
	keyword: {
		type: String,
		default: '',
	},
})
</script>
