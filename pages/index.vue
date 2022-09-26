<template>
	<NuxtLayout>
		<template #header>
			<div
				class="xs:flex hidden h-96 rounded-lg items-center justify-center backdrop-saturate-150 backdrop-blur overflow-hidden relative"
			>
				<nuxt-img
					provider="cloudinary"
					src="v1660662530/cld-sample-2.jpg"
					class="blur-md absolute w-full h-full object-none"
					format="webp"
					alt="首页背景"
					title="首页背景"
					placeholder="/image/placeholder/img-placeholder-sm.jpg"
				/>
				<div class="absolute h-full">
					<nuxt-img
						provider="cloudinary"
						src="v1660662530/cld-sample-2.jpg"
						format="webp"
						class="h-full"
						alt="首页背景"
						title="首页背景"
						placeholder="/image/placeholder/img-placeholder-sm.jpg"
					/>
				</div>
			</div>
		</template>
		<Post :homePosts="homePosts" :homePage="homePage" />
	</NuxtLayout>
</template>

<script setup>
const { getHomePosts } = usePost()

const homePosts = ref([])
const homePage = ref({})
const loading = ref(false)
onBeforeMount(async () => {
	loading.value = true
	try {
		const { data, page } = await getHomePosts()
		homePosts.value = data
		homePage.value = page
	} catch (error) {
		console.log(error)
	} finally {
		loading.value = false
	}
})
</script>
