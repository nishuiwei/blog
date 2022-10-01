<template>
	<nuxt-link :to="`/type/${props.id}`">
		<div
			class="flex items-center justify-between p-2 h-100 text-him-100 dark:text-dim-200 border-b last:border-b-0 font-semibold text-base"
			:class="[defaultHoverText, twitterBorderColor]"
		>
			<h6 :class="defaultTransition">
				{{ props.label }}
			</h6>
			<span :class="defaultTransition"> {{ props.count }} </span>
		</div>
	</nuxt-link>
</template>

<script setup>
const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	count: {
		type: Number,
		default: 0,
	},
	id: {
		type: String,
		required: true,
	},
})
const { defaultHoverText, defaultTransition, twitterBorderColor } = useStyle()
</script>
