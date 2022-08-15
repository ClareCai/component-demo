/*
 * 项目搜索条件设置
 * @eq => e (= 查询条件)
 * @fuzzy => u (组合查询)
 * @link => l (模糊查询)
 * @custom => custom (自定义查询)
 * @in => i (范围查询)
 * @rl => rl(明细备注查询)
 * @orl => orl(or Like 查询)
 * @range => r(区间查询)
 * @rangeIn => ri(关联范围查询 或)
 * @rangeAnd => ra(关联范围查询 且)
 * @rangeInId => rid(关联范围id查询)

 * @merge[function] merge搜索配置 传参为搜索参数 return 同搜索条件结构一致
*/
export default {
	// 机构list
	organList: {
		eq: ['enableFlag', 'organType'],
		link: ['memo'],
		custom: ['father', 'treeLV'],
		in: ['id']
	},
	// 财务分类list
	financialList: {
		eq: ['enableFlag', 'subject'],
		fuzzy: [{
			id: 'financialKey',
			rule: 'name-code-pinYin'
		}],
		link: ['memo'],
		custom: []
	},
	// 盘盈原因list
	inventoryProfitList: {
		eq: ['enableFlag'],
		fuzzy: [{
			id: 'reasonKey',
			rule: 'name-code-pinYin'
		}]
	},
	// 业务类型list
	bussinessTypeList: {
		eq: ['enableFlag', 'pid', 'billType'],
		link: ['name']
	},
	// 供货商list
	supplierList: {
		eq: ['enableFlag', 'pplierTypeId', 'organType'],
		link: ['memo'],
		custom: ['father', 'accounting', 'supplierTypeId', 'treeLV'],
		in: ['id']
	},
	// 员工list
	employeeList: {
		eq: ['enableFlag'],
		fuzzy: [{
			id: 'employeeKey',
			rule: 'name-code-pinYin'
		}],
		link: ['username'],
		custom: ['organType', 'treeLV'],
		in: ['organId']
	},
	// 客户list
	customerList: {
		eq: ['enableFlag', 'organType'],
		link: ['memo'],
		custom: ['treeLV', 'accounting', 'father', 'customerType'],
		in: ['id']
	},
	// 品项list
	itemList: {
		eq: ['enableFlag', 'consumptionMethod'],
		link: ['memo'],
		custom: ['itemTypeId'],
		in: ['id'],
		merge (params) {
			return params.itemTypeFlag ? { rangeAnd: ['category-category'] } : { rangeIn: ['category-category'] }
		}
	},
	// 角色list
	roleList: {
		custom: ['employee'],
		in: ['id']
	},
	// 会计期list
	accountList: {
		eq: ['year', 'organId']
	},
	// 月末结转list
	carryForwardList: {
		eq: ['organ.organType', 'ap.id', 'oap.accountingState'],
		in: ['organ.id']
	},
	// 价格方案list
	planPriceList: {
		eq: ['enableFlag', 'billState'],
		fuzzy: [{
			id: 'planKey',
			rule: 'name-code'
		}],
		custom: ['workDate'],
		link: ['memo'],
		rangeIn: ['pd-itemId', 'pb-organId', 'ps-organId'],
		rl: ['pd-memo']
	},
	// 订货方案list
	planStockList: {
		eq: ['enableFlag', 'planState'],
		fuzzy: [{
			id: 'planKey',
			rule: 'name-code'
		}],
		custom: ['item'],
		link: ['memo'],
		rangeIn: ['pd-itemId', 'pd-sellerOrgan', 'pb-buyerOrgan'],
		rl: ['pd-memo']
	},
	// 单位使用场景设置list
	unitSettingList: {
		custom: ['item.itemType'],
		in: ['item.id'],
		merge (params) {
			return params.itemTypeFlag ? { rangeAnd: ['category-category'] } : { rangeIn: ['category-category'] }
		}
	},
	// 采购计划单list
	stockPlanOrderList: {
		range: ['businessDate'],
		in: ['organId', 'billState', 'billType', 'billBizTypeId', 'stockPlanId', 'assignStatus'],
		rl: ['detail-memo'],
		eq: ['urgent', 'history'],
		orl: ['userBillCode', 'sysBillCode'],
		link: ['memo'],
		rangeIn: ['detail-itemId', 'detail-inHouseId']
	},
	// 入库分派list
	stockPlanOrderAssignList: {
		range: ['businessDate'],
		link: ['memo'],
		in: ['srmState', 'organId', 'otherOrganId', 'billBizTypeId', 'stockPlanId', 'billState', 'billType', 'assignStatus', 'urgent'],
		rl: ['detail-memo'],
		orl: ['userBillCode', 'sysBillCode'],
		rangeIn: ['detail-itemId']
	},
	// 采购订单list
	stockList: {
		eq: ['history'],
		range: ['businessDate'],
		link: ['memo'],
		in: ['supplierState', 'urgent', 'billState', 'billType', 'purchasePlan', 'billBizTypeId', 'organId', 'otherOrganId'],
		rl: ['detail-memo'],
		orl: ['userBillCode', 'sysBillCode'],
		rangeIn: ['detail-itemId', 'detail-inHouseId']
	},
	// 销售订单list
	saleList: {
		eq: ['history'],
		range: ['businessDate'],
		link: ['memo'],
		in: ['srmState', 'organId', 'otherOrganId', 'billBizTypeId', 'stockPlanId', 'billState', 'billType', 'inAssignStatus', 'outAssignStatus', 'urgent', 'generateWay'],
		rl: ['detail-memo'],
		orl: ['userBillCode', 'sysBillCode'],
		rangeIn: ['detail-itemId']
	},
	// 入库分派list
	inStoreAssignList: {
		range: ['businessDate'],
		link: ['memo'],
		in: ['srmState', 'organId', 'otherOrganId', 'billBizTypeId', 'stockPlanId', 'billState', 'billType', 'inAssignStatus', 'outAssignStatus', 'urgent'],
		rl: ['detail-memo'],
		orl: ['userBillCode', 'sysBillCode'],
		rangeIn: ['detail-itemId']
	},
	// 入库分派品项list
	inStoreAssignItemList: {
		in: ['bill.id', 'bill.otherOrganId', 'bill.organId', 'detail.inHouseId', 'bill.crossOrgan', 'detail.itemId'],
		orl: ['bill.userBillCode', 'bill.sysBillCode'],
		eq: ['stockWay']
	},
	// 入库单list 和 退货品项list
	inStoreList: {
		eq: ['enableFlag', 'history'],
		link: ['memo'],
		in: ['organId', 'otherOrganId', 'source', 'billState', 'billType', 'billBizTypeId', 'source'],
		rl: ['detail-memo', 'detail-batchCode'],
		orl: ['userBillCode', 'sysBillCode'],
		range: ['businessDate'],
		rangeIn: ['detail-itemId', 'detail-outHouseId', 'detail-inHouseId']
	},
	// 出库单list
	outStoreList: {
		eq: ['enableFlag', 'history'],
		link: ['memo'],
		in: ['organId', 'otherOrganId', 'source', 'billState', 'billType', 'billBizTypeId', 'source'],
		rl: ['detail-memo'],
		orl: ['userBillCode', 'sysBillCode'],
		range: ['businessDate'],
		rangeIn: ['detail-itemId', 'detail-outHouseId', 'detail-inHouseId']
	},
	// 调拨单list
	moveList: {
		eq: ['history'],
		range: ['businessDate'],
		link: ['memo'],
		orl: ['userBillCode', 'sysBillCode'],
		in: ['organId', 'otherOrganId', 'billState', 'moveState', 'billType', 'billBizTypeId'],
		rangeIn: ['detail-itemId', 'detail-inHouseId', 'detail-outHouseId'],
		rl: ['detail-memo']
	},
	// 盘点分类list
	takeStockClassList: {
		eq: ['enableFlag'],
		fuzzy: [{
			id: 'classKey',
			rule: 'name-code-pinYin'
		}],
		link: ['memo'],
		in: ['house']
	},
	// 盘点单list
	takeStockList: {
		eq: ['history'],
		range: ['businessDate'],
		orl: ['userBillCode', 'sysBillCode'],
		link: ['memo'],
		in: ['billState', 'billType', 'billBizTypeId', 'organId', 'houseId'],
		rangeIn: ['detail-itemId', 'detail-modifyMan'],
		rl: ['detail-memo']
	},
	// 采购发票list
	purchaseInvoiceList: {
		range: ['invoicingDate'],
		link: ['invoicingCode', 'memo'],
		in: ['state', 'salesOrganId', 'purchaseOrganId', 'invoicingTypeId']
	},
	// 发票类型list
	invoiceTypeList: {
		eq: ['enableFlag', 'type'],
		fuzzy: [{
			id: 'invoiceKey',
			rule: 'name-pinYin'
		}]
	},
	// 销售区域list
	salesAreaList: {
		eq: ['enableFlag'],
		fuzzy: [{
			id: 'salesAreaKey',
			rule: 'name-code-pinYin'
		}],
		custom: ['treeLV', 'organ']
	},
	// 理论耗用单list
	theoryCostList: {
		eq: ['enableFlag'],
		link: ['memo'],
		in: ['organId', 'billState', 'billType', 'billBizTypeId'],
		rl: ['detail-memo'],
		orl: ['userBillCode', 'sysBillCode'],
		range: ['businessDate'],
		rangeIn: ['detail-itemId', 'detail-outHouseId']
	},
	// 菜品营业单list
	foodBusinessList: {
		eq: ['enableFlag'],
		link: ['memo'],
		in: ['organId', 'salesRegionId', 'billState', 'billType', 'billBizTypeId', 'offsetState'],
		rl: ['detail-memo'],
		orl: ['userBillCode', 'sysBillCode'],
		range: ['businessDate'],
		rangeIn: ['detail-itemId', 'detail-outHouseId']
	},
	// 商品管理list
	goodsList: {
		eq: ['enable_flag', 'channel_type'],
		link: ['name_code'],
		range: ['create_date']
	},
	// 关联品项档案list
	relateItemList: {
		orl: ['item.name', 'item.code']
	},
	// 营业数据查询
	businessDataSearchList: {
		in: ['business.syncFlag', 'business.organId'],
		range: ['business.createDate']
	}
}
