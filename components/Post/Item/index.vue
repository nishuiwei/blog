<template>
	<article class="col-span-12 md:col-span-6">
		<!-- 背景图片 -->
		<div
			class="h-72 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"
		></div>
		<!-- 按钮 -->
		<div class="flex items-center pt-5 gap-3">
			<nuxt-link
				class="border bg-transparent rounded-md text-xs font-semibold px-2 tracking-widest py-0.5 text-him-100 dark:text-dim-200"
				:class="[defaultHoverText, defaultHoverBorder, defaultTransition]"
			>
				热门
			</nuxt-link>
		</div>
		<!-- 标题 -->
		<div class="flex flex-wrap py-3">
			<h2 class="text-2xl">
				<nuxt-link
					:class="[defaultHoverText, defaultTransition]"
					class="font-bold text-him-100 dark:text-dim-200"
				>
					5 ways an electric bike will change your life
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
					<nuxt-link>卫慧杰</nuxt-link>
				</div>
				<time class="text-him-200 dark:text-dim-300 text-xs font-thin">
					Apr 4, 2020
				</time>
			</div>
		</div>
	</article>
</template>

<script setup>
const { defaultHoverText, defaultHoverBorder, defaultTransition } = useStyle()
</script>
