<template>
	<NuxtLayout>
		<template #header>
			<div
				class="xs:flex hidden h-96 rounded-lg items-center justify-center backdrop-saturate-150 backdrop-blur overflow-hidden relative"
			>
				<!-- <p>正在维护中...</p> -->
				<img
					src="https://images.unsplash.com/photo-1610462257803-064c1273c681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
					alt=""
					class="blur-md object-cover absolute"
				/>
				<div class="absolute h-full">
					<img
						src="https://images.unsplash.com/photo-1610462257803-064c1273c681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
						alt=""
						class="h-full"
					/>
				</div>
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
