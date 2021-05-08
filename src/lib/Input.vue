<template>
	<div class="wrapper">
		<input
				@input="onInput"
				type="text"
				:value="value"
				:disabled="disabled"
				:readonly="readonly"/>

	</div>
</template>

<script>
	export default {
		name: "Input",
		props: {
			value: {
				type: String,
				default: ''
			},
			disabled: {
				type: Boolean,
				default: false
			},
			readonly: {
				type: Boolean,
				default: false
			}
		},
		setup(props, context) {
			const onInput = (e) => {
				context.emit('update:value', e.target.value)
			}
			return {
				onInput
			}
		}
	}
</script>

<style lang="scss">
	$height: 32px;
	$border-color: #999;
	$border-radius: 4px;
	$font-size: 12px;
	$red: #F1453D;
	.wrapper {
		font-size: $font-size;
		display: inline-block;
		margin: 5px;
		&.error {
			> input {
				border-color: $red;
			}
		}
		> input {
			height: $height;
			border: 1px $border-color solid;
			border-radius: $border-radius;
			padding: 0 8px;
			outline: inherit;
			&:hover {
				border-color: #409EFF;
			}
			&[disabled] {
				border-color: #E3E7ED;
				color: #CACED5;
				background: #F5F7FA;
				cursor: not-allowed;
			}

		}
	}
</style>
