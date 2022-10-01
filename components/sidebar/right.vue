<template>
	<aside class="text-stone-100">
		<sidebar-preview-card title="关于我">
			<div class="text-base dark:text-dim-200 text-him-100 text-center">
				一个专注于摆烂4年之久的前端开发，会使用
				<code>node</code
				>、<code>flutter</code>、<code>express</code>、<code>nest</code>、<code>electron</code>、<code>Vue</code>、<code>React</code>、<code>mongodb</code>、<code>Nginx</code>、<code>MySql</code>，但更精通如何摆，一直摆烂，一直爽
			</div>
		</sidebar-preview-card>
		<slot name="featured-article" />
		<sidebar-preview-card title="文章主题">
			<template v-for="categroy in categroy_map">
				<sidebar-preview-card-item v-bind="categroy" />
			</template>
		</sidebar-preview-card>
		<slot name="new_article" />
	</aside>
</template>

<script setup>
const { getHomeTypes } = useType()

const categroy_map = ref([
	{
		label: '',
		count: 0,
	},
	{
		label: '',
		count: 0,
	},
	{
		label: '',
		count: 0,
	},
])

const getHomeTypesReq = async () => {
	try {
		const { data } = await getHomeTypes()
		categroy_map.value = data.value.data
	} catch (error) {
		console.log(error)
	}
}
onBeforeMount(() => {
	getHomeTypesReq()
})
</script>
