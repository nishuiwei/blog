<template>
	<section>
		<div
			class="grid grid-cols-12 m-auto gap-6 list-card"
			v-if="posts.length !== 0"
		>
			<template v-for="(item, index) in posts" :key="item.id">
				<PostItem :post="item" :index="index" />
			</template>
		</div>
		<div v-else>加载中。。。</div>
	</section>
</template>

<script setup>
const props = defineProps({
	homePosts: {
		type: Array,
		required: true,
	},
})
const posts = computed(() => props.homePosts)
</script>

<style scoped lang="scss">
.list-card {
	content-visibility: auto;
}
</style>
