// 项目系统参数解析规则
export default {
	// {{{ 基础参数
	// 基础核算，核算方式
	JCHS_HSFS (value) {
		return value === 'HSFS_XJXC'
	},
	// 系统规范, 是否填充零
	XTGF_ZERO_FILL (value) {
		return value === 'XTGF_ZERO_FILL_TRUE'
	},
	// 是否允许负库存
	KCGL_FKC (value) {
		return value === 'FKC_TRUE'
	},
	// }}}
	// {{{ 入库单
	// 入库单，明细显示顺序
	SJXZL_INSTORE_ITEM_ORDER (value) {
		return value === 'INSTORE_ITEM_ORDER_BY_SORTNUM' ? { sortNum: 'asc' } : { 'item.code': 'asc' }
	},
	// 入库单，待审核单据中单价、金额可编辑
	SJXZL_INSTORE_MONEY_AUTH (value) {
		return value === 'INSTORE_MONEY_AUTH_YES'
	},
	// 入库单，- 入库数量允许大于订单数量
	IN_AMOUNT_GREATER_ORDER_AMOUNT (value) {
		return value === 'IN_GREATER_ORDER_TRUE'
	},
	// }}}
	// {{{ 出库单
	// 出库单，明细显示顺序
	SJXZL_OUTSTORE_ITEM_ORDER (value) {
		return value === 'OUTSTORE_ITEM_ORDER_BY_SORTNUM' ? { sortNum: 'asc' } : { 'item.code': 'asc' }
	},
	// 出库单，待审核单据中单价、金额可编辑
	SJXZL_OUTSTORE_MONEY_AUTH (value) {
		return value === 'OUTSTORE_MONEY_AUTH_YES'
	},
	// 出库单，- 出库数量允许大于订单数量
	OUT_AMOUNT_GREATER_ORDER_AMOUNT (value) {
		return value === 'OUT_GREATER_ORDER_TRUE'
	},
	// }}}
	// {{{ 调拨单
	// 调拨单，明细显示顺序
	SJXZL_MOVESTORE_ITEM_ORDER (value) {
		return value === 'MOVESTORE_ITEM_ORDER_BY_SORTNUM' ? { sortNum: 'asc' } : { 'item.code': 'asc' }
	},
	// }}}
	// {{{ 盘点单
	// 盘点单，盘点时间取值(是否取当前系统时间)
	CHECK_DATE (value) {
		return value === 'SYSTEM_TIME'
	},
	// 盘点单，明细显示顺序
	SJXZL_CHECKSTORE_ITEM_ORDER (value) {
		return value === 'CHECKSTORE_ITEM_ORDER_BY_SORTNUM' ? { sortNum: 'asc' } : { 'item.code': 'asc' }
	},
	// }}}
	// {{{ 采购计划单
	// 采购计划单，期望到货时间(小时)
	CXGL_CGJHD_SJQZL_EXPECTTIME (value) {
		return value
	},
	// 采购计划单，明细显示顺序
	SJXZL_STOCKPLAN_ITEM_ORDER (value) {
		return value === 'STOCKPLAN_ITEM_ORDER_BY_SORTNUM' ? { sortNum: 'asc' } : { 'item.code': 'asc' }
	},
	// }}}
	// {{{ 采购订单
	// 采购订单，期望到货时间(小时)
	CXGL_CGDD_SJQZL_EXPECTTIME (value) {
		return value
	},
	// 采购订单，明细显示顺序
	SJXZL_STOCKSTORE_ITEM_ORDER (value) {
		return value === 'STOCKSTORE_ITEM_ORDER_BY_SORTNUM' ? { sortNum: 'asc' } : { 'item.code': 'asc' }
	},
	// }}}
	// {{{ 销售订单
	// 销售订单，期望到货时间(小时)
	CXGL_XSDD_SJQZL_EXPECTTIME (value) {
		return value
	},
	// 销售订单，明细显示顺序
	SJXZL_SALESTORE_ITEM_ORDER (value) {
		return value === 'SALESTORE_ITEM_ORDER_BY_SORTNUM' ? { sortNum: 'asc' } : { 'item.code': 'asc' }
	}
	// }}}
}
