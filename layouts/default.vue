<template>
	<div :class="[{ dark: darkMode }, defaultTransition]">
		<div class="bg-white dark:bg-dim-100 font-sans select-none">
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
						>
							<!-- <icon-search title="搜索" /> -->
						</i>
					</div>
					<div class="text-center text-4xl font-bold">hi - blog</div>
					<div :class="[defaultHoverText, defaultTransition]">
						<!-- <button class="">登录</button> -->
					</div>
				</header>
				<section class="col-span-12 rounded-md lg:mb-0 mb-8">
					<slot name="header" />
				</section>
				<!-- left  -->
				<div class="col-span-12 sm:col-span-8 lg:col-span-9">
					<slot />
				</div>
				<!-- right -->
				<div
					class="hidden sm:col-span-4 sm:block lg:col-span-3 w-full"
					:class="defaultTransition"
				>
					<sidebar-right />
				</div>
				<div
					class="text-center text-him-100 dark:text-dim-200 text-base font-extralight pt-4 border-t col-span-12 border-him-300 dark:border-dim-400"
				>
					© 2022 hi - blog <br />京ICP备2022015573号-1
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const { defaultTransition, defaultHoverText } = useStyle()
const { useDarkMode, getDarkMode, setDarkMode } = useTheme()
// console.log(process)
const { useAdvicon } = useAdv()
const advicon = useAdvicon()
const darkMode = useDarkMode()
onMounted(() => {
	getDarkMode()
})
</script>

<style scoped lang="scss"></style>
