<template>
<!--	<Selector :placeholder="placeholder" :data="selectorData" @setItemValue="setItemValue" />-->

</template>

<script>

	import selectorData from "../data/selector.js"
	export default {
		name: "SelectorDemo",
		components: {
			// Selector
		},
		setup() {
			let placeholder = '请选择框架'
			const setItemValue = (value) => {
				console.log(value)
			}
			return {
				placeholder,
				setItemValue,
				selectorData
			}
		}
	}
</script>

<style scoped>

</style>
