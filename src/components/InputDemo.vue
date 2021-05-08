<template>
	<div>
		<Input value="张三" />
		<Input value="张三" readonly/>
		<Input value="张三" disabled />
	</div>
</template>

<script>
	import Input from "../lib/Input.vue"
	export default {
		name: "InputDemo",
		components: {Input}
	}
</script>

<style scoped>

</style>
