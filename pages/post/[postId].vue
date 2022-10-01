<template>
	<NuxtLayout>
		<template #header>
			<header-detail
				:media-file="post?.mediaFile || 'v1660662530/cld-sample-2.jpg'"
				:author="post?.author"
				:title="post?.title"
				:createdAt="post?.createdAt"
				:type="post?.type"
			/>
		</template>
		<template #new_article>
			<sidebar-preview-card title="最新文章">
				<template v-for="article in article_top">
					<sidebar-story :post="article" />
				</template>
			</sidebar-preview-card>
		</template>
		<template v-if="post">
			<post-details :post="post" />
			<comments></comments>
		</template>
	</NuxtLayout>
</template>

<script setup>
const { getPostById, getPostTop } = usePost()

const post = ref({})
const loading = ref(false)
const article_top = ref([])

const getPostIdFormRoute = () => {
	return useRoute().params.postId
}

const getPost = async () => {
	loading.value = true
	try {
		const { data: detail } = await getPostById(getPostIdFormRoute())
		post.value = detail.value.data
	} catch (error) {
		console.log(error)
	} finally {
		loading.value = false
	}
}
getPost()

onMounted(async () => {
	const { data: top } = await getPostTop()
	article_top.value = top
})
</script>
