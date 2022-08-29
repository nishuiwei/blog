<template>
	<section>
		<div class="grid grid-cols-12 mx-auto sm:px-4 gap-6 px-4">
			<template v-for="(item, index) in homePosts" :key="item.id">
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
</script>
