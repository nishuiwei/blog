<template>
	<div
		class="py-3 -mx-4 sm:-mx-7 px-4 sm:px-7 cursor-pointer hover:bg-neutral-100"
	>
		<h2 class="text-base font-medium leading-tight text-neutral-800">
			{{ titleHighComp }}
		</h2>
		<p class="text-neutral-400 leading-normal text-sm mt-0 mb-0 truncate">
			{{ abstractHighComp }}
		</p>
	</div>
</template>

<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	abstract: {
		type: String,
		required: true,
	},
	keyword: {
		type: String,
		default: '',
	},
})

const titleHighComp = computed(() => {
	return props.title.replaceAll(props.keyword, props.keyword) || ''
})

const abstractHighComp = computed(() => {
	return props.abstract.replaceAll(props.keyword, props.keyword) || ''
})
</script>
