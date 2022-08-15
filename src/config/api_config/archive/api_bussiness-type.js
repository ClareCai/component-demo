import { get, post, put, del } from '@/js/api/dataSource'
export default {
	// 业务类型接口
	bussinessType: {
		// 分页查询
		getPageList () {
			return post({ url: '/archive/bill_biz_type/v1/page' })
		},
		// 新增
		add () {
			return post({ url: '/archive/bill_biz_type/v1/', autoSuccessMsg: true })
		},
		// 修改
		edit (id) {
			return put({ url: `/archive/bill_biz_type/v1/${id}`, autoSuccessMsg: true })
		},
		// 删除
		delete (id) {
			return del({ url: `/archive/finance_sort/v1/${id}`, autoSuccessMsg: true })
		},
		// 获取单据类型树
		getTree () {
			return get({ url: '/archive/bill_type/v1/tree' })
		},
		// 批量停用
		disableMulity () {
			return put({ url: '/archive/bill_biz_type/v1/disable', autoSuccessMsg: true })
		},
		// 批量启用
		enabelMulity () {
			return put({ url: '/archive/bill_biz_type/v1/enable', autoSuccessMsg: true })
		},
		// 批量删除
		deleteMulity () {
			return put({ url: '/archive/bill_biz_type/v1/delete', autoSuccessMsg: true })
		},
		// 获取单据类型
		getBillTypeList () {
			return get({ url: '/archive/bill_type/v1/list' })
		}
	}
}
