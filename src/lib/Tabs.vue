<template>
	<div class="gulu-tabs">
		<div class="gulu-tabs-nav" ref="container">
			<span
					@click="select(t)"
					:class="{selected: t === selected}"
					class="gulu-tabs-nav-item"
					v-for="(t, index) in titles" :key="index"
					:ref="el => { navItems[index] = el }"
			>
				{{t}}
			</span>
			<div ref="indicator" class="gulu-tabs-nav-indicator"></div>
		</div>
		<div class="gulu-tabs-content">
			<component :key="current.props.title" class="gulu-tabs-content-item" :is="current"  />
		</div>
	</div>
</template>

<script>
	import Tab from "./Tab.vue"
	import {computed, ref, onMounted, onUpdated} from 'vue'
	export default {
		name: "Tabs",
		props: {
			selected: {
				type: String,
				default: ''
			}
		},
		setup(props, context) {
			const navItems = ref([])
			const indicator = ref(null)
			const container = ref(null)
			const defaults = context.slots.default()
			defaults.forEach(tag => {
				if (tag.type !== Tab) {
					throw new Error("Tabs 子标签必须为Tab")
				}
			})
			const titles = defaults.map(tag => tag.props.title)
			const current = computed(() => {
				return defaults.find(tag => tag.props.title === props.selected)
			})
			const select = (title) => {
				context.emit('update:selected', title)
			}
			const x = () => {
				const divs = navItems.value
				const result = divs.filter(div => div.classList.contains('selected'))[0]
				const {
					width
				} = result.getBoundingClientRect()
				indicator.value.style.width = width + 'px'
				const {left: left1} = container.value.getBoundingClientRect()
				const {left: left2} = result.getBoundingClientRect()
				const left = left2 - left1
				indicator.value.style.left = left + 'px'
			}
			onMounted(() => {
				x()
			})
			onUpdated(() => {
				x()
			})
			return {
				defaults,
				titles,
				current,
				select,
				navItems,
				indicator,
				container
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
