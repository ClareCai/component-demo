import { get, post, put, del, file } from '@/js/api/dataSource'
import { EMPTY_TAB_DATA } from '../common'
export default {
	// 采购订单
	stockOrder: {
		// {{{ 主列表筛选条件
		// 主列表筛选条件：买方机构下拉列表(tab分页数据结构)
		getOrganSelect () {
			const params = { organTypeList: ['2', '1', '5', '6'] }
			return post({ url: '/archive/organ/v1/all/simple/tab', data: params })
		},
		// 主列表筛选条件：卖方机构下拉列表(tab分页数据结构)
		getOtherOrganSelect () {
			const params = { organTypeList: ['2', '1', '5', '6'] }
			return post({
				url: '/archive/organ/v1/all/simple/tab',
				data: params,
				success: res => {
					res.push(EMPTY_TAB_DATA)
					return res
				}
			})
		},
		// 主列表筛选条件：查询品项下拉列表
		getItemSelect () {
			return get({ url: '/archive/item/v1/list' })
		},
		// 主列表筛选条件：查询采购方案下拉列表
		getPurchasePlanSelect () {
			return get({ url: '/plan/stock/v1/list' })
		},
		// 分页查询-买方仓库下拉列表(tab分页数据结构)
		getBuyerHouseSelectTab () {
			const params = {
				organTypeList: [2, 1, 5, 6]
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
		// }}}
		// 获取业务类型列表
		getBusinessList () {
			return post({ url: '/archive/bill/bill_biz_type/v1/bill_type/201' })
		},
		// 获取单据类型列表
		getBillTypeList () {
			return get({ url: '/bill/stock_order/v1/types' })
		},
		// 获取卖方机构列表
		getSellerList () {
			return post({ url: '/archive/bill/employee_organ/v1/seller_organ_list' })
		},
		getSellerListNew () {
			return post({ url: '/archive/bill/employee_organ/v1/seller_organ_list_new' })
		},
		// 获取买方机构列表
		getBuyerList () {
			return post({ url: '/archive/bill/employee_organ/v1/buyer_organ_list' })
		},
		getBuyerListNew () {
			return post({ url: '/archive/bill/employee_organ/v1/buyer_organ_list_new' })
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
			return post({ url: '/bill/stock_order/v1/itemList' })
		},
		// 根据品项获取单位列表
		getItemUnitList (billId, itemId) {
			return post({ url: `/bill/stock_order/v1/${billId}/unitList/${itemId}` })
		},
		// 分页查询
		getPage () {
			return post({ url: '/bill/stock_order/v1/page', query: { del_flag: false } })
		},
		getPageRecycling () {
			return post({ url: '/bill/stock_order/v1/page', query: { del_flag: true } })
		},
		// 获取当前登录人及所属机构及机构的默认收货地址
		getCurrentUser () {
			return get({ url: '/archive/employee/v1/currentUser' })
		},
		// 新增接口
		add () {
			return post({ url: '/bill/stock_order/v1', autoSuccessMsg: true })
		},
		// 保存接口
		save (billId) {
			return put({ url: `/bill/stock_order/v1/${billId}`, autoSuccessMsg: true })
		},
		// 批量删除单据
		deleteMulity () {
			return put({ url: '/bill/stock_order/v1/batch/delete', autoSuccessMsg: true })
		},
		// 删除接口
		del (billId) {
			return del({ url: `/bill/stock_order/v1/${billId}`, autoSuccessMsg: true })
		},
		// 根据单据唯一标识查询单据及其明细
		get (id) {
			return get({ url: `/bill/stock_order/v1/bill/${id}` })
		},
		// 提交
		submit (billId) {
			return put({ url: `/bill/stock_order/v1/submit/${billId}`, autoSuccessMsg: true })
		},
		// 批量提交
		submitMulity () {
			return put({ url: '/bill/stock_order/v1/submit/batch', autoSuccessMsg: true })
		},
		// 退回
		return (billId) {
			return put({ url: `/bill/stock_order/v1/send_back/${billId}`, autoSuccessMsg: true })
		},
		// 批量退回
		returnMulity () {
			return put({ url: '/bill/stock_order/v1/send_back/batch', autoSuccessMsg: true })
		},
		// 审核
		check (billId) {
			return put({ url: `/bill/stock_order/v1/check/${billId}`, autoSuccessMsg: true })
		},
		// 批量审核
		checkMulity () {
			return put({ url: '/bill/stock_order/v1/check/batch', autoSuccessMsg: true })
		},
		// 反审
		uncheck (billId) {
			return put({ url: `/bill/stock_order/v1/anti_check/${billId}`, autoSuccessMsg: true })
		},
		// 批量反审
		uncheckMulity () {
			return put({ url: '/bill/stock_order/v1/anti_check/batch', autoSuccessMsg: true })
		},
		// 复审
		recheck (billId) {
			return put({ url: `/bill/stock_order/v1/recheck/${billId}`, autoSuccessMsg: true })
		},
		// 批量复审
		recheckMulity () {
			return put({ url: '/bill/stock_order/v1/batch/recheck', autoSuccessMsg: true })
		},
		// 取消复审
		unrecheck (billId) {
			return put({ url: `/bill/stock_order/v1/anti_recheck/${billId}`, autoSuccessMsg: true })
		},
		// 批量取消复审
		unrecheckMulity () {
			return put({ url: '/bill/stock_order/v1/batch/anti_recheck', autoSuccessMsg: true })
		},
		// 批量恢复
		recoverMulity () {
			return put({ url: '/bill/stock_order/v1/recover/batch', autoSuccessMsg: true })
		},
		// 回收站删除
		recyclingDelete (billId) {
			return put({ url: `/bill/stock_order/v1/remove/${billId}`, autoErrorMsg: true, autoSuccessMsg: true })
		},
		// 回收站批量删除
		recyclingDeleteMulity () {
			return put({ url: '/bill/stock_order/v1/remove_batch', autoErrorMsg: true, autoSuccessMsg: true })
		},
		// 删除空单据接口
		delEmptyBill (billId) {
			return del({ url: `/bill/stock_order/v1/silent/${billId}`, loading: false, autoErrorMsg: false })
		},
		// 明细
		// 查询明细
		getDetails (id) {
			return get({
				url: `/bill/stock_order/v1/bill/${id}`,
				success: (res) => {
					return res.details || []
				}
			})
		},
		// 多仓切换单仓,明细仓库查询
		checkDetailsHouse (billId) {
			return get({ url: `/bill/stock_order/v1/${billId}/identical/house` })
		},
		// 新增单条明细
		addDetails () {
			return post({ url: '/bill/stock_order/v1/detail' })
		},
		// 保存单条明细
		saveDetails (detailId) {
			return put({ url: `/bill/stock_order/v1/detail/${detailId}` })
		},
		// 批量新增明细
		addDetailsMulity () {
			return post({ url: '/bill/stock_order/v1/detail/batch/add', autoSuccessMsg: true })
		},
		// 删除单条明细
		delDetail (detailId) {
			return del({ url: `/bill/stock_order/v1/detail/${detailId}`, autoSuccessMsg: true })
		},
		// 批量删除明细
		delDetailMulity () {
			return put({ url: '/bill/stock_order/v1/detail/batch/delete', autoSuccessMsg: true })
		},
		// 批量设置明细的税率
		settingMulityTax () {
			return put({ url: '/bill/stock_order/v1/batch/taxRate', autoSuccessMsg: true })
		},
		// 批量设置明细期望到货时间
		settingMulityExpectArrivalDate () {
			return put({ url: '/bill/stock_order/v1/batch/expectArrivalDate', autoSuccessMsg: true })
		},
		// 批量设置明细备注
		settingMulityMemo () {
			return put({ url: '/bill/stock_order/v1/batch/memo', autoSuccessMsg: true })
		},
		// 根据单据id清空单据明细
		clearDetails (billId) {
			return put({ url: `/bill/stock_order/v1/clear_details/${billId}`, autoSuccessMsg: true })
		},
		// 获取采购方案列表
		getPlanList () {
			return post({ url: '/plan/stock/v1/stock_plan_list', loading: false })
		},
		// 查询品项价格
		getItemPirce () {
			return post({ url: '/bill/stock_order/v1/price_plan/item_price' })
		},
		// 导出空白模板
		exportModel (billId) {
			return get({ url: `/excel/stock_order/v1/${billId}/model/export`, responseType: 'arraybuffer', responseComplete: true })
		},
		// 按模板导出数据
		exportData (billId) {
			return get({ url: `/excel/stock_order/v1/${billId}/export`, responseType: 'arraybuffer', responseComplete: true })
		},
		// 根据模板导入Excel数据
		importData (id) {
			return file({ url: `/excel/stock_order/v1/${id}/import/model`, responseType: 'arraybuffer', responseComplete: true, autoSuccessMsg: true })
		},
		// 复制单据
		copyOrder (id, continueFlag) {
			return get({ url: `/bill/stock_order/v1/copyStockOrderBill/${id}/${continueFlag}`, responseComplete: true })
		},
		// 获取单据业务链接口
		getBillChain (id) {
			return get({ url: `/bill/stock_order/v1/${id}/chain` })
		},
		// {{{ 防错校验
		// （必订）获取可选仓库列表
		getMustItemStore () {
			return post({ url: '/bill/stock_order/v1/house' })
		},
		// 提交前的防错校验接口
		checkMistake (billId) {
			return post({ url: `/bill/stock_order/v1/mistake_proofing/${billId}` })
		},
		// 删除重复品项
		delCheckDetailsMulity () {
			return put({ url: '/bill/stock_order/v1/detail/batch/delete' })
		},
		// 批量修改明细(与价格档案保持一致)
		saveDetailsMulity () {
			return put({ url: '/bill/stock_order/v1/detail/batch/mod' })
		},
		// 查询存在价格差异的明细
		getDiff (billId) {
			return post({ url: `/bill/stock_order/v1/mistake_proofing/${billId}`, query: { error_check: false }, data: ['DiffPrice'] })
		},
		// 查询存在单价为0的明细
		getZeroPrice (billId) {
			return post({ url: `/bill/stock_order/v1/mistake_proofing/${billId}`, query: { error_check: false }, data: ['ZeroPrice'] })
		},
		// 查询存在数量为0的明细
		getZeroAmount (billId) {
			return post({ url: `/bill/stock_order/v1/mistake_proofing/${billId}`, query: { error_check: false }, data: ['ZeroAmount'] })
		},
		// 查询仓库未关联品项
		getRel (billId) {
			return post({ url: `/bill/stock_order/v1/mistake_proofing/${billId}`, query: { error_check: false }, data: ['ItemHouse'] })
		}
		// }}}
	}
}
