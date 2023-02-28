<template>
	<div :class="[{ dark: darkMode }, defaultTransition]">
		<div class="bg-white dark:bg-dim-100 font-sans">
			<div
				class="grid grid-cols-12 mx-auto sm:px-6 lg:gap-8 gap-6 lg:max-w-7xl lg:px-6 md:px-4 px-2 xs:px-8"
			>
				<header
					class="text-center text-him-100 dark:text-dim-200 text-base font-extralight pb-4 border-b col-span-12 border-him-300 dark:border-dim-400 sticky top-0 flex justify-between items-center backdrop-saturate-150 backdrop-blur z-30 pt-2"
				>
					<div class="hidden sm:flex">
						<i
							class="cursor-pointer"
							@click="setDarkMode(!darkMode)"
							:class="[defaultTransition, defaultHoverText]"
						>
							<template v-if="!darkMode">
								<icon-moon title="暗夜模式" />
							</template>
							<template v-if="darkMode">
								<icon-sun title="明亮模式" />
							</template>
						</i>
						<i
							class="cursor-pointer ml-3"
							:class="[defaultTransition, defaultHoverText]"
							@click="handleSearchClick"
						>
							<icon-search title="搜索" />
						</i>
					</div>
					<div class="text-center text-4xl font-bold">hi - blog</div>
					<div :class="[defaultHoverText, defaultTransition]">
						<!-- <button class="">登录</button> -->
					</div>
				</header>
				<slot />
				<div
					class="text-center text-him-100 dark:text-dim-200 text-base font-extralight py-4 border-t col-span-12 border-him-300 dark:border-dim-400 h-full"
				>
					© 2022 hi - blog <br />
					<nuxt-link to="https://beian.miit.gov.cn/" target="_blank"
						>京ICP备2022015573号-1</nuxt-link
					>
				</div>
			</div>
		</div>
		<template v-if="can_search">
			<div
				class="absolute top-0 bottom-0 left-0 right-0 block backdrop-blur-[2px] animate-fadein z-40 bg-gradient-to-br from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.1)]"
				@click.stop="setSearchMark(false)"
			>
				<div
					class="h-screen w-screen pt-20 antialiased z-100 relative ghost-display"
				>
					<transition
						appear
						enter-active-class="transition-transform duration-500 ease-in-out"
						enter-from-class="translate-y-5"
						enter-to-class="translate-y-0"
					>
						<search-input />
					</transition>
				</div>
			</div>
		</template>
	</div>
</template>

<script setup>
const { defaultTransition, defaultHoverText } = useStyle()
const { useDarkMode, getDarkMode, setDarkMode } = useTheme()
const { useSearchMark, setSearchMark } = useSearch()
const can_search = useSearchMark()
const darkMode = useDarkMode()
onMounted(() => {
	getDarkMode()
})

const handleSearchClick = () => {
	setSearchMark(true)
}
</script>

<style scoped lang="scss"></style>
