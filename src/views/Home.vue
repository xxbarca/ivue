<template>
	<div>
		<Topnav />
		<div class="banner">
			<h1>ivue</h1>
			<h2>一个厉害的框架</h2>
			<p class="actions">
				<a>Github</a>
				<a>开始 </a>
			</p>
		</div>
	</div>
</template>

<script>
	import Topnav from "../components/Topnav.vue"
	export default {
		name: "Home",
		components: {
			Topnav
		}
	}
</script>

<style scoped lang="scss">
	.topnar {
		border: 1px solid red;
	}
</style>
