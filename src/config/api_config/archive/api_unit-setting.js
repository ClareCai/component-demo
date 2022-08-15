import { get, post, put, del } from '@/js/api/dataSource'
export default {
	// 单位使用场景设置接口
	unitSetting: {
		// {{{ 筛选条件获取
		// 查询所有的品项(包括停用的)
		getItemSelectList () {
			return get({ url: '/archive/item/v1/list', loading: false })
		},
		// }}}
		// 分页查询
		getPage () {
			return post({ url: '/archive/item_unit_set/v1/page' })
		},
		// 批量删除
		deleteMulity () {
			return del({ url: '/archive/item_unit_set/v1/delete', autoSuccessMsg: true })
		},
		// 获取品项列表
		getItemList (itemId) {
			return get({ url: `/archive/item_unit_set/v1/item/query/${itemId}` })
		},
		// 新增单位使用场景设置
		add () {
			return post({ url: '/archive/item_unit_set/v1', autoSuccessMsg: true })
		},
		// 查询单位使用场景设置详情
		getDetails (itemId, billClass) {
			return get({ url: `/archive/item_unit_set/v1/${itemId}/${billClass}` })
		},
		// 修改单位使用场景设置详情
		saveDetails () {
			return put({ url: '/archive/item_unit_set/v1', autoSuccessMsg: true })
		},
		// 获取自定义设置
		getCustomSetting (id) {
			return get({ url: `/archive/item_unit_set/v1/custom/${id}` })
		},
		// 保存自定义设置
		saveCustomSetting (id) {
			return post({ url: `/archive/item_unit_set/v1/custom/${id}` })
		},
		// 获取配送中心列表/门店列表
		getOragnList () {
			return post({ url: '/archive/bill/organ/v1/in_store/organ_list' })
		}
	}
}
