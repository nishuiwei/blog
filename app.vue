<template>
	<div :class="{ dark: darkMode }">
		<div class="bg-white dark:bg-dim-100 font-sans select-none">
			<div
				class="grid grid-cols-12 mx-auto sm:px-6 gap-5 lg:max-w-7xl lg:px-8 xs:px-4 py-4"
			>
				<header
					class="text-center text-him-100 dark:text-dim-200 text-base font-extralight pb-4 border-b col-span-12 border-him-300 dark:border-dim-400"
				>
					<div
						class="cursor-pointer"
						:class="defaultTransition"
						@click="setDarkMode(!darkMode)"
					>
						<template v-if="darkMode">
							<icon-moon />
						</template>
						<template v-if="!darkMode">
							<icon-sun />
						</template>
					</div>
				</header>
				<!-- left  -->
				<div class="col-span-12 xl:col-span-9 lg:col-span-8">
					<Post />
				</div>
				<!-- right -->
				<div
					class="hidden md:block xl:col-span-3 lg:col-span-4 w-full"
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
const { defaultTransition } = useStyle()
const { useDarkMode, getDarkMode, setDarkMode } = useTheme()
// console.log(process)
const darkMode = useDarkMode()
onMounted(() => {
	getDarkMode()
})
</script>

<style scoped lang="scss"></style>
