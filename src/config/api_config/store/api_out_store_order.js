import { get, post, put, del, file } from '@/js/api/dataSource'
import { EMPTY_TAB_DATA } from '../common'
import app from '@/main.js'
const API_MODULE = 'outStore'
export default {
	// 出库单
	outStore: {
		getPage () {
			return post({ url: '/bill/out_store/v1/page' })
		},
		getDelPage () {
			return post({ url: '/bill/out_store/v1/page', query: { del_flag: true } })
		},
		// 分页查询-入库方下拉列表(tab分页数据结构)
		getOrganSelect () {
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
		// 分页查询-出库方下拉列表(tab分页数据结构)
		getOtherOrganSelect () {
			const params = { organTypeList: ['2', '1', '5', '6'] }
			return post({ url: '/archive/organ/v1/all/simple/tab', data: params })
		},
		// 分页查询-获取入库仓库下拉列表(tab分页数据结构)
		getInhouseSelect () {
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
		// 分页查询-获取出库仓库下拉列表(tab分页数据结构)
		getOuthouseSelect () {
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
		getItemSelect () {
			return get({ url: '/archive/item/v1/list' })
		},
		getBillBizTypeSelect () {
			return post({ url: '/archive/bill/bill_biz_type/v1/bill_type/101', loading: false })
		},
		getInStoreOrganList () {
			return post({ url: '/archive/bill/organ/v1/in_store/organ_list' })
		},
		getBilltypeSelect () {
			return get({ url: '/bill/out_store/v1/types' })
		},
		// 新增主表
		add () {
			return post({
				url: '/bill/out_store/v1',
				autoSuccessMsg: true,
				success: res => app.vue.$fxCommon.normalizationBillUpdateVersion(API_MODULE, res)
			})
		},
		edit (id) {
			return put({
				url: `/bill/out_store/v1/${id}`,
				autoSuccessMsg: true,
				data: {
					...app.vue.$fxCommon.getBillUpdateVersion(API_MODULE, id),
					...app.vue.$fxCommon.getTenantIdParam()
				},
				success: res => app.vue.$fxCommon.normalizationBillUpdateVersion(API_MODULE, res)
			})
		},
		// 删除单据
		del (id) {
			return put({ url: `/bill/out_store/v1/${id}/delete`, autoSuccessMsg: true })
		},
		// 批量删除单据
		deleteMulity () {
			return put({ url: '/bill/out_store/v1/delete', autoSuccessMsg: true })
		},
		// 获取单据详情
		getBill (id) {
			return get({
				url: `/bill/out_store/v1/${id}`,
				success: res => app.vue.$fxCommon.normalizationBillUpdateVersion(API_MODULE, res)
			})
		},
		// 多仓切换单仓,明细仓库查询
		checkDetailsHouse (billId) {
			return get({ url: `/bill/out_store/${billId}/detail/v1/identical/house` })
		},
		// 提交
		submit (id) {
			return put({ url: `/bill/out_store/v1/${id}/submit`, autoSuccessMsg: true })
		},
		// 批量提交
		submitMulity () {
			return put({ url: '/bill/out_store/v1/submit', autoSuccessMsg: true })
		},
		// 退回
		return (id) {
			return put({
				url: `/bill/out_store/v1/${id}/back`,
				autoSuccessMsg: true,
				success: res => res && app.vue.$fxCommon.normalizationBillUpdateVersion(API_MODULE, res)
			})
		},
		// 批量退回
		returnMulity () {
			return put({ url: '/bill/out_store/v1/back', autoSuccessMsg: true })
		},
		// 审核
		check (id) {
			return put({ url: `/bill/out_store/v1/${id}/check`, autoSuccessMsg: true, autoErrorMsg: false })
		},
		// 批量审核
		checkMulity () {
			return put({ url: '/bill/out_store/v1/check', autoSuccessMsg: true, autoErrorMsg: false })
		},
		// 反审
		uncheck (id) {
			return put({
				url: `/bill/out_store/v1/${id}/uncheck`,
				autoSuccessMsg: true,
				autoErrorMsg: false,
				success: res => app.vue.$fxCommon.normalizationBillUpdateVersion(API_MODULE, res)
			})
		},
		// 批量反审
		uncheckMulity () {
			return put({ url: '/bill/out_store/v1/uncheck', autoSuccessMsg: true, autoErrorMsg: false })
		},
		// 复审
		recheck (id) {
			return put({ url: `/bill/out_store/v1/${id}/recheck`, autoSuccessMsg: true })
		},
		// 批量复审
		recheckMulity () {
			return put({ url: '/bill/out_store/v1/recheck', autoSuccessMsg: true })
		},
		// 取消复审
		unrecheck (id) {
			return put({ url: `/bill/out_store/v1/${id}/un_recheck`, autoSuccessMsg: true })
		},
		// 批量取消复审
		unrecheckMulity () {
			return put({ url: '/bill/out_store/v1/un_recheck', autoSuccessMsg: true })
		},
		// 恢复单据
		restoreMulity () {
			return put({ url: '/bill/out_store/v1/restore', autoSuccessMsg: true })
		},
		// 回收站删除单据
		remove (id) {
			return del({ url: `/bill/out_store/v1/${id}/remove`, autoSuccessMsg: true })
		},
		// 回收站批量删除单据
		removeMulity () {
			return put({ url: '/bill/out_store/v1/remove', autoSuccessMsg: true })
		},
		// 删除空单据
		delEmptyBill (id) {
			return del({ url: `/bill/out_store/v1/${id}/silent`, loading: false })
		},
		// 获取单据业务链接口
		getBillChain (id) {
			return get({ url: `/bill/out_store/v1/${id}/chain` })
		},
		// 明细
		// 查询明细
		getDetails (billId) {
			return get({
				url: `/bill/out_store/v1/${billId}`,
				success: res => {
					const { details } = app.vue.$fxCommon.normalizationBillUpdateVersion(API_MODULE, res)
					return details
				},
				loading: false
			})
		},
		// 新增
		addDetail (billId) {
			return post({
				url: `/bill/out_store/${billId}/detail/v1`,
				data: { ...app.vue.$fxCommon.getBillDetailUpdateVersion(API_MODULE, billId) },
				success: res => app.vue.$fxCommon.normalizationBillDetailUpdateVersion(API_MODULE, res, billId)
			})
		},
		editDetail (billId, id) {
			return put({
				url: `/bill/out_store/${billId}/detail/v1/${id}`,
				data: { ...app.vue.$fxCommon.getBillDetailUpdateVersion(API_MODULE, billId) },
				success: res => app.vue.$fxCommon.normalizationBillDetailUpdateVersion(API_MODULE, res, billId)
			})
		},
		// 查询某机构下的所有仓库简单信息
		getDefaultHouseSelect (organId) {
			return post({ url: `/archive/house/v1/organId/${organId}` })
		},
		// 查询品项列表
		getItemList (billId, houseId, itemId = 0) {
			return get({ url: `/bill/out_store/${billId}/detail/v1/${houseId}/items/${itemId}` })
		},
		// 批量新增查询品项列表
		getItemListMulity (billId, houseId) {
			return get({ url: `/bill/out_store/${billId}/detail/v1/${houseId}/item/unit/list` })
		},
		// 根据品项查询单位列表
		getUnitList (itemId, billId) {
			return post({ url: `/bill/out_store/${billId}/detail/v1/unitList/${itemId}` })
		},
		// 批量新增明细
		addDetailsMulity (billId, data) {
			data = data.map(item => Object.assign({}, app.vue.$fxCommon.getBillDetailUpdateVersion(API_MODULE, billId), item))
			return post({ url: `/bill/out_store/${billId}/detail/v1/add`, data })
		},
		// 删除单条明细
		delDetail (billId, id) {
			return del({ url: `/bill/out_store/${billId}/detail/v1/${id}`, autoSuccessMsg: true })
		},
		// 批量删除明细
		delDetailMulity (billId, loading = true) {
			return put({ url: `/bill/out_store/${billId}/detail/v1/delete`, autoSuccessMsg: true, loading })
		},
		// 批量设置
		setMulity (billId) {
			return put({
				url: `/bill/out_store/${billId}/detail/v1/set`,
				loading: false,
				autoSuccessMsg: true,
				data: {
					...app.vue.$fxCommon.getBillDetailUpdateVersion(API_MODULE, billId)
				}
			})
		},
		// 明细查询价格
		priceList (billId) {
			return post({ url: `/bill/out_store/${billId}/detail/v1/item/price`, loading: false })
		},
		// 明细清空
		clear (billId) {
			return del({ url: `/bill/out_store/${billId}/detail/v1/clear` })
		},
		// 明细查询库存
		stockAmount (billId, organId) {
			return post({ url: `/bill/out_store/${billId}/detail/v1/${organId}/stock/amount`, loading: false })
		},
		// {{{ 防错校验
		// 总体查询
		checkMistake (billId, flag = true) {
			return post({ url: `/bill/out_store/v1/mistake_proofing/${billId}`, query: { error_check: flag } })
		},
		// 单价差异
		getDiffPrice (billId) {
			return post({ url: `/bill/out_store/v1/mistake_proofing/${billId}`, query: { error_check: false }, data: ['DiffPrice'], loading: false })
		},
		// 出库数量为0查询
		getZeroAmount (billId) {
			return post({ url: `/bill/out_store/v1/mistake_proofing/${billId}`, query: { error_check: false }, data: ['ZeroAmount'], loading: false })
		},
		// 出库仓库未关联品项查询
		getRel (billId) {
			return post({ url: `/bill/out_store/v1/mistake_proofing/${billId}`, query: { error_check: false }, data: ['RelAllGoods'], loading: false })
		},
		// 与最新价格一致
		agreement (billId) {
			return put({ url: `/bill/out_store/${billId}/detail/v1/sync_latest_price` })
		},
		// }}}
		// 导出Excel模板
		exportModal (id) {
			return get({ url: `/excel/out_store/v1/${id}/model/export`, responseType: 'arraybuffer', responseComplete: true })
		},
		// 导出Excel数据
		exportData (id) {
			return get({ url: `/excel/out_store/v1/${id}/export`, responseType: 'arraybuffer', responseComplete: true })
		},
		// 根据模板导入Excel数据
		importData (id) {
			return file({ url: `/excel/out_store/v1/${id}/import/model`, responseType: 'arraybuffer', responseComplete: true, autoSuccessMsg: true })
		},
		// 复制单据
		copyOrder (id) {
			return get({ url: `/bill/out_store/v1/copyOutStoreBill/${id}` })
		}
	}
}
