<template>
	<div :class="{ dark: darkMode }">
		<div class="bg-white dark:bg-dim-100 font-sans select-none">
			<div
				class="grid grid-cols-12 mx-auto sm:px-6 gap-5 lg:max-w-7xl lg:px-8 py-4 md:px-4 px-2"
			>
				<header
					class="text-center text-him-100 dark:text-dim-200 text-base font-extralight pb-4 border-b col-span-12 border-him-300 dark:border-dim-400 sticky top-0 flex justify-between items-center backdrop-saturate-50 backdrop-blur z-20"
				>
					<div
						class="cursor-pointer hidden sm:block"
						:class="[defaultTransition, defaultHoverText]"
						@click="setDarkMode(!darkMode)"
					>
						<template v-if="!darkMode">
							<icon-moon />
						</template>
						<template v-if="darkMode">
							<icon-sun />
						</template>
					</div>
					<div class="text-center text-4xl font-bold">hi - blog</div>
					<div
						class="text-center cursor-pointer"
						:class="[defaultHoverText, defaultTransition]"
					>
						登录
					</div>
				</header>
				<!-- section -->
				<section class="h-96 bg-white col-span-12 rounded-md">
					<header-detail />
				</section>
				<!-- left  -->
				<div class="col-span-12 sm:col-span-8">
					<router-view />
				</div>
				<!-- right -->
				<div
					class="hidden sm:block col-span-4 w-full sm:px-0 md:px-3 lg:px-10"
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
