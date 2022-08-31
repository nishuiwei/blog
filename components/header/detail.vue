<template>
	<div
		class="m-auto bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-md relative"
	>
		<nuxt-img
			src="https://auden.bironthemes.com/content/images/size/w2000/2020/04/grey_chair.jpg"
			lazy
			class="h-full object-cover w-full rounded-md"
		/>
		<div
			class="absolute top-0 left-0 right-0 bottom-0 m-auto z-20 bg-gradient-to-r from-purple-500 to-pink-500 backdrop-saturate-50 backdrop-blur rounded-md opacity-75"
		>
			<div class="h-full flex items-center justify-center flex-col">
				<div class="flex items-center pt-5 gap-3">
					<nuxt-link
						class="border bg-transparent rounded-md text-xs font-semibold px-2 tracking-widest py-0.5 text-him-500"
					>
						type
					</nuxt-link>
				</div>
				<p
					class="font-extrabold text-him-500 text-4xl my-5 text-center tracking-wider w-3/5 leading-tight"
				>
					今天这波是水文 - code review 流程规范
				</p>
				<div class="flex my-3 items-center">
					<div class="w-11 h-11 rounded-full border-2 border-dim-600">
						<nuxt-img
							src="https://auden.bironthemes.com/content/images/size/w2000/2020/04/grey_chair.jpg"
							alt="username"
							title="username"
							aria-label="username"
							format="webp"
							class="rounded-full w-full h-full object-cover"
						/>
					</div>
					<!-- 名字，发布时间 -->
					<div class="flex flex-col ml-4">
						<div class="text-dim-300 text-base">
							<nuxt-link>卫慧杰</nuxt-link>
						</div>
						<time class="text-dim-300 text-xs font-thin"> 2020 - 02 - 03 </time>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const { usePostDetail } = usePost()
const post = usePostDetail()
console.log(post)
</script>
