<template>
	<Post :homePosts="homePosts" />
</template>

<script setup>
const { getHomePosts } = usePost()
const homePosts = ref([])
const loading = ref(false)
onBeforeMount(async () => {
	loading.value = true
	try {
		const { data } = await getHomePosts()
		homePosts.value = data
		console.log(data)
	} catch (error) {
		console.log(error)
	} finally {
		loading.value = false
	}
})
</script>
