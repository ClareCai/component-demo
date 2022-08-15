<template>
	<el-container class="select-container">
		<div class="el-select-content">
			el-select：
			<el-select v-model="elSelect" size="mini">
				<el-option
					v-for="item in selectOptionList"
					:key="item.id"
					:label="item.name"
					:value="item.id">
				</el-option>
			</el-select>
		</div>
		<div class="w-select-content">
			w-select：
			<w-select
				v-model="fxSelect"
				:optionlist="selectOptionList"
				class="w-select-input"
			>
			</w-select>
		</div>
		<div class="w-select-content">
			w-select-mulity：
			<w-select-mulity
				v-model="fxSelectMulity"
				:optionlist="selectOptionList"
				:showEmpty="false"
				class="w-select-input"
			>
			</w-select-mulity>
		</div>
		<div class="w-select-content">
			w-select-tab：
			<w-select-tab
				v-model="fxSelectTab"
				:optionlist="selectTabOptionList"
				class="w-select-input"
			>
			</w-select-tab>
		</div>
		<div class="w-select-content">
			w-select-tab-mulity：
			<w-select-tab-mulity
				v-model="fxSelectTabMulity"
				:optionlist="selectTabOptionList"
				:showEmpty="false"
				class="w-select-input"
			>
			</w-select-tab-mulity>
		</div>
	</el-container>
</template>
<script>
export default {
	name: 'selectContainer',
	data () {
		return {
			selectOptionList: [],
			selectTabOptionList: [],
			fxSelect: '',
			elSelect: '',
			fxSelectMulity: [],
			fxSelectTab: '',
			fxSelectTabMulity: []
		}
	},
	mounted () {
		this.selectOptionList = Array.from({ length: 10000 }, (item, index) => {
			return {
				id: index,
				name: '选项00' + index
			}
		})
		this.selectTabOptionList = Array.from({ length: 4 }, (item, index) => {
			const listData = Array.from({ length: 10000 }, (item, _index) => {
				return {
					id: '12345' + index + _index,
					name: '选项分页' + index + '_选项00' + _index
				}
			})
			return {
				id: '12345' + index,
				name: '选项分页' + index,
				listData
			}
		})
	},
	methods: {
	}
}
</script>
<style lang="stylus" scoped>
@import '~$assets/stylus/varsty.styl'
.select-container {
	flex-wrap wrap
	flex 0
	padding 20px 0
	.el-select-content {
		height 50px
		margin-right 20px
	}
	.w-select-content {
		height 50px
		margin-right 20px
		.w-select-input {
			width 180px
		}
	}
}
</style>
