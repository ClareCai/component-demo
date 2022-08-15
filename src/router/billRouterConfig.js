/*
 * 单据参数枚举, 根据showdoc定义, 注意key必须以文档定义为准
 * http://doc.wuuxiang.com/showdoc/web/#/123?page_id=6699
 */
export default {
	StockPlan: {
		id: 'StockPlan',
		name: '采购计划单',
		path: 'stockPlanOrder'
	},
	StockOrder: {
		id: 'StockOrder',
		name: '采购订单',
		path: 'stockOrder'
	},
	SalesOrder: {
		id: 'SalesOrder',
		name: '销售订单',
		path: 'saleOrder'
	},
	InStore: {
		id: 'InStore',
		name: '入库单',
		path: 'inStoreOrder'
	},
	OutStore: {
		id: 'OutStore',
		name: '出库单',
		path: 'outStoreOrder'
	},
	MoveApply: {
		id: 'MoveApply',
		name: '调拨单',
		path: 'moveOrder'
	},
	ReceivingApply: {
		id: 'ReceivingApply',
		name: '领用申请单',
		path: 'moveOrder'
	},
	CheckBill: {
		id: 'CheckBill',
		name: '盘点单',
		path: 'takeStockOrder'
	},
	PurchaseInvoice: {
		id: 'PurchaseInvoice',
		name: '采购发票',
		path: 'purchaseInvoice'
	},
	TheoryExpend: {
		id: 'TheoryExpend',
		name: '理论耗用单',
		path: 'theoryCostOrder'
	},
	StockPlanAssign: {
		id: 'StockPlanAssign',
		name: '采购计划单分派',
		path: 'stockPlanAssign'
	},
	InStoreAssign: {
		id: 'InStoreAssign',
		name: '入库分派',
		path: 'inStoreAssign'
	},
	OutStoreAssign: {
		id: 'OutStoreAssign',
		name: '出库分派',
		path: 'outStoreAssign'
	},
	DishBusinessBill: {
		id: 'DishBusinessBill',
		name: '菜品营业单',
		path: 'foodBusinessOrder'
	}
}

const INVOICE_LIST = ['PurchaseInvoice']
export const getPrintPath = function (billType) {
	return INVOICE_LIST.includes(billType) ? '/printInvocie' : '/print'
}
