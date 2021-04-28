<template>

</template>

<script>
	import Tab from "./Tab.vue"
	export default {
		name: "Tabs",
		setup(props, context) {
			const defaults = context.slots.default()
			defaults.forEach(tag => {
				if (tag.type !== Tab) {
					throw new Error("Tabs 子标签必须为Tab")
				}
			})


		}
	}
</script>

<style scoped>

</style>
