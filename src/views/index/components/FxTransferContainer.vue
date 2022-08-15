<template>
	<el-container class="transfer-container" direction="vertical">
		<div class="btn-container">
			<el-radio-group :value="radio">
				<el-radio label="1" border @change="onRadioChange('1')">原始transfer</el-radio>
				<el-radio label="2" border @change="onRadioChange('2')">虚拟渲染的transfer</el-radio>
				<el-radio label="3" border @change="onRadioChange('3')">最终优化的transfer</el-radio>
			</el-radio-group>
			<div class="btn-content">
				<el-button type="primary" @click="getData">获取数据</el-button>
				<el-button @click="clearData">清除数据</el-button>
			</div>
		</div>
		<div class="transfer-content">
			<fx-transfer-original
				v-if="radio === '1'"
				ref="transfer1"
				v-model="selectIds1"
				:tableColumn="tableColumn"
				:tableData="transferData"
				leftTitle="全部品项"
				rightTitle="选定品项"
			></fx-transfer-original>
			<fx-transfer-edit1
				v-if="radio === '2'"
				ref="transfer2"
				v-model="selectIds2"
				:tableColumn="tableColumn"
				:tableData="transferData"
				leftTitle="全部品项"
				rightTitle="选定品项"
			></fx-transfer-edit1>
			<fx-transfer
				v-if="radio === '3'"
				ref="transfer3"
				v-model="selectIds3"
				:tableColumn="tableColumn"
				:tableData="transferData"
				leftTitle="全部品项"
				rightTitle="选定品项"
			></fx-transfer>
		</div>
	</el-container>
</template>
<script>
export default {
	name: 'transferContainer',
	data () {
		return {
			transferData: [],
			selectIds1: [],
			selectIds2: [],
			selectIds3: [],
			tableColumn: [
				{ prop: 'code', label: '品项编号', required: true },
				{ prop: 'name', label: '品项名称', required: true }
			],
			radio: '1'
		}
	},
	methods: {
		getData () {
			this.transferData = Array.from({ length: 10000 }, (item, index) => {
				return {
					id: index,
					name: '选项000' + index,
					code: 'XX00' + index
				}
			})
		},
		clearData () {
			this.transferData = []
			this.selectIds1 = []
			this.selectIds2 = []
			this.selectIds3 = []
		},
		onRadioChange (val) {
			this.clearData()
			this.radio = val
		}
	}
}
</script>
<style lang="stylus" scoped>
@import '~$assets/stylus/varsty.styl'
.transfer-container {
	padding 20px 0
	max-width: 1000px
	.btn-container {
		display: flex
		justify-content space-between
	}
	.transfer-content {
		display flex
		flex 1
		padding-top 20px
	}
}
</style>
