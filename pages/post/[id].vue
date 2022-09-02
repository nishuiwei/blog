<template>
	<NuxtLayout>
		<template #header v-if="!loading">
			<header-detail
				:media-file="post.mediaFile"
				:author="post.author"
				:title="post.title"
				:createdAt="post.createdAt"
				:type="post.type"
			/>
		</template>
		<div v-if="!loading">
			<post-details :post="post" />
		</div>
		<div v-else>加载中。。。</div>
	</NuxtLayout>
</template>

<script setup>
const { getPostById } = usePost()

const post = ref({})
const loading = ref(true)

const getPostIdFormRoute = () => {
	return useRoute().params.id
}
const getPost = async () => {
	loading.value = true
	try {
		const { data } = await getPostById(getPostIdFormRoute())
		// console.log(data)
		post.value = data
	} catch (error) {
		console.log(error)
	} finally {
		loading.value = false
	}
}

onBeforeMount(() => {
	getPost()
})
</script>
