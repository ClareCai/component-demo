<template>
	<w-dailog v-model="dialogVisible" title="品项库存不足" width="1200px" heightFullscreen>
		<div class="details-container">
			<div class="check-err-warning fx-warn-font">注：以下明细中，品项库存不足，无法按照本次出库数量出库</div>
			<fx-detials-table
				ref="detailsTable"
				:tableColumn="tableColumn"
				:tableData="tableData"
				:canAdd="false"
				:showDeleteBtn="false"
				:selectable="false"
				:fullScreenBtn="false"
				:showColumnFilterBtn="false"
			></fx-detials-table>
		</div>
		<template slot="footer">
			<el-button @click="onCancelClick">取消</el-button>
		</template>
	</w-dailog>
</template>
<script>
import { mapState } from 'vuex'
export default {
	name: 'checkErrInfo',
	data () {
		return {
			dialogVisible: false,
			tableColumn: [
				{ prop: 'house.code', label: '仓库编号', width: '150px' },
				{ prop: 'house.name', label: '仓库名称', width: '120px' },
				{ prop: 'item.code', label: '品项编号', width: '150px' },
				{ prop: 'item.name', label: '品项名称', width: '120px' },
				{ prop: 'item.spec', label: '规格', width: '120px' },
				{ prop: 'itemUnit.name', label: '单位' },
				{
					prop: 'outAmount',
					label: '本次出库数量',
					width: '120px',
					labelClassName: 'amount-label',
					formatter: (row) => {
						return this.$fxCommon.toFixedAutoZeroFill(row.outAmount, this.sysPointSize)
					}
				}, {
					prop: 'storeAmount',
					label: '当前库存剩余库存',
					width: '120px',
					labelClassName: 'amount-label',
					formatter: (row) => {
						return this.$fxCommon.toFixedAutoZeroFill(row.storeAmount, this.sysPointSize)
					}
				}
			],
			tableData: []
		}
	},
	computed: {
		...mapState({
			sysPointSize: state => state.system.sysPointSize
		})
	},
	methods: {
		open (errDetails) {
			this.tableData = errDetails
			this.dialogVisible = true
		},
		onCancelClick () {
			this.dialogVisible = false
		}
	}
}
</script>
<style lang="stylus" scoped>
@import '~$assets/stylus/varsty.styl'
.details-container {
	flex: 1
	display: flex;
	flex-direction: column;
	overflow: auto;
	.check-err-warning {
		line-height: 30px
	}
}
</style>
<style lang="stylus">
@import '~$assets/stylus/varsty.styl'
.amount-label {
	font-weight bold
}
</style>
