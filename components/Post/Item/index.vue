<template>
	<article class="col-span-12 xs:col-span-6 text-amber-500">
		<!-- 背景图片 -->
		<div
			class="flex h-72 rounded-lg items-center justify-center text-5xl cursor-pointer border border-him-300 dark:border-dim-400 overflow-hidden dark:bg-gray-900 bg-neutral-300"
		>
			<!-- 72 X 72 -->
			<transition
				appear
				enter-active-class="transition duration-700 ease-in-out"
				enter-from-class="blur-lg opacity-75"
				enter-to-class="blur-none opacity-100"
			>
				<nuxt-img
					v-if="props.post?.mediaFile"
					:src="props.post?.mediaFile"
					:alt="props.post?.title"
					:title="props.post?.title"
					:lazy="props.index >= 5"
					class="hover:scale-105 transition duration-500 ease-in-out h-full object-cover w-full rounded-sm"
					format="webp"
				/>
			</transition>
		</div>
		<!-- 按钮 -->
		<div class="flex items-center pt-5 gap-3">
			<nuxt-link
				:to="`/post/${props.post?.id}`"
				class="border bg-transparent rounded-md text-xs font-semibold px-2 tracking-widest py-0.5 text-him-100 dark:text-dim-200"
				:class="[defaultHoverText, defaultHoverBorder, defaultTransition]"
				:title="props.post?.type?.label"
			>
				{{ props.post?.type?.label }}
			</nuxt-link>
		</div>
		<!-- 标题 -->
		<div class="flex flex-wrap py-3">
			<h2 class="text-2xl">
				<nuxt-link
					:to="`/post/${props.post?.id}`"
					:class="[defaultHoverText, defaultTransition]"
					class="font-bold text-gray-900 dark:text-dim-200"
					:title="props.post?.title"
				>
					{{ props.post?.title }}
				</nuxt-link>
			</h2>
		</div>
		<!-- 用户 -->
		<div class="flex my-3 items-center">
			<div class="w-11 h-11 rounded-full border-2 border-dim-600">
				<nuxt-img
					v-if="props.post?.author?.profilePic"
					:src="props.post?.author?.profilePic"
					:alt="props.post?.author?.username"
					:title="props.post?.author?.username"
					:aria-label="props.post?.author?.username"
					format="webp"
					class="rounded-full w-full h-full"
				/>
			</div>
			<!-- 名字，发布时间 -->
			<div class="flex flex-col ml-4">
				<div
					class="text-him-200 dark:text-dim-300 text-base"
					:class="[defaultHoverText, defaultTransition]"
				>
					<nuxt-link
						:to="`/post/${props.post?.id}`"
						:title="props.post?.author?.username"
						>{{ props.post?.author?.username }}</nuxt-link
					>
				</div>
				<time
					class="text-him-200 dark:text-dim-300 text-xs font-thin"
					:title="props.post?.createdAt"
				>
					{{ props.post?.createdAt }}
				</time>
			</div>
		</div>
	</article>
</template>

<script setup>
const { defaultHoverText, defaultHoverBorder, defaultTransition } = useStyle()

const props = defineProps({
	post: {
		type: Object,
		required: true,
	},
	index: {
		type: Number,
		default: 0,
	},
})
</script>
