<template>
	<div
		class="flex items-center justify-between p-2 h-100 text-him-100 dark:text-dim-200 border-b last:border-b-0 font-semibold text-base"
		:class="[defaultHoverText, twitterBorderColor]"
	>
		<h6 :class="defaultTransition">
			{{ props.categroy }}
		</h6>
		<span :class="defaultTransition"> {{ props.count }} </span>
	</div>
</template>

<script setup>
const props = defineProps({
	categroy: {
		type: String,
		required: true,
	},
	count: {
		type: Number,
		default: 0,
	},
})
const { defaultHoverText, defaultTransition, twitterBorderColor } = useStyle()
</script>
