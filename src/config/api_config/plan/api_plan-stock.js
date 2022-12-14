import { get, post, put, del, file } from '@/js/api/dataSource'
export default {
	// 订货方案
	planStock: {
		// 新增接口
		add () {
			return post({ url: '/plan/stock/v1', autoSuccessMsg: true })
		},
		// 修改接口
		save (id) {
			return put({ url: `/plan/stock/v1/${id}`, autoSuccessMsg: true })
		},
		// 查询接口
		get (id) {
			return get({ url: `/plan/stock/v1/${id}` })
		},
		// 分页查询
		getPage () {
			return post({ url: '/plan/stock/v1/page' })
		},
		getBuyerTree () {
			return get({ url: '/plan/stock/v1/buyer/tree' })
		},
		// 筛选条件--获取机构tab列表
		getOrganSelectTab () {
			const params = { organTypeList: ['1', '2', '5', '6'] }
			return post({ url: '/archive/organ/v1/all/simple/tab', data: params })
		},
		// 筛选条件--获取品项列表
		getItemSelect () {
			return get({ url: '/archive/item/v1/list' })
		},
		// 批量启用
		enabelMulity () {
			return put({ url: '/plan/stock/v1/enable', autoSuccessMsg: true })
		},
		// 批量停用
		disableMulity () {
			return put({ url: '/plan/stock/v1/disable', autoSuccessMsg: true })
		},
		// 批量审核
		checkMulity () {
			return put({ url: '/plan/stock/v1/check', autoSuccessMsg: true })
		},
		// 批量反审
		uncheckMulity () {
			return put({ url: '/plan/stock/v1/uncheck', autoSuccessMsg: true })
		},
		// 批量删除
		deleteMulity () {
			return put({ url: '/plan/stock/v1/delete', autoSuccessMsg: true })
		},
		// 删除单据接口
		delBill (id) {
			return del({ url: `/plan/stock/v1/${id}`, loading: false, autoSuccessMsg: true })
		},
		// 静默删除方案
		silentDelPlan (id) {
			return del({ url: `/plan/stock/v1/${id}/silent` })
		},
		// 明细
		// 查询明细
		getDetails (billId) {
			return get({
				url: `/plan/stock/v1/${billId}`,
				success: (res) => {
					return res.details || []
				}
			})
		},
		// 新增接口
		addDetails (planId) {
			return post({ url: `/plan/stock_detail/v1/main/${planId}` })
		},
		// 修改一条明细接口
		saveDetails (planId, id) {
			return put({ url: `/plan/stock_detail/v1/main/${planId}/detail/${id}` })
		},
		// 删除明细接口
		delDetail (planId, id) {
			return del({ url: `/plan/stock_detail/v1/main/${planId}/detail/${id}`, autoSuccessMsg: true })
		},
		// 批量删除明细接口
		delDetailMulity (planId) {
			return put({ url: `/plan/stock_detail/v1/main/${planId}/delete`, autoSuccessMsg: true })
		},
		// 批量修改订货方案明细
		editDetailsMulity (planId) {
			return put({ url: `/plan/stock_detail/v1/main/${planId}/modify`, autoSuccessMsg: true })
		},
		// 批量新增
		addDetailsMulity (id) {
			return post({ url: `/plan/stock_detail/v1/main/${id}/add`, autoSuccessMsg: true })
		},
		// 批量设置明细
		setDetailMulity (planId, type) {
			return put({ url: `/plan/stock_detail/v1/main/${planId}/set?batchSetType=${type}`, autoSuccessMsg: true })
		},
		// 查询已经启用的机构和传入的id列表信息(卖方)
		getSellerList () {
			return post({ url: '/archive/plan/price/v1/seller/query?tab_flag=false' })
		},
		getSellerTabList () {
			return post({ url: '/archive/plan/price/v1/seller/query?tab_flag=true' })
		},
		// 查询已经启用的机构和传入的id列表信息(买方)
		getBuyerList () {
			return post({ url: '/archive/plan/price/v1/buyer/query?tab_flag=false' })
		},
		getBuyerTabList () {
			return post({ url: '/archive/plan/price/v1/buyer/query?tab_flag=true' })
		},
		// 查询已经启用的品项和传入的id列表信息
		getItemList () {
			return post({ url: '/archive/plan/price/v1/item/query', data: [] })
		},
		// {{{防错校验
		// 审核前的防错校验接口
		checkMistake (planId) {
			return post({ url: `plan/stock/v1/mistake_proofing/${planId}` })
		},
		// }}}
		// 导出空白模板
		exportModel (planId) {
			return get({ url: `/excel/stock_plan/v1/export/model/${planId}`, responseType: 'arraybuffer', responseComplete: true })
		},
		// 按模板导出数据
		exportData (planId) {
			return get({ url: `/excel/stock_plan/v1/export/${planId}`, responseType: 'arraybuffer', responseComplete: true })
		},
		// 根据模板导入Excel数据
		importData (planId) {
			return file({ url: `/excel/stock_plan/v1/import/${planId}`, responseType: 'arraybuffer', responseComplete: true, autoSuccessMsg: true })
		}
	}
}
