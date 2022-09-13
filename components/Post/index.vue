<template>
	<section>
		<div class="grid grid-cols-12 m-auto lg:gap-8 gap-6 list-card">
			<!-- <div class="w-full">加载中。。。</div> -->
			<template v-for="(item, index) in posts" :key="item.id">
				<PostItem :post="item" :index="index" />
			</template>
		</div>
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
