// 项目通用类型设置
export default {
	/**
	 * @name inStoreBillGenerateType
	 * @desc 入库单生成类型
	 * @author shw
	 * @date 2021/9/10
	 */
	inStoreBillGenerateType: [{
		id: 0,
		type: 'beginPeriod',
		label: '期初入库单',
		rule (billType, subBillType) {
			return `${billType}` === '1001'
		}
	}, {
		id: 1,
		type: 'purchase',
		label: '采购入库单',
		rule (billType, subBillType) {
			return `${billType}` === '1002'
		}
	}, {
		id: 2,
		type: 'other',
		label: '其他入库单',
		rule (billType, subBillType) {
			return `${billType}` === '1003'
		}
	}, {
		id: 3,
		type: 'stockProfit',
		label: '盘盈入库单',
		rule (billType, subBillType) {
			return `${billType}` === '1004'
		}
	}, {
		id: 4,
		type: 'diff',
		label: '差异入库单',
		rule (billType, subBillType) {
			return `${billType}` === '1005'
		}
	}, {
		id: 5,
		type: 'move',
		label: '调拨入库单',
		rule (billType, subBillType) {
			return `${billType}` === '1006'
		}
	}, {
		id: 6,
		type: 'return',
		label: '退货出库单',
		rule (billType, subBillType) {
			return `${billType}` === '1007'
		}
	}, {
		id: 7,
		type: 'normal-sub',
		label: '普通入库单',
		rule (billType, subBillType) {
			return `${billType}` === '1002' && (`${subBillType}` === '1002-1' || !subBillType)
		}
	}, {
		id: 8,
		type: 'assignStraight-sub',
		label: '直发分派入库单',
		rule (billType, subBillType) {
			return `${subBillType}` === '1002-2'
		}
	}, {
		id: 9,
		type: 'assignCross-sub',
		label: '越库分派入库单',
		rule (billType, subBillType) {
			return `${subBillType}` === '1002-3'
		}
	}, {
		id: 10,
		type: 'amount-sub',
		label: '数量出库单',
		rule (billType, subBillType) {
			return `${subBillType}` === '1005-4'
		}
	}, {
		id: 11,
		type: 'money-sub',
		label: '金额出库单',
		rule (billType, subBillType) {
			return `${subBillType}` === '1005-5'
		}
	}, {
		id: 12,
		type: 'offset',
		label: '冲减返库单',
		rule (billType, subBillType) {
			return `${billType}` === '1008'
		}
	}]
}
