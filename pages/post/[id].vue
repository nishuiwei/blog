<template>
	<div v-if="!loading">
		<!-- <preview-card title=""> -->
		<lazy-post-details :post="post" />
		<!-- </preview-card> -->
	</div>
</template>

<script setup>
const { getPostById } = usePost()

const post = ref({})
const loading = ref(true)

const getPostIdFormRoute = () => {
	return useRoute().params.id
}

onBeforeMount(async () => {
	loading.value = true
	try {
		const { data } = await getPostById(getPostIdFormRoute())
		console.log(data)
		post.value = data
	} catch (error) {
		console.log(error)
	} finally {
		loading.value = false
	}
})
</script>
