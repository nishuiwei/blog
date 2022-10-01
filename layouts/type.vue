<template>
	<layout>
		<section class="col-span-12 rounded-md lg:mb-0 mb-8">
			<slot name="header" />
		</section>
		<main class="col-span-12">
			<slot />
		</main>
	</layout>
</template>

<script setup>
import Layout from '~~/components/layout/index.vue'
</script>

<style scoped lang="scss"></style>
