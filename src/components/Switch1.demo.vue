<template>
	<Switch v-model:value="bool" />
</template>

<script>
	import Switch from "../lib/Switch.vue"
	import { ref } from 'vue'
	export default {
		name: "Switch1.demo",
		components: {
			Switch
		},
		setup() {
			const bool = ref(false)
			return {
				bool
			}
		}
	}
</script>

<style scoped>

</style>
