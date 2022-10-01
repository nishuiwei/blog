<template>
	<div class="flex items-center mt-10">
		<!-- avator -->
		<!-- <div class="rounded-full w-10 h-10 bg-black"></div> -->
		<div class="shrink-0 items-center">
			<nuxt-img
				loading="lazy"
				class="h-10 w-10 object-cover rounded-full"
				src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
				alt="Current profile photo"
				placeholder="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
			/>
		</div>
		<div
			class="relative rounded-md items-center h-14 ml-5 block w-full border-gray-300 border dark:border-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
		>
			<input
				type="text"
				name="price"
				id="price"
				class="transition-all duration-150 delay-100 w-full px-3 py-4 bg-transparent dark:bg-[rgba(255,255,255,0.08)] rounded-md border-none border border-slate-50 dark:border-none font-sans text-[16.5px] leading-normal dark:text-neutral-300 focus:outline-0 shadow-form hover:shadow-formxl dark:shadow-transparent placeholder:text-neutral-700 dark:placeholder:text-neutral-300 overflow-hidden min-h-[48px] hover:border-slate-300"
				placeholder="正在开发中。。。请勿使用"
			/>
			<div
				class="absolute right-[9px] bottom-[9px] flex space-x-4 transition-[opacity] duration-150"
			>
				<button
					class="flex items-center justify-center w-auto sm:w-[128px] h-full transition-[opacity] duration-150 bg-neutral-900 dark:bg-[rgba(255,255,255,0.9)] rounded-[6px] border outline-0 py-2 px-3 text-sm text-center font-sans font-semibold text-white dark:text-neutral-800"
				>
					添加评论
				</button>
			</div>
		</div>
	</div>
</template>
