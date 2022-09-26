<template>
	<article class="mb-4 sidebar__story last:mb-0">
		<h6
			class="sidebar__story-title text-sm text-him-100 dark:text-dim-200 font-semibold mr-3"
			:class="[defaultHoverText, defaultTransition]"
		>
			<nuxt-link :to="`/post/${props.post.id}`">
				<font style="vertical-align: inherit">
					{{ props.post.title }}
				</font>
			</nuxt-link>
		</h6>
		<transition
			appear
			enter-active-class="transition duration-700 ease-in-out"
			enter-from-class="blur-sm opacity-95"
			enter-to-class="blur-none opacity-100"
		>
			<nuxt-link
				:to="`/post/${props.post?.id}`"
				:title="props.post?.title"
				class="rounded-md"
			>
				<nuxt-img
					provider="cloudinary"
					:src="props.post?.mediaFile"
					:alt="props.post?.title"
					:title="props.post?.title"
					class="w-16 h-16 rounded-md object-cover"
					format="webp"
				/>
			</nuxt-link>
		</transition>
	</article>
</template>

<script setup>
const props = defineProps({
	post: {
		type: Object,
		required: true,
	},
})
const { defaultHoverText, defaultTransition } = useStyle()
</script>

<style lang="scss" scoped>
.sidebar__story {
	display: flex;
	.sidebar__story-title {
		-webkit-box-flex: 1;
		flex: 1;
	}
	.sidebar__story-image {
		height: 4rem;
		height: calc(var(--gap-rem) * 4);
		width: 4rem;
		width: calc(var(--gap-rem) * 4);
	}
}
</style>
