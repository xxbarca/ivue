<template>
	<button @click="toggle" :class="{checked: value, disabled: disabled}">
		<span></span>
	</button>
</template>

<script>
	export default {
		name: "Switch",
		props: {
			value: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: true
			}
		},
		setup(props, context) {
			const toggle = () => {
				if (!props.disabled) {
					context.emit('update:value', !props.value)
				}
			}
			return {
				toggle
			}
		}
	}
</script>

<style lang="scss">
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

		&.disabled {
			cursor: not-allowed;
			background: rgb(154, 197, 251);
		}
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
		background: #1890ff;
	}
	button.checked span {
		left: calc(100% - #{$h2} - 2px);
	}
	button:focus {
		outline: none;
	}
</style>
