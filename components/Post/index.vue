<template>
	<section>
		<div class="grid grid-cols-12 mx-auto sm:px-4 gap-6 px-4 py-4">
			<template v-for="i in 10">
				<PostItem />
			</template>
		</div>
	</section>
</template>
