<template>
	<div class="table-container">
		<fx-list-virtual-table
			ref="listTable"
			:tableColumn="tableColumn"
			:listData="tableData"
			:selectable="false"
			:selectAndIndexFixed="false"
			:showTools="false"
			showIndex
			indexContinuous
		>
		</fx-list-virtual-table>
	</div>
</template>

<script>
export default {
	name: 'TableContainer',
	data () {
		return {
			tableColumn: [
				{ prop: 'name', label: '姓名' },
				{ prop: 'age', label: '年龄' },
				{
					prop: 'marriage',
					label: '婚姻状态',
					fxRender: this.marriageRender
				},
				{
					prop: 'education',
					label: '学历',
					fxRender: this.educationRender
				},
				{
					prop: 'introduction',
					label: '自我介绍',
					fxRender: this.introductionRender
				}
			],
			tableData: [
				{
					id: 1,
					age: '17',
					name: '张三',
					marriage: 0,
					education: 1,
					introduction: '大家好'
				},
				{
					id: 2,
					age: '25',
					name: '李四',
					marriage: 1,
					education: 2,
					introduction: '大家好'
				}
			],
			educationOptionList: [
				{
					id: 1,
					name: '本科'
				},
				{
					id: 2,
					name: '研究生'
				},
				{
					id: 3,
					name: '博士生'
				}
			],
			marriageOptionList: [
				{
					id: 0,
					name: '未婚'
				},
				{
					id: 1,
					name: '已婚'
				}
			]
		}
	},
	methods: {
		marriageRender (h, { row }) {
			h = this.$createElement
			if (row.id === 1) {
				return <el-radio-group vModel={row.marriage}>
					<el-radio label={0}>未婚</el-radio>
					<el-radio label={1}>已婚</el-radio>
				</el-radio-group>
			} else {
				return <w-select
					vModel={row.marriage}
					optionlist={this.marriageOptionList}
					class="w-select-input"
				>
				</w-select>
			}
		},
		educationRender (h, { row }) {
			h = this.$createElement
			return <w-select
				vModel={row.education}
				optionlist={this.educationOptionList}
				class="w-select-input"
			>
			</w-select>
		},
		introductionRender (h, { row }) {
			h = this.$createElement
			return <w-input
				vModel={row.introduction}
				class="w-input"
			>
			</w-input>
		}
	}
}
</script>

<style lang="stylus" scoped>
.table-container {
	width 1200px
	height 500px
	margin-top 20px
}

</style>
