<template>
	<div style="padding-bottom :10vw">
		<gu-navigation back type="primary" title="标签栏"> </gu-navigation>
		<div class="component-display">
			<div class="component-display--title">基础用法</div>
		</div>
		<gu-tab v-model="active1">
			<gu-tab-panel title="标签栏1">
				<div class="content1">内容1</div>
			</gu-tab-panel>
			<gu-tab-panel title="标签栏2">
				<div class="content2">内容2</div>
			</gu-tab-panel>
		</gu-tab>

		<div class="component-display">
			<div class="component-display--title">视图过度</div>
		</div>
		<gu-tab v-model="active2" animatable>
			<gu-tab-panel title="标签栏1">
				<div class="content1">内容1</div>
			</gu-tab-panel>
			<gu-tab-panel title="标签栏2">
				<div class="content2">内容2</div>
			</gu-tab-panel>
		</gu-tab>

		<div class="component-display">
			<div class="component-display--title">可触摸</div>
		</div>
		<gu-tab v-model="active3" animatable touchable>
			<gu-tab-panel title="标签栏1">
				<div class="content1">内容1</div>
			</gu-tab-panel>
			<gu-tab-panel title="标签栏2">
				<div class="content2">内容2</div>
			</gu-tab-panel>
		</gu-tab>

		<div class="component-display">
			<div class="component-display--title">可滚动</div>
		</div>
		<gu-tab v-model="active4" animatable scrollspy>
			<gu-tab-panel title="标签栏1">
				<div class="content1">内容1</div>
			</gu-tab-panel>
			<gu-tab-panel title="标签栏2">
				<div class="content2">内容2</div>
			</gu-tab-panel>
			<gu-tab-panel title="标签栏3">
				<div class="content3">内容3</div>
			</gu-tab-panel>
			<gu-tab-panel title="标签栏4">
				<div class="content4">内容4</div>
			</gu-tab-panel>
			<gu-tab-panel title="标签栏5">
				<div class="content5">内容5</div>
			</gu-tab-panel>
		</gu-tab>
	</div>
</template>

<script>
export default {
	data () {
		return {
			active1: 0,
			active2: 0,
			active3: 0,
			active4: 0,
		}
	}
}
</script>

<style lang="scss" scoped>
.center {
	display: flex;
	justify-content: center;
	align-items: center;
}

.content1,
.content2,
.content3,
.content4,
.content5 {
	@extend .center;
	color: #fff;
	height: 200px;
}

.content1 {
	background: #f7c6d0;
}

.content2 {
	background: #72d6e8;
}

.content3 {
	background: beige;
}
.content4 {
	background:violet;
}

.content5 {
	background:rgb(28, 119, 172);
}
</style>
