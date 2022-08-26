<template>
	<div
		class="border rounded-md bg-zinc-50 dark:bg-dim-500 overflow-hidden p-3 mb-10"
		:class="twitterBorderColor"
	>
		<h5
			class="pb-3 text-xl font-bold text-him-200 dark:text-dim-300 text-center mb-5"
			:class="twitterBorderColor"
		>
			{{ props.title }}
		</h5>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
const { twitterBorderColor } = useStyle()
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
})
</script>
