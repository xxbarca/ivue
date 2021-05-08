<template>
	<div>
		<Input value="张三" />
		<Input value="张三" readonly/>
		<Input value="张三" disabled />
		<Input v-model:value="name" />
	</div>
</template>

<script>
	import Input from "../lib/Input.vue"
	import {ref} from 'vue'
	export default {
		name: "InputDemo",
		components: {Input},
		setup() {
			const name = ref('liyang')
			return {
				name
			}
		}
	}
</script>

<style scoped>

</style>
