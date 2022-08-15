import { get, post, put, del } from '@/js/api/dataSource'
export default {
	// BOM设置
	bom: {
		// 根据bom类别获取品项类别树
		getTypeTree (type) {
			return get({ url: `/archive/${type}/v1/itemType/tree` })
		},
		// 根据品项类别和bom类别获取品项及bom树
		getBomTree (type, id) {
			return get({ url: `/archive/${type}/v1/tree/${id}` })
		},
		// 新增bom时获取推荐编号
		getCode (type, itemId) {
			return get({ url: `/archive/${type}/v1/getCode/${itemId}` })
		},
		// 新增bom
		addBom (type) {
			return post({ url: `/archive/${type}/v1/add`, autoSuccessMsg: true })
		},
		// 删除bom
		deleteBom (type, bomId) {
			return del({ url: `/archive/${type}/v1/${bomId}`, autoSuccessMsg: true })
		},
		// 获取bom详情
		getBomDetail (type, bomId) {
			return get({ url: `/archive/${type}/v1/${bomId}` })
		},
		// 编辑bom主表
		editBom (type) {
			return put({ url: `/archive/${type}/v1/mod` })
		},
		// 获取bom展示页信息
		getBomCard (type, bomId) {
			return get({ url: `/archive/${type}/v1/${bomId}/child/batching`, loading: true })
		},
		// 明细
		// 单项新增时获取品项列表
		getItemList (type, bomId) {
			return get({ url: `/archive/${type}/v1/itemList/${bomId}` })
		},
		// 批量新增时获取品项列表
		addMulityGetItem (type, bomId) {
			return get({ url: `/archive/${type}/v1/itemList/${bomId}` })
		},
		// 批量新增时获取品项列表(组合bom单独处理)
		addMulityGetItem4batch (type, bomId) {
			return get({ url: `/archive/${type}/v1/itemList4Batch/${bomId}` })
		},
		// 单项新增时获取品项的单位列表
		getUnitList (type, itemId) {
			return get({ url: `/archive/${type}/v1/itemUnitList/${itemId}` })
		},
		// 单行新增明细
		addDetail (type, bomId) {
			return post({ url: `/archive/${type}/${bomId}/details/v1/add` })
		},
		// 单项新增时获取下级BOM列表
		getChildBomList (type, bomId, itemId) {
			return get({ url: `/archive/${type}/${bomId}/details/v1/${itemId}` })
		},
		// 批量新增明细
		addDetailsMulity (type, bomId) {
			return post({ url: `/archive/${type}/${bomId}/details/v1/batch/add`, autoSuccessMsg: true })
		},
		// 适用机构界面-左侧树
		getOrganTree (type) {
			return post({ url: `/archive/${type}_organ/v1/tree` })
		},
		// Bom适用机构-查询
		getConnectOrgan (type, bomId) {
			return get({ url: `/archive/${type}_organ/v1/organ/${bomId}` })
		},
		// Bom适用机构-保存
		saveConnectOrgan (type, bomId) {
			return put({ url: `/archive/${type}_organ/v1/organ/${bomId}`, autoSuccessMsg: true })
		},
		// 修改明细
		editDetail (type, bomId, autoSuccessMsg = false) {
			return put({ url: `/archive/${type}/${bomId}/details/v1`, autoSuccessMsg })
		},
		// 删除明细
		delDetail (type, bomId) {
			return del({ url: `/archive/${type}/${bomId}/details/v1`, autoSuccessMsg: true })
		},
		// 一致，复制详情-bom列表
		getCopyBomList (type, bomId) {
			return get({ url: `/archive/${type}/${bomId}/details/v1/copy/bomList` })
		},
		// 复制bom
		copyBom (type, bomId) {
			return post({ url: `/archive/${type}/${bomId}/details/v1/copy/bomList`, autoSuccessMsg: true })
		},
		// 与其他bom 一致
		copyWithBom (type, bomId) {
			return post({ url: `/archive/${type}/${bomId}/details/v1/consistent`, autoSuccessMsg: true })
		},
		// 批量设置
		setMulity (type, bomId) {
			return post({ url: `/archive/${type}/${bomId}/details/v1/batch/setting`, autoSuccessMsg: true })
		},
		// 保存冲减设置
		saveOffset (bomId) {
			return post({ url: `/archive/food_bom/v1/${bomId}/offset-relation`, autoSuccessMsg: true })
		}
	}
}
