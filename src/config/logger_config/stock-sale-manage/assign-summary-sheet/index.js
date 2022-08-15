export default {
	id: 'assign-summary-sheet',
	label: '分派汇总表',
	actions: [{
		id: 'updateInStore',
		label: '编辑入库单明细数量',
		messageHandler ({ orderData, itemName, originAmount, amount }) {
			return `系统单号:${this.createCodeSpan(orderData, 'InStore')},品项名称:${itemName},入库数量由"${originAmount}"改为"${amount}"`
		}
	}, {
		id: 'updateOutStore',
		label: '编辑出库单明细数量',
		messageHandler ({ orderData, itemName, originAmount, amount }) {
			return `系统单号:${this.createCodeSpan(orderData, 'OutStore')},品项名称:${itemName},出库数量由"${originAmount}"改为"${amount}"`
		}
	}, {
		id: 'updateSaleOrder',
		label: '编辑销售订单明细数量',
		messageHandler ({ orderData, itemName, originAmount, amount }) {
			return `系统单号:${this.createCodeSpan(orderData, 'SalesOrder')},品项名称:${itemName},销售数量由"${originAmount}"改为"${amount}"`
		}
	}]
}
