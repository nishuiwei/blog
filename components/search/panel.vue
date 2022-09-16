<template>
	<div
		v-if="props.post.length"
		class="overflow-y-auto max-h-[calc(100vh-172px)] sm:max-h-[70vh] mt-[1px] border-t border-neutral-200 h-auto"
	>
		<div class="py-3 px-4 sm:px-7">
			<h1
				class="uppercase text-xs text-neutral-400 font-semibold mb-1 tracking-wide"
			>
				Posts
			</h1>
			<template v-for="item in props.post">
				<nuxt-link :to="`/post/${item.id}`">
					<div
						class="py-3 -mx-4 sm:-mx-7 px-4 sm:px-7 cursor-pointer hover:bg-neutral-100"
					>
						<h2 class="text-base font-medium leading-tight text-neutral-800">
							{{ item.title }}
						</h2>
						<p
							class="text-neutral-400 leading-normal text-sm mt-0 mb-0 truncate"
						>
							{{ item.abstract }}
						</p>
					</div>
				</nuxt-link>
			</template>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	post: {
		type: Array,
		required: true,
	},
	keyword: {
		type: String,
		default: '',
	},
})
</script>
