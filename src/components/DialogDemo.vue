<template>
	<div>Dialog 示例</div>
	<h1>示例1</h1>
	<Button @click="toggle">toggle</Button>
	<Dialog v-model:visible="visible"
			:ok="ok"
			:cancel="cancel"
			:close-on-click-overlay="true">
		<template v-slot:content>
			<strong>hi</strong>
			<div>hi2</div>
		</template>
		<template v-slot:title>
			<strong>加粗的标题</strong>
		</template>
	</Dialog>

	<h1>示例1</h1>
	<Button @click="showDialog">toggle</Button>

</template>

<script>
	import Dialog from "../lib/Dialog.vue"
	import Button from "../lib/Button.vue"
	import {ref, h} from 'vue'
	import {openDialog} from "../lib/openDialog"
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

			const showDialog = () => {
				openDialog({
					title: '标题',
					content: h('strong', {}, '标题'),
					ok: () => {
						console.log('ok')
					},
					cancel: () => {
						console.log('cancel')
					}
				})
			}
			return {
				toggle,
				ok,
				cancel,
				showDialog,
				visible
			}
		}
	}
</script>

<style scoped>

</style>
