<template>
	<div :class="defaultTransition" class="overflow-x-hidden">
		<NuxtLoadingIndicator />
		<transition name="home">
			<nuxt-page />
		</transition>
	</div>
</template>

<script setup>
const { defaultTransition } = useStyle()
</script>

<style>
* {
	scroll-behavior: smooth;
}
.home-enter-active,
.home-leave-active {
	transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
	opacity: 0;
}
</style>
