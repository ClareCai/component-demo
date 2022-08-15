export default {
	OutStore: [{
		step: 1,
		title: '出库数量为0',
		mistakeType: 'error'
	}, {
		step: 2,
		title: '重复品项',
		mistakeType: 'warn'
	}, {
		step: 3,
		title: '仓库与品项关联关系',
		mistakeType: 'warn'
	}, {
		step: 4,
		title: '单价为0',
		mistakeType: 'warn'
	}, {
		step: 5,
		title: '价格差异',
		mistakeType: 'warn'
	}],
	OutStore_Checked: [{
		step: 1,
		title: '出库数量为0',
		mistakeType: 'error'
	}, {
		step: 2,
		title: '重复品项',
		mistakeType: 'warn'
	}, {
		step: 3,
		title: '仓库与品项关联关系',
		mistakeType: 'warn'
	}, {
		step: 4,
		title: '单价为0',
		mistakeType: 'warn'
	}, {
		step: 5,
		title: '价格差异',
		mistakeType: 'warn'
	}, {
		step: 6,
		title: '销售价格小于成本价格',
		mistakeType: 'warn'
	}]
}
