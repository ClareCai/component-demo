import { get, post, put, del, file } from '@/js/api/dataSource'
export default {
	// 采购计划单
	stockPlanOrder: {
		// {{{ 主列表筛选条件
		// 主列表筛选条件：查询买方机构下拉列表(tab分页数据结构)
		getOrganSelectTab () {
			const params = { organTypeList: ['2', '1', '5', '6'] }
			return post({ url: '/archive/organ/v1/all/simple/tab', data: params })
		},
		// 主列表筛选条件：查询买方机构下拉列表
		getOrganSelect () {
			return post({ url: '/archive/organ/v1/simple/all' })
		},
		// 主列表筛选条件：查询买方仓库下拉列表
		getBuyerHouseSelect () {
			const params = {
				organTypeList: [2, 1, 5, 6]
			}
			return post({
				url: '/archive/house/v1/all/simple/tab',
				data: params,
				loading: false,
				success: res => {
					res.forEach(item => {
						if (!item.listData) {
							item.listData = []
						}
					})
					return res
				}
			})
		},
		// 分页查询-买方仓库下拉列表(tab分页数据结构)
		getBuyerHouseSelectTab () {
			const params = {
				organTypeList: ['2', '1', '5', '6']
			}
			return post({
				url: '/archive/house/v1/all/simple/tab',
				data: params,
				success: res => {
					res.forEach(item => {
						if (!item.listData) {
							item.listData = []
						}
					})
					return res
				}
			})
		},
		// 主列表筛选条件：查询品项下拉列表
		getItemSelect () {
			return get({ url: '/archive/item/v1/list' })
		},
		// 主列表筛选条件：查询订货方案下拉列表
		getPurchasePlanSelect () {
			return get({ url: '/plan/stock/v1/list' })
		},
		// 主列表筛选条件：查询单据类型下拉列表
		getStockPlanTypeSelect () {
			return get({ url: '/bill/stock_plans/v1/types' })
		},
		// }}}
		// 获取业务类型列表
		getBusinessList () {
			return post({ url: '/archive/bill/bill_biz_type/v1/bill_type/200' })
		},
		// 获取单据类型列表
		getBillTypeList () {
			return get({ url: '/bill/stock_plans/v1/types' })
		},
		// 获取买方机构列表
		getBuyerListNew () {
			return post({ url: '/archive/bill/employee_organ/v1/buyer_organ_list_new' })
		},
		getBuyerList () {
			return post({ url: '/archive/bill/employee_organ/v1/buyer_organ_list' })
		},
		// 获取经办人接口
		getAgentList () {
			return post({ url: '/archive/bill/employee/v1/operator_list' })
		},
		// 获取买方仓库列表
		getStoreList (organId) {
			return post({ url: `/archive/bill/house/v1/organ/${organId}/houseList` })
		},
		// 获取品项列表
		getItemList () {
			return post({ url: '/bill/stock_plans/v1/itemList' })
		},
		// 根据品项获取单位列表
		getItemUnitList (billId, itemId) {
			return post({ url: `/bill/stock_plans/${billId}/detail/v1/unitList/${itemId}` })
		},
		// 分页查询
		getPage () {
			return post({ url: '/bill/stock_plans/v1/page', query: { del_flag: false } })
		},
		getPageRecycling () {
			return post({ url: '/bill/stock_plans/v1/page', query: { del_flag: true } })
		},
		// 获取当前登录人及所属机构及机构的默认收货地址
		getCurrentUser () {
			return get({ url: '/archive/employee/v1/currentUser' })
		},
		// 新增接口
		add () {
			return post({ url: '/bill/stock_plans/v1', autoSuccessMsg: true })
		},
		// 保存接口
		save (billId) {
			return put({ url: `/bill/stock_plans/v1/${billId}`, autoSuccessMsg: true })
		},
		// 批量删除单据
		deleteMulity () {
			return put({ url: '/bill/stock_plans/v1/delete', autoSuccessMsg: true })
		},
		// 删除接口
		del (billId) {
			return del({ url: `/bill/stock_plans/v1/${billId}/delete`, autoSuccessMsg: true })
		},
		// 根据单据唯一标识查询单据及其明细
		get (id) {
			return get({ url: `/bill/stock_plans/v1/${id}` })
		},
		// 提交
		submit (billId) {
			return put({ url: `/bill/stock_plans/v1/${billId}/submit`, autoSuccessMsg: true })
		},
		// 批量提交
		submitMulity () {
			return put({ url: '/bill/stock_plans/v1/submit', autoSuccessMsg: true })
		},
		// 退回
		return (billId) {
			return put({ url: `/bill/stock_plans/v1/back/${billId}`, autoSuccessMsg: true })
		},
		// 批量退回
		returnMulity () {
			return put({ url: '/bill/stock_plans/v1/back', autoSuccessMsg: true })
		},
		// 审核
		check (billId) {
			return post({ url: `/bill/stock_plans/v1/${billId}/check`, autoSuccessMsg: true })
		},
		// 批量审核
		checkMulity () {
			return put({ url: '/bill/stock_plans/v1/check', autoSuccessMsg: true })
		},
		// 反审
		uncheck (billId) {
			return put({ url: `/bill/stock_plans/v1/uncheck/${billId}`, autoSuccessMsg: true })
		},
		// 批量反审
		uncheckMulity () {
			return put({ url: '/bill/stock_plans/v1/uncheck', autoSuccessMsg: true })
		},
		// 复审
		recheck (billId) {
			return put({ url: `/bill/stock_plans/v1/recheck/${billId}`, autoSuccessMsg: true })
		},
		// 批量复审
		recheckMulity () {
			return put({ url: '/bill/stock_plans/v1/recheck', autoSuccessMsg: true })
		},
		// 取消复审
		unrecheck (billId) {
			return put({ url: `/bill/stock_plans/v1/${billId}/un_recheck`, autoSuccessMsg: true })
		},
		// 批量取消复审
		unrecheckMulity () {
			return put({ url: '/bill/stock_plans/v1/un_recheck', autoSuccessMsg: true })
		},
		// 批量恢复
		recoverMulity () {
			return put({ url: '/bill/stock_plans/v1/restore', autoSuccessMsg: true })
		},
		// 回收站删除
		recyclingDelete (billId) {
			return del({ url: `/bill/stock_plans/v1/recycle/${billId}/delete`, autoErrorMsg: true, autoSuccessMsg: true })
		},
		// 回收站批量删除
		recyclingDeleteMulity () {
			return put({ url: '/bill/stock_plans/v1/batch/remove', autoErrorMsg: true, autoSuccessMsg: true })
		},
		// 删除空单据接口
		delEmptyBill (billId) {
			return del({ url: `/bill/stock_plans/v1/empty/${billId}`, loading: false, autoErrorMsg: false })
		},
		// 明细
		// 查询明细
		getDetails (id) {
			return get({
				url: `/bill/stock_plans/v1/${id}`,
				success: (res) => {
					return res.details || []
				}
			})
		},
		// 多仓切换单仓,明细仓库查询
		checkDetailsHouse (billId) {
			return get({ url: `/bill/stock_plans/${billId}/detail/v1/identical/house` })
		},
		// 新增单条明细
		addDetails (billId) {
			return post({ url: `/bill/stock_plans/${billId}/detail/v1` })
		},
		// 保存单条明细
		saveDetails (billId) {
			return put({ url: `/bill/stock_plans/${billId}/detail/v1` })
		},
		// 批量新增明细
		addDetailsMulity (billId) {
			return post({ url: `/bill/stock_plans/${billId}/detail/v1/batch/add`, autoSuccessMsg: true })
		},
		// 批量删除明细
		delDetailMulity (billId) {
			return put({ url: `/bill/stock_plans/${billId}/detail/v1/batch/del`, autoSuccessMsg: true })
		},
		// 批量设置明细备注/期望到货时间
		settingMulity (billId) {
			return put({ url: `/bill/stock_plans/${billId}/detail/v1/batch/set`, autoSuccessMsg: true })
		},
		// 根据单据id清空单据明细
		clearDetails (billId) {
			return put({ url: `/bill/stock_plans/${billId}/detail/v1/clear`, autoSuccessMsg: true })
		},
		// 获取采购方案列表
		getPlanList () {
			return post({ url: '/plan/stock/v1/stock_plan_list', loading: false })
		},
		// 明细查询库存
		stockAmount (billId, organId) {
			return post({ url: `/bill/stock_plans/${billId}/detail/v1/${organId}/stock/amount`, loading: false })
		},
		// 导出空白模板
		exportModel (billId) {
			return get({ url: `/excel/stock_plan_bill/v1/${billId}/model/export`, responseType: 'arraybuffer', responseComplete: true })
		},
		// 按模板导出数据
		exportData (billId) {
			return get({ url: `/excel/stock_plan_bill/v1/${billId}/export`, responseType: 'arraybuffer', responseComplete: true })
		},
		// 根据模板导入Excel数据
		importData (id) {
			return file({ url: `/excel/stock_plan_bill/v1/${id}/import/model`, responseType: 'arraybuffer', responseComplete: true, autoSuccessMsg: true })
		},
		// 复制单据
		copyOrder (id, continueFlag) {
			return get({ url: `/bill/stock_plans/v1/copy/${id}/${continueFlag}`, responseComplete: true })
		},
		// 分派单据前进行可否分派的校验
		assignCheck (id) {
			return get({ url: `/bill/stock_plan_assign/v1/assign/valid/${id}` })
		},
		// 获取单据业务链接口
		getBillChain (id) {
			return get({ url: `/bill/stock_plans/v1/${id}/chain` })
		},
		// 防错校验
		// （必订）获取可选仓库列表
		getMustItemStore () {
			return post({ url: '/bill/stock_plans/v1/house' })
		},
		// 提交前的防错校验接口
		checkMistake (billId) {
			return post({ url: `/bill/stock_plans/v1/mistake_proofing/${billId}` })
		},
		// 删除重复品项
		delCheckDetailsMulity (billId) {
			return put({ url: `/bill/stock_plans/${billId}/detail/v1/batch/del` })
		},
		// 查询存在数量为0的明细
		getZeroAmount (billId) {
			return post({ url: `/bill/stock_plans/v1/mistake_proofing/${billId}`, query: { error_check: false }, data: ['ZeroAmount'], loading: false })
		},
		// 查询未关联品项
		getRel (billId) {
			return post({ url: `/bill/stock_plans/v1/mistake_proofing/${billId}`, query: { error_check: false }, data: ['ItemHouseRelation'], loading: false })
		},
		// 分派相关
		// 步骤一列表分页查询
		getAssignPage () {
			return post({ url: '/bill/stock_plan_assign/v1/page' })
		},
		// 获取卖方机构列表
		getSellerList () {
			return get({ url: '/archive/bill/employee_organ/v1/sales_order/seller_organ_list' })
		},
		getSellerListNew () {
			return post({ url: '/archive/bill/employee_organ/v1/seller_organ_list_new' })
		},
		// 获取买方机构列表
		// getBuyerList () {
		// 	return get({ url: '/archive/bill/employee_organ/v1/sales_order/buyer_organ_list' })
		// },
		// 步骤一
		// 整单放弃
		giveupBills () {
			return put({ url: '/bill/stock_plan_assign/v1/give_up', autoSuccessMsg: true })
		},
		// 获取筛选条件中订货时间的默认值
		getAccountingPeriod () {
			return get({ url: '/archive/accounting_period/v1/managed_organ/begin_end' })
		},
		// 解除锁定
		unlock () {
			return put({ url: '/bill/stock_plan_assign/v1/page/unlock', autoSuccessMsg: true })
		},
		// 查看放弃
		giveUpList () {
			return post({ url: '/bill/stock_plan_assign/v1/page/give_up' })
		},
		// 步骤二
		// 获取详情
		getLockSummary () {
			return post({ url: '/bill/stock_plan_assign/v1/page/lock_summary', autoSuccessMsg: true })
		},
		// 单品放弃
		detailsGiveUp () {
			return put({ url: '/bill/stock_plan_assign/v1/details/give_up', autoSuccessMsg: true })
		},
		// 根据买方机构ID和品项ID列表查询品项的可入库仓库列表
		houseIdList () {
			return post({ url: '/bill/in_assign/v1/houseList' })
		},
		// 根据采购方案查询品项的可入库仓库列表
		organListByPlan (planId) {
			return post({ url: `/bill/stock_plan_assign/v1/stock_plan/organ/${planId}` })
		},
		organListAll () {
			const params = { ids: [], names: ['Shop', 'Center', 'Supplier', 'Customer'] }
			return post({ url: '/archive/bill/organ/v1/in_store/organ_list', data: params })
		},
		// 进行分派
		assign () {
			return post({ url: '/bill/stock_plan_assign/v1/assign', autoSuccessMsg: true })
		},
		// 刷新帐存
		refreshAmount () {
			return post({ url: '/bill/stock_plan_assign/v1/refresh/stock/amount', autoSuccessMsg: true })
		},
		// 步骤三
		// 分页查询
		getAssigned () {
			return post({ url: '/bill/stock_plan_assign/v1/page/bill/list' })
		}
	}
}
