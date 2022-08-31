<template>
	<div v-if="!loading">
		<!-- <preview-card title=""> -->
		<post-details :post="post" />
		<!-- </preview-card> -->
	</div>
</template>

<script setup>
const { getPostById } = usePost()

const post = ref({})
const loading = ref(true)

const route = useRoute()
const id = route.params.id
onBeforeMount(async () => {
	loading.value = true
	try {
		const { data } = await getPostById(id)
		console.log(data)
		post.value = data
	} catch (error) {
		console.log(error)
	} finally {
		loading.value = false
	}
})
</script>
