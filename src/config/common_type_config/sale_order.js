// 项目通用类型设置
export default {
	/**
	 * @name saleOrderGenerateType
	 * @desc 销售单生成类型
	 * @author shw
	 * @date 2021/9/10
	 */
	saleOrderGenerateType: [{
		id: 0,
		type: 'hand',
		label: '手工销售订单',
		rule (billType, subBillType) {
			return `${billType}` === '5000'
		}
	}, {
		id: 1,
		type: 'purchase',
		label: '采购销售订单',
		rule (billType, subBillType) {
			return `${billType}` === '5001'
		}
	}, {
		id: 2,
		type: 'purchase-sub',
		label: '采购生成销售订单',
		rule (billType, subBillType) {
			return `${subBillType}` === '5001-1'
		}
	}, {
		id: 3,
		type: 'assign-sub',
		label: '分派生成销售订单',
		rule (billType, subBillType) {
			return `${subBillType}` === '5001-2'
		}
	}, {
		id: 4,
		type: 'jsd-sub',
		label: '极速订生成销售订单',
		rule (sourceType) {
			return `${sourceType}` === '1002'
		}
	}]
}
