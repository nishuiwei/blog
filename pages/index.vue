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
						loading="lazy"
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
		<Post
			:homePosts="homePosts"
			:homePage="homePage"
			@prevClick="handlePrevClick"
		/>
	</NuxtLayout>
</template>

<script setup>
const { getHomePosts } = usePost()

const homePosts = ref([])
const homePage = ref({})
const loading = ref(false)
const getPosts = async (offset = 1) => {
	try {
		const { data } = await getHomePosts({ offset })
		homePosts.value = homePosts.value.concat(data.value.data)
		homePage.value = data.value.page
	} catch (error) {
		console.log(error)
	} finally {
		loading.value = false
	}
}
getPosts()
const handlePrevClick = () => {
	console.log('下一页')
	const offset = ~~homePage.value.curr_page + 1
	getPosts(offset)
}

// })
</script>
