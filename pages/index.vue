<template>
	<NuxtLayout>
		<template #header>
			<div
				class="h-96 rounded-lg bg-him-100 dark:bg-dim-50 flex items-center justify-center"
			>
				<p>正在维护中...</p>
			</div>
		</template>
		<Post :homePosts="homePosts" />
	</NuxtLayout>
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
