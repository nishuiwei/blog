<template>
	<div
		class="bg-white w-full max-w-[95vw] sm:max-w-lg rounded-lg shadow-xl m-auto relative translate-z-0 animate-popup"
	>
		<div
			class="z-10 relative flex items-center py-5 px-4 sm:px-7 bg-white rounded-lg"
			@click.stop
		>
			<div class="flex items-center justify-center w-4 h-4 mr-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					height="16"
					width="16"
					class="text-neutral-900"
					alt="Search"
				>
					<path
						d="M23.38,21.62l-6.53-6.53a9.15,9.15,0,0,0,1.9-5.59,9.27,9.27,0,1,0-3.66,7.36l6.53,6.53a1.26,1.26,0,0,0,1.76,0A1.25,1.25,0,0,0,23.38,21.62ZM2.75,9.5A6.75,6.75,0,1,1,9.5,16.25,6.76,6.76,0,0,1,2.75,9.5Z"
						fill="currentColor"
					></path>
				</svg>
			</div>
			<input
				type="text"
				class="grow -my-5 py-0 -ml-3 pl-3 text-xl focus-visible:outline-none placeholder:text-gray-400 outline-none truncate"
				placeholder="搜索文章"
				ref="searchInputRef"
				v-model="searchText"
				@input="handleInput"
				@keyup.esc="handleEscKeyUp"
			/>
		</div>
		<template v-if="searchPanelPost.length">
			<transition
				appear
				enter-active-class="transition duration-500 ease-in-out"
				enter-from-class=""
				enter-to-class=""
			>
				<search-panel :post="searchPanelPost" :keyword="searchText" />
			</transition>
		</template>
	</div>
</template>

<script setup>
const { getHomePosts } = usePost()
const searchText = ref('')
const searchPanelPost = ref([])
const searchInputRef = ref()
const { setSearchMark } = useSearch()

onMounted(() => {
	searchInputRef.value.focus()
})
const handleInput = async () => {
	const keyword = searchText.value
	try {
		if (!keyword) {
			searchPanelPost.value = []
			return
		}
		const { data } = await getHomePosts({ keyword })
		console.log()
		searchPanelPost.value = data.value.data
	} catch (error) {
		console.log(error)
	}
}

const handleEscKeyUp = () => {
	setSearchMark(false)
}
</script>
