import { get, post, put, del } from '@/js/api/dataSource'
export default {
	// 品项接口
	item: {
		// {{{ 筛选条件获取
		// 查询所有的品项(包括停用的)
		getItemSelectList () {
			return get({ url: '/archive/item/v1/list', loading: false })
		},
		// }}}
		// 新增品项
		add () {
			return post({ url: '/archive/item/v1', autoSuccessMsg: true })
		},
		// 删除品项
		delete (id) {
			return del({ url: `/archive/item/v1/${id}`, autoSuccessMsg: true })
		},
		// 删除品项(回收站)
		recyclingDelete (id) {
			return del({ url: `/archive/item/v1/${id}/remove`, autoSuccessMsg: true })
		},
		// 批量删除
		deleteMulity () {
			return put({ url: '/archive/item/v1/delete', autoSuccessMsg: true })
		},
		// 批量删除品项(回收站)
		recyclingDeleteMulity () {
			return put({ url: '/archive/item/v1/remove', autoSuccessMsg: true })
		},
		// 修改品项详情
		saveDetails (id) {
			return put({ url: `/archive/item/v1/${id}`, autoSuccessMsg: true })
		},
		// 查询品项详情
		getDetails (id) {
			return get({ url: `/archive/item/v1/${id}` })
		},
		// 查询品项详情(回收站)
		getDetailsRecycling (id) {
			return get({ url: `/archive/item/v1/recycle/${id}` })
		},
		// 分页查询
		getItemList () {
			return post({ url: '/archive/item/v1/page' })
		},
		// 分页查询(回收站)
		getItemListRecycling () {
			return post({ url: '/archive/item/v1/page', query: { del_flag: true } })
		},
		// 批量启用
		enabelMulity () {
			return put({ url: '/archive/item/v1/enable', autoSuccessMsg: true })
		},
		// 批量停用
		disableMulity () {
			return put({ url: '/archive/item/v1/disable', autoSuccessMsg: true })
		},
		// 恢复品项(回收站)
		recover (id) {
			return put({ url: `/archive/item/v1/${id}/restore`, autoSuccessMsg: true })
		},
		// 批量恢复品项(回收站)
		recoverMulity () {
			return put({ url: '/archive/item/v1/restore', autoSuccessMsg: true })
		},
		// excel 导出
		exportData () {
			return get({ url: '/excel/item/v1/model/export', responseType: 'arraybuffer', responseComplete: true })
		},
		// 保存品项与仓库关联关系
		saveConnectStore (id) {
			return put({ url: `/archive/item/v1/itemhouse/${id}`, autoSuccessMsg: true })
		},
		// 根据品项查询关联仓库
		getConnectStore (id) {
			return get({ url: `/archive/item/v1/itemhouse/${id}` })
		},
		// 根据品项复制关联仓库关系到其他品项接口
		copyConnectWithItem (id) {
			return put({ url: `/archive/item/v1/itemhouse/${id}/copy`, autoSuccessMsg: true })
		},
		// 查询除了传入id的所有已经有关联关系的品项
		getConnectExcludeId (id) {
			return get({ url: `/archive/item/v1/itemhouse/except/${id}/all` })
		},
		// 查询除了传入id的所有的品项
		getItemExcludeId (id) {
			return get({ url: `/archive/item/v1/except/${id}/all` })
		},
		// 复制关联关系—品项到品项
		copyConnectItem2Item (sourceItemId, targetItemId) {
			return put({ url: `/archive/item/v1/itemhouse/${sourceItemId}/copy/${targetItemId}`, autoSuccessMsg: true })
		},
		// 判断单位是否已被使用
		getItemUsingState (itemId, unitId) {
			return get({ url: `/archive/item_unit/v1/item/${itemId}/unit/${unitId}/using_state` })
		},
		// 获取品项默认编号
		getItemCode () {
			return post({ url: '/archive/item/v1/code' })
		},
		// 打印条码
		printBarCode () {
			return get({ url: 'http://localhost:3100/barCodePrint' })
		},
		// 品项批量设置
		settingMulity () {
			return put({ url: 'archive/item/v1/set' })
		},
		// 判断单位是否已被使用（批量修改单位时校验）
		settingUnitCheck (itemId) {
			return put({ url: `/archive/item_unit/v1/item/${itemId}/unit/using_state`, autoErrorMsg: false })
		}
	}
}
