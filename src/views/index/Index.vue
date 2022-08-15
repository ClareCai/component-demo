<template>
	<el-container class="app-container" direction="vertical">
		<div class="radio-container">
			<el-radio-group v-model="radio">
				<el-radio-button label="1">选择器的虚拟渲染</el-radio-button>
				<el-radio-button label="2">穿梭框优化</el-radio-button>
				<el-radio-button label="3">table表格</el-radio-button>
			</el-radio-group>
		</div>
		<select-container v-show="radio === '1'"></select-container>
		<fx-transfer-container v-show="radio === '2'"></fx-transfer-container>
		<table-container v-show="radio === '3'"></table-container>
	</el-container>
</template>
<script>
import selectContainer from './components/SelectContainer.vue'
import fxTransferContainer from './components/FxTransferContainer.vue'
import tableContainer from './components/TableContainer.vue'
export default {
	name: 'app-main',
	components: {
		selectContainer,
		fxTransferContainer,
		tableContainer
	},
	data () {
		return {
			radio: '3'
		}
	},
	methods: {
	}
}
</script>
<style lang="stylus" scoped>
@import '~$assets/stylus/varsty.styl'
.app-container {
	padding 20px
	height 100%
}
</style>
