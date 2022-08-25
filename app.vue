<template>
	<div :class="{ dark: darkMode }">
		<div class="bg-zinc-50 dark:bg-dim-100">
			<router-view />
		</div>
	</div>
</template>

<script setup>
const darkMode = ref(true)
</script>

<style scoped lang="scss"></style>
