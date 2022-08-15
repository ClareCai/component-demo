import { post, get, put } from '@/js/api/dataSource'
export default {
	// 营业数据查询
	foodBussiness: {
		// {{{ 主列表筛选条件
		getPage (params) {
			return post({ url: '/bill/dish_business/v1/page', data: params })
		},
		// 营业机构tab
		getOrganSelect () {
			const params = { organTypeList: [1, 2] }
			return post({ url: '/archive/organ/v1/all/simple/tab', data: params })
		},
		// 单据类型
		getBillType () {
			return get({ url: '/bill/dish_business/v1/types' })
		},
		// 业务类型
		getBillBizTypeSelect () {
			return post({ url: '/archive/bill/bill_biz_type/v1/bill_type/300', loading: false })
		},
		// 销售区域
		getSalesRegionList () {
			return post({ url: '/archive/sales_region/v1/all/simple/tab', loading: false })
		},
		// 菜品
		getItemSelect () {
			return get({ url: '/archive/item/v1/list' })
		},
		// }}}
		// {{{ 主表操作
		getBill (id) {
			return get({ url: `bill/dish_business/v1/${id}` })
		},
		// 提交
		submit (id) {
			return put({ url: `/bill/dish_business/v1/${id}/submit`, autoSuccessMsg: true })
		},
		// 批量提交
		submitMulity (params) {
			return put({ url: '/bill/dish_business/v1/submit', data: params, autoSuccessMsg: true })
		},
		// 退回
		back (id) {
			return put({ url: `/bill/dish_business/v1/${id}/back`, autoSuccessMsg: true })
		},
		// 批量退回
		backMulity (params) {
			return put({ url: '/bill/dish_business/v1/back', data: params, autoSuccessMsg: true })
		},
		// 审核
		check (id) {
			return put({ url: `/bill/dish_business/v1/${id}/check`, autoSuccessMsg: true })
		},
		// 批量审核
		checkMulity (params) {
			return put({ url: '/bill/dish_business/v1/check', data: params, autoSuccessMsg: true })
		},
		// 反审
		uncheck (id) {
			return put({ url: `/bill/dish_business/v1/${id}/uncheck`, autoSuccessMsg: true })
		},
		// 批量反审
		uncheckMulity (params) {
			return put({ url: '/bill/dish_business/v1/uncheck', data: params, autoSuccessMsg: true })
		},
		edit (id) {
			return put({ url: `/bill/dish_business/v1/${id}`, autoSuccessMsg: true })
		},
		// 冲减
		offset (id) {
			return put({ url: `/bill/dish_business/v1/${id}/offset`, autoSuccessMsg: true })
		},
		// 批量冲减
		offsetMulity (params) {
			return put({ url: '/bill/dish_business/v1/offset', data: params, autoSuccessMsg: true })
		},
		// 单据业务链
		getBillChain (id) {
			return get({ url: `/bill/dish_business/v1/${id}/chain` })
		},
		// }}}

		// {{{ 明细操作
		updateDetails (id, billId) {
			return put({ url: `/bill/dish_business/${billId}/detail/v1/${id}` })
		},
		setMulity (billId) {
			return put({ url: `/bill/dish_business/${billId}/detail/v1/set`, autoSuccessMsg: true })
		},
		//  }}}
		exportData (id) {
			return get({ url: `/excel/dish_business/v1/${id}/export`, responseType: 'arraybuffer', responseComplete: true })
		}
	}
}
