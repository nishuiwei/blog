<template>
	<NuxtLayout name="type">
		<div class="grid grid-cols-12 m-auto lg:gap-8 gap-6 list-card">
			<template v-for="(item, index) in detail.articles">
				<post-item
					:post="item"
					:index="index"
					classes="col-span-12 md:col-span-4 xs:col-span-6 "
				/>
			</template>
		</div>
	</NuxtLayout>
</template>

<script setup>
const { getHomeTypeById } = useType()
const getTypeIdFormRoute = () => {
	return useRoute().params.typeId
}

const detail = ref({})

const getTypeByIdDetail = async (typeId) => {
	try {
		const { data } = await getHomeTypeById(typeId)
		detail.value = data.value.data
	} catch (error) {
		console.log(error)
	}
}

getTypeByIdDetail(getTypeIdFormRoute())
</script>
