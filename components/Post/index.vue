<template>
	<section>
		<div class="grid grid-cols-12 m-auto lg:gap-8 gap-6 list-card">
			<!-- <div class="w-full">加载中。。。</div> -->
			<template v-for="(item, index) in posts" :key="item.id">
				<PostItem :post="item" :index="index" />
			</template>
		</div>
		<div class="text-center py-10" v-if="posts.length">
			<button
				type="button"
				class="border border-transparent shadow-[0_0px_0px_1px_#e50b4f] rounded-md px-16 py-4 text-base text-him-400 tracking-wide text-opacity-90 font-bold uppercase hover:text-him-600 hover:shadow-[0_0px_0px_2px_#e50b59] hover:text-opacity-100 disabled:cursor-not-allowed disabled:opacity-60"
				:disabled="isLoadmore"
			>
				加载更多。。。
			</button>
		</div>
	</section>
</template>

<script setup>
const props = defineProps({
	homePosts: {
		type: Array,
		required: true,
	},
	homePage: {
		type: Object,
		required: true,
	},
})

const posts = computed(() => props.homePosts)
const isLoadmore = computed(
	() => props.homePage.page_total === props.homePage.curr_page
)
</script>

<style scoped lang="scss">
.list-card {
	content-visibility: auto;
}
</style>
