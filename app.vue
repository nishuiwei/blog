<template>
	<div :class="{ dark: darkMode }">
		<div class="bg-zinc-50 dark:bg-dim-100">
			<div
				class="grid grid-cols-12 mx-auto sm:px-6 gap-5 lg:max-w-7xl lg:px-8 xs:px-4"
			>
				<!-- left  -->
				<div class="col-span-12 xl:col-span-9 lg:col-span-8">
					<Post />
				</div>
				<!-- right -->
				<div
					class="hidden md:block xl:col-span-3 lg:col-span-4 bg-slate-600 h-screen"
					:class="defaultTransition"
				></div>
			</div>
		</div>
	</div>
</template>

<script setup>
const darkMode = ref(true)
const { defaultTransition } = useStyle()
</script>

<style scoped lang="scss"></style>
