<template>
	<div>Tabs示例</div>
	<h1>示例1</h1>
	<Tabs v-model:selected="selected">
		<Tab title="导航1">内容1</Tab>
		<Tab title="导航2">内容2</Tab>
	</Tabs>
</template>

<script>
	import Tabs from "../lib/Tabs.vue"
	import Tab from "../lib/Tab.vue"
	import {ref} from 'vue'
	export default {
		name: "TabsDemo",
		components: {
			Tabs,
			Tab
		},
		setup() {
			const selected = ref('导航1')
			return {
				selected
			}
		}
	}
</script>

<style scoped>

</style>
