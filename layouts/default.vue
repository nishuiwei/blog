<template>
	<layout>
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
			<sidebar-right>
				<template #new_article>
					<slot name="new_article" />
				</template>
			</sidebar-right>
		</div>
	</layout>
</template>

<script setup>
import Layout from '~~/components/layout/index.vue'
const { defaultTransition } = useStyle()
</script>

<style scoped lang="scss"></style>
