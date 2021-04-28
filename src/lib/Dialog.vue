<template>
	<div class="dialog-overlay"></div>
	<div accesskey="dialog-wrapper">
		<header>标题</header>
		<main>
			<p>第一行字</p>
			<p>第二行字</p>
		</main>
		<footer>
			<Button>确定</Button>
			<Button>取消</Button>
		</footer>
	</div>
</template>

<script>
	import Button from "./Button.vue"
	export default {
		name: "Dialog",
		components: {
			Button
		}
	}
</script>

<style scoped>

</style>
