<template>
	<div
		class="m-auto h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md relative"
	>
		<nuxt-img
			v-if="props.mediaFile"
			:src="props.mediaFile"
			:alt="props.title"
			:title="props.title"
			class="h-full object-cover w-full rounded-md"
		/>
		<div
			class="absolute top-0 left-0 right-0 bottom-0 m-auto z-20 bg-gradient-to-r from-purple-500 to-pink-500 backdrop-saturate-50 backdrop-blur rounded-md opacity-90"
		>
			<div class="h-full flex items-center justify-center flex-col">
				<div class="flex items-center pt-5 gap-3">
					<nuxt-link
						class="border bg-transparent rounded-md text-xs font-semibold px-2 tracking-widest py-0.5 text-him-500"
					>
						{{ props.type.label }}
					</nuxt-link>
				</div>
				<p
					class="font-extrabold text-him-500 text-4xl my-5 text-center tracking-wider w-3/5 leading-tight"
					:title="props.title"
				>
					{{ props.title }}
				</p>
				<div class="flex my-3 items-center">
					<div class="w-11 h-11 rounded-full border-2 border-dim-600">
						<nuxt-img
							v-if="props.author?.profilePic"
							:src="props.author?.profilePic"
							:alt="props.author?.username"
							:title="props.author?.username"
							:aria-label="props.author?.username"
							format="webp"
							class="rounded-full w-full h-full object-cover"
						/>
					</div>
					<!-- 名字，发布时间 -->
					<div class="flex flex-col ml-4">
						<div class="text-dim-300 text-base">
							<nuxt-link>{{ props.author?.username }}</nuxt-link>
						</div>
						<time
							class="text-dim-300 text-xs font-thin"
							:title="props.createdAt"
						>
							{{ props.createdAt }}
						</time>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	mediaFile: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	type: {
		type: Object,
		required: true,
	},
	author: {
		type: Object,
		required: true,
	},
	createdAt: {
		type: String,
		required: true,
	},
})
</script>
