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
		<template #new_article>
			<sidebar-preview-card title="最新文章">
				<template v-for="article in article_top">
					<sidebar-story :post="article" />
				</template>
			</sidebar-preview-card>
		</template>
		<div v-if="!loading">
			<post-details :post="post" />
			<comments></comments>
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

const { getPostTop } = usePost()
const article_top = ref([])

onBeforeMount(async () => {
	getPost()
	try {
		const { data } = await getPostTop()
		article_top.value = data
		console.log(data)
	} catch (error) {
		console.log(error)
	} finally {
		// loading.value = false
	}
})
</script>
