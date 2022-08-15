<template>
	<w-dailog v-model="dialogVisible" :title="computedTitle" width="700px" positionCenter>
		<div class="details-container">
			<div class="check-err-warning fx-warn-font">{{computedTip}}</div>
			<fx-detials-table
				ref="detailsTable"
				:tableColumn="tableColumn"
				:tableData="tableData"
				:canAdd="false"
				:showDeleteBtn="false"
				:selectable="false"
				:fullScreenBtn="false"
				:showTools="false"
			></fx-detials-table>
		</div>
		<template slot="footer">
			<el-button @click="onCancelClick">取消</el-button>
		</template>
	</w-dailog>
</template>
<script>
export default {
	name: 'uncheckOrderList',
	props: {
		billType: String
	},
	data () {
		return {
			dialogVisible: false,
			tableColumn: [
				{
					prop: 'sysBillCode',
					label: '系统单号',
					fxRender: this.sysBillCodeRender
				},
				{ prop: 'businessDate', label: '业务时间' },
				{
					prop: 'buyerBillState',
					label: '审核状态',
					required: true,
					fxRender: this.billStateRender
				}
			],
			tableData: []
		}
	},
	computed: {
		billState () {
			return (billState, recheckState, key) => {
				return this.$fxStateMiddleware.getOrderStateById(billState, recheckState)[key]
			}
		},
		computedTitle () {
			switch (this.billType) {
			case 'CheckBill':
				return '未审核单据'
			case 'InStore':
				return '已审核盘点单'
			case 'OutStore':
				return '已审核盘点单'
			default:
				return ''
			}
		},
		computedTip () {
			switch (this.billType) {
			case 'CheckBill':
				return '注：盘点时间前存在未审核的出入库单据'
			case 'InStore':
				return '注：业务日期后存在已审核的盘点单据'
			case 'OutStore':
				return '注：业务日期后存在已审核的盘点单据'
			default:
				return ''
			}
		}
	},
	methods: {
		open (errDetails) {
			this.tableData = errDetails
			this.dialogVisible = true
		},
		onCancelClick () {
			this.dialogVisible = false
		},
		sysBillCodeRender (h, { row, $index }) {
			h = this.$createElement
			return <w-link class="check-link" on-click={() => this.onJumpLink(row)}>{row.sysBillCode}</w-link>
		},
		onJumpLink (row) {
			this.$fxGoToBillBlank(row.billClass, { id: row.id })
		},
		billStateRender (h, { row }) {
			h = this.$createElement
			return <fx-list-state-tag
				icon={this.billState(row.billState, row.recheckState, 'icon')}
				label={this.billState(row.billState, row.recheckState, 'label')}
			></fx-list-state-tag>
		}
	}
}
</script>
<style lang="stylus" scoped>
@import '~$assets/stylus/varsty.styl'
.details-container {
	display: flex;
	flex-direction: column;
	overflow: auto;
	height 50vh
	.check-err-warning {
		line-height: 30px
	}
	.check-link {
		color $fxBlue5
		text-decoration-line underline
	}
}
</style>
