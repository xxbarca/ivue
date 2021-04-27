<template>
	<button @click="toggle" :class="{checked: value}">
		<span></span>
	</button>
</template>

<script>
	import { ref } from 'vue'
	export default {
		name: "Switch",
		props: {
			value: {
				type: Boolean,
				default: false
			}
		},
		setup(props, context) {
			const toggle = () => {
				context.emit('update:value', !props.value)
			}
			return {
				toggle
			}
		}
	}
</script>

<style scoped lang="scss">
	$h: 22px;
	$h2: $h - 4px;
	button {
		height: $h;
		width: $h * 2;
		border: none;
		background: grey;
		border-radius: $h/2;
		position: relative;
		cursor: pointer;
	}
	span {
		position: absolute;
		top: 2px;
		left: 2px;
		height: $h2;
		width: $h2;
		border-radius: $h2/2;
		background: white;
		transition: left 250ms;
	}
	button.checked {
		background: blue;
	}
	button.checked span {
		left: calc(100% - #{$h2} - 2px);
	}
	button:focus {
		outline: none;
	}
</style>
