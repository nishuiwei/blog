<template>
	<section>
		<div class="grid grid-cols-12 mx-auto sm:px-4 gap-6 lg:px-4">
			<template v-for="i in 10">
				<PostItem />
			</template>
		</div>
	</section>
</template>
