<template>
	<div :class="{ dark: darkMode }">
		<div class="bg-zinc-50 dark:bg-dim-100">
			<div
				class="grid grid-cols-12 mx-auto sm:px-6 gap-5 lg:max-w-7xl lg:px-8 xs:px-4"
			>
				<!-- left  -->
				<div class="col-span-12 xs:col-span-12 xl:col-span-9 lg:col-span-8">
					<Post />
				</div>
				<!-- right -->
				<div
					class="xs:col-auto md:block xs:hidden xl:col-span-3 lg:col-span-4 bg-slate-600 h-screen"
				></div>
			</div>
		</div>
	</div>
</template>

<script setup>
const darkMode = ref(true)
</script>

<style scoped lang="scss"></style>
