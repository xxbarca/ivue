<template>
	<div>Dialog 示例</div>
	<h1>示例1</h1>
	<Button @click="toggle">toggle</Button>
	<Dialog v-model:visible="visible"
			:title="这是标题"
			:ok="ok"
			:cancel="cancel"
			:close-on-click-overlay="true">
		<div>内容</div>
	</Dialog>
</template>

<script>
	import Dialog from "../lib/Dialog.vue"
	import Button from "../lib/Button.vue"
	import {ref} from 'vue'
	export default {
		name: "DialogDemo",
		components: {
			Dialog,
			Button
		},
		setup() {
			const visible = ref(false)
			const toggle = () => {
				visible.value = !visible.value
			}
			const ok = () => {
			}
			const cancel = () => {}
			return {
				toggle,
				ok,
				cancel,
				visible
			}
		}
	}
</script>

<style scoped>

</style>
