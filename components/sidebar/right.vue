<template>
	<aside class="text-stone-100">
		<sidebar-preview-card title="关于我">
			<div class="text-base dark:text-dim-200 text-him-100 text-center">
				Auden is a modern magazine style Ghost theme with dark and light theme
				and membership support
			</div>
		</sidebar-preview-card>

		<sidebar-preview-card title="文章主题">
			<template v-for="categroy in categroy_map">
				<sidebar-preview-card-item v-bind="categroy" />
			</template>
		</sidebar-preview-card>
	</aside>
</template>

<script setup>
const categroy_map = ref([
	{
		categroy: 'JavaScript',
		count: 10,
	},
	{
		categroy: 'Node',
		count: 2,
	},
	{
		categroy: 'Css',
		count: 20,
	},
])
</script>
