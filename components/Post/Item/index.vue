<template>
	<article class="text-amber-500" :class="props.classes">
		<!-- 背景图片 -->
		<div
			class="flex w-full rounded-lg items-center justify-center text-5xl cursor-pointer border border-him-300 dark:border-dim-400 overflow-hidden dark:bg-gray-900 bg-neutral-300"
		>
			<!-- 72 X 72 -->
			<transition
				appear
				enter-active-class="transition duration-1000 ease-in-out"
				enter-from-class="blur-lg opacity-95"
				enter-to-class="blur-none opacity-100"
				v-if="props.post?.mediaFile"
			>
				<nuxt-link
					:to="`/post/${props.post?.id}`"
					:title="props.post?.title"
					class="w-full h-full"
				>
					<nuxt-img
						loading="lazy"
						provider="cloudinary"
						:src="props.post?.mediaFile || 'v1660662530/cld-sample-2.jpg'"
						:alt="props.post?.title"
						:title="props.post?.title"
						width="440"
						height="308"
						class="hover:scale-105 transition duration-500 ease-in-out h-full object-cover w-full rounded-sm"
						format="webp"
						placeholder="/image/placeholder/img-placeholder-sm.jpg"
					/>
				</nuxt-link>
			</transition>
		</div>
		<!-- 按钮 -->
		<div class="flex items-center pt-5 gap-3" v-if="props.post?.type?.label">
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
					loading="lazy"
					v-if="props.post?.author?.profilePic"
					provider="cloudinary"
					:src="
						props.post?.author?.profilePic || 'v1660662530/cld-sample-2.jpg'
					"
					:alt="props.post?.author?.username"
					:title="props.post?.author?.username"
					:aria-label="props.post?.author?.username"
					format="webp"
					class="rounded-full w-full h-full"
					placeholder="/image/placeholder/img-placeholder-sm.jpg"
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
	classes: {
		type: String,
		default: 'col-span-12 xs:col-span-6',
	},
})
</script>
