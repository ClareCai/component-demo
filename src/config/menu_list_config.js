import BIUBIUORDER_MENU_CONFIG from './menus_config/biubiuorder_menu_list_config'
// 菜单设置
export const HOME_MENU = {
	id: 'home',
	title: '供应链scm8.0',
	shortTitle: 'scm8',
	path: 'home'
}

export default [{
	id: 'basic-archives',
	title: '基础档案',
	shortTitle: '基础',
	icon: 'basic-archives',
	child: [{
		id: 'basic-archives_organ-manage',
		title: '机构管理',
		path: 'organManage'
	}, {
		id: 'basic-archives_supplier-manage',
		title: '供货商管理',
		path: 'supplierManage'
	}, {
		id: 'basic-archives_customer-manage',
		title: '客户管理',
		path: 'customerManage'
	}, {
		id: 'basic-archives_employee-manage',
		title: '员工管理',
		path: 'employeeManage'
	}, {
		id: 'basic-archives_item-manage',
		title: '品项管理',
		path: 'itemManage'
	}, {
		id: 'basic-archives_goods-manage',
		title: '商品管理',
		path: 'goodsManage'
	}, {
		id: 'basic-archives_role-manage',
		title: '权限管理',
		path: 'roleManage'
	}, {
		id: 'basic-archives_price-plan',
		title: '价格方案',
		path: 'pricePlan'
	}, {
		id: 'basic-archives_bom-set',
		title: 'BOM设置',
		path: 'bomSet'
	}, {
		id: 'basic-archives_support-archives',
		title: '辅助档案',
		child: [{
			id: 'basic-archives_support-archives_support-class',
			title: '辅助分类',
			path: 'supportClass',
			authRelation: 'basic-archives_support-archives_financial-class|basic-archives_support-archives_bussiness-type|basic-archives_support-archives_take-stock-class|basic-archives_support-archives_invoice-type'
		}, {
			id: 'basic-archives_support-archives_sales-area',
			title: '销售区域',
			path: 'salesArea'
		}]
	}, {
		id: 'basic-archives_unit-setting',
		title: '单位使用设置',
		path: 'unitSetting'
	}]
}, {
	id: 'system-setting',
	title: '系统设置',
	shortTitle: '系统',
	icon: 'system-setting',
	child: [{
		id: 'system-setting_log-manage',
		title: '操作日志',
		path: 'logManage'
	}, {
		id: 'system-setting_system-params',
		title: '系统参数',
		path: 'systemParams'
	}, {
		id: 'system-setting_account-binding',
		title: '账户设置',
		path: 'accountBinding'
	}, {
		id: 'system-setting_import-manage',
		title: '基础数据导入',
		path: 'importManage'
	}, {
		id: 'system-setting_data-initialization',
		title: '数据初始化',
		path: 'dataInitialization'
	}, {
		id: 'system-setting_filter-setting',
		title: '单据展示设置',
		path: 'filterSetting'
	}]
}, {
	id: 'store-manage',
	title: '库存管理',
	shortTitle: '库存',
	icon: 'store-manage',
	child: [{
		id: 'store-manage_in-store-order',
		title: '入库单',
		path: 'inStoreOrder'
	}, {
		id: 'store-manage_out-store-order',
		title: '出库单',
		path: 'outStoreOrder'
	}, {
		id: 'store-manage_move-order',
		title: '调拨单',
		path: 'moveOrder'
	}, {
		id: 'store-manage_take-stock-order',
		title: '盘点单',
		path: 'takeStockOrder'
	}]
}, {
	id: 'stock-sale-manage',
	title: '采销管理',
	shortTitle: '采销',
	icon: 'stock-sale-manage',
	child: [{
		id: 'stock-sale-manage_stock-plan',
		title: '订货方案',
		path: 'stockPlan'
	}, {
		id: 'stock-sale-manage_stock-plan-order',
		title: '采购计划单',
		path: 'stockPlanOrder'
	}, {
		id: 'stock-sale-manage_stock-order',
		title: '采购订单',
		path: 'stockOrder'
	}, {
		id: 'stock-sale-manage_sale-order',
		title: '销售订单',
		path: 'saleOrder'
	}, {
		id: 'stock-sale-manage_assign-manage',
		title: '分派管理',
		child: [{
			id: 'stock-sale-manage_assign-manage_stock-plan',
			title: '采购计划单分派',
			path: 'stockPlanAssign'
		}, {
			id: 'stock-sale-manage_assign-manage_in-store',
			title: '入库分派',
			path: 'inStoreAssign'
		}, {
			id: 'stock-sale-manage_assign-manage_out-store',
			title: '出库分派',
			path: 'outStoreAssign'
		}]
	}, {
		id: 'stock-sale-manage_assign-summary-sheet',
		title: '分派汇总表',
		path: 'assignSummarySheet'
	}]
}, {
	id: 'cost-manage',
	title: '成本管理',
	shortTitle: '成本',
	icon: 'cost-manage',
	child: [{
		id: 'cost-manage_bom-diagnosis',
		title: 'BOM成本卡诊断',
		path: 'bomDiagnosis'
	}, {
		id: 'cost-manage_business-data-search',
		title: '营业数据查询',
		path: 'businessDataSearch'
	}, {
		id: 'cost-manage_food-business-order',
		title: '菜品营业单据',
		path: 'foodBusinessOrder'
	}, {
		id: 'cost-manage_theory-cost-order',
		title: '理论耗用单',
		path: 'theoryCostOrder'
	}]
}, {
	id: 'financial-manage',
	title: '财务管理',
	shortTitle: '财务',
	icon: 'financial-manage',
	child: [{
		id: 'financial-manage_invoice-manage',
		title: '发票管理',
		child: [{
			id: 'financial-manage_invoice-manage_purchase-invoice',
			title: '采购发票',
			path: 'purchaseInvoice'
		}]
	}, {
		id: 'financial-manage_account-period',
		title: '会计期',
		path: 'accountPeriod'
	}, {
		id: 'financial-manage_carry-forward',
		title: '月末结转',
		path: 'carryForward'
	}]
}, {
	id: 'report',
	title: '报表中心',
	shortTitle: '报表',
	icon: 'report',
	child: [{
		id: 'report_report-current-store',
		title: '当前库存查询',
		type: 'report',
		path: 'report'
	}, {
		id: 'report_report-purchase-sell-stock-summary',
		title: '品项进销存汇总',
		type: 'report',
		path: 'report'
	}, {
		id: 'report_report-purchase-sell-stock-standing-book',
		title: '品项进销存台账查询',
		type: 'report',
		path: 'report'
	}, {
		id: 'report_shop-gross',
		title: '门店毛利分析表',
		type: 'report',
		path: 'report'
	}, {
		id: 'report_dishe-cost',
		title: '菜品成本结构表',
		type: 'report',
		path: 'report'
	}, {
		id: 'report_dishe-gross',
		title: '菜品毛利分析表',
		type: 'report',
		path: 'report'
	}, {
		id: 'report_raw-score',
		title: '原料分差分析表',
		type: 'report',
		path: 'report'
	}]
}, BIUBIUORDER_MENU_CONFIG]
