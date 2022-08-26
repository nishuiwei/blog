<template>
	<article class="col-span-12 xs:col-span-6">
		<!-- 背景图片 -->
		<div
			class="flex h-72 rounded-lg items-center justify-center text-5xl cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden"
		>
			<!-- 72 X 72 -->
			<img
				:src="props.post?.mediaFile"
				class="hover:scale-105 transition duration-500 ease-in-out h-full object-cover w-full"
				:alt="props.post?.title"
				:title="props.post?.title"
			/>
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
			<div class="w-11 h-11 rounded-full border-2 border-dim-600"></div>
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
})
</script>
