<template>
	<div class="gulu-tabs">
		<div class="gulu-tabs-nav">
			<span
					@click="select(t)"
					:class="{selected: t === selected}"
					class="gulu-tabs-nav-item"
					v-for="(t, index) in titles" :key="index">{{t}}</span>
		</div>
		<div class="gulu-tabs-content">
			<component :key="current.props.title" class="gulu-tabs-content-item" :is="current"  />
		</div>
	</div>
</template>

<script>
	import Tab from "./Tab.vue"
	import {computed} from 'vue'
	export default {
		name: "Tabs",
		props: {
			selected: {
				type: String,
				default: ''
			}
		},
		setup(props, context) {
			const defaults = context.slots.default()
			defaults.forEach(tag => {
				if (tag.type !== Tab) {
					throw new Error("Tabs 子标签必须为Tab")
				}
			})
			const current = computed(() => {
				return defaults.find(tag => tag.props.title === props.selected)
			})
			const titles = defaults.map(tag => tag.props.title)
			const select = (title) => {
				context.emit('update:selected', title)
			}
			return {
				defaults,
				titles,
				current,
				select
			}
		}
	}
</script>

<style lang="scss">
	$blue: #40a9ff;
	$color: #333;
	$border-color: #d9d9d9;
	.gulu-tabs {
		&-nav {
			display: flex;
			color: $color;
			border-bottom: 1px solid $border-color;
			position: relative;
			&-item {
				padding: 8px 0;
				margin: 0 16px;
				cursor: pointer;
				&:first-child {
					margin-left: 0;
				}
				&.selected {
					color: $blue;
				}
			}
			&-indicator {
				position: absolute;
				height: 3px;
				background: $blue;
				left: 0;
				bottom: -1px;
				width: 100px;
				transition: all 250ms;
			}
		}
		&-content {
			padding: 8px 0;
		}
	}
</style>
