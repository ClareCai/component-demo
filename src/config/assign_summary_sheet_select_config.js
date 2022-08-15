export default {
	datasource: [{
		id: 0,
		name: '入库单'
	}, {
		id: 1,
		name: '出库单'
	}, {
		id: 2,
		name: '销售订单'
	}],
	billTypeInStore: [{
		id: 1002,
		name: '采购入库'
	}, {
		id: 1005,
		name: '差异入库'
	}],
	billTypeOutStore: [{
		id: 2001,
		name: '销售出库'
	}, {
		id: 2005,
		name: '差异出库'
	}],
	billStateAssignSummaryList: [{
		id: 1,
		name: '已审核'
	}, {
		id: 0,
		name: '未审核'
	}],
	dateType: [{
		id: 0,
		name: '业务日期'
	}, {
		id: 1,
		name: '到货日期'
	}],
	stockWayAssignSummaryList: [{
		id: 1,
		name: '直发模式'
	}, {
		id: 2,
		name: '越库模式'
	}],
	urgent: [{
		id: 1,
		name: '加急单据'
	}, {
		id: 0,
		name: '不加急单据'
	}],
	organTypeAssignSummaryList: [{
		id: '2',
		name: '门店'
	}, {
		id: '1',
		name: '配送中心'
	}, {
		id: '5',
		name: '供货商'
	}, {
		id: '6',
		name: '客户'
	}],
	itemCategoryAssignSummaryList: [{
		id: 0,
		name: '原料/物料'
	}, {
		id: 1,
		name: '菜品'
	}, {
		id: 2,
		name: '商品'
	}],
	itemUnitAssignSummaryList: [{
		id: 0,
		name: '单据单位'
	}, {
		id: 1,
		name: '报表单位'
	}],
	showTypeInStore: [{
		id: 0,
		name: '品项纵向、入库方/买方横向'
	}, {
		id: 1,
		name: '品项横向、入库方/买方纵向'
	}],
	showTypeOutStore: [{
		id: 0,
		name: '品项纵向、出库方/卖方横向'
	}, {
		id: 1,
		name: '品项横向、出库方/卖方纵向'
	}],
	showTypeSaleOrder: [{
		id: 2,
		name: '品项+卖方纵向、买方横向'
	}, {
		id: 3,
		name: '品项+买方纵向、卖方横向'
	}, {
		id: 4,
		name: '品项+卖方横向、买方纵向'
	}, {
		id: 5,
		name: '品项+买方横向、卖方纵向'
	}],
	summaryCategory: [{
		id: 0,
		name: '数量'
	}, {
		id: 1,
		name: '金额'
	}],
	summaryTypeInStore: [{
		id: 0,
		name: '按入库方汇总'
	}, {
		id: 1,
		name: '按入库方仓库汇总'
	}],
	summaryTypeOutStore: [{
		id: 0,
		name: '按出库方汇总'
	}, {
		id: 1,
		name: '按出库方仓库汇总'
	}],
	summaryTypeSaleOrder: [{
		id: 2,
		name: '按买方汇总'
	}, {
		id: 3,
		name: '按卖方汇总'
	}],
	itemOrderRule: [{
		id: 0,
		name: '按品项编号排序'
	}, {
		id: 1,
		name: '按品项名称排序'
	}],
	inOrderRule: [{
		id: 0,
		name: '按入库方/买方编号排序'
	}, {
		id: 1,
		name: '按入库方/买方名称排序'
	}],
	outOrderRule: [{
		id: 0,
		name: '按出库方/卖方编号排序'
	}, {
		id: 1,
		name: '按出库方/卖方名称排序'
	}]
}
