export default {
	SaleOrder: {
		label: '销售订单',
		mainFilterItem: {
			dateRange: {
				id: 'dateRange',
				type: 'dateRange',
				name: '订货时间',
				position: 'basic',
				disable: true
			},
			billCode: {
				id: 'billCode',
				type: 'input',
				name: '单据号',
				position: 'basic'
			},
			state: {
				id: 'state',
				type: 'select',
				name: '审核状态',
				position: 'basic'
			},
			buyerOrgan: {
				id: 'buyerOrgan',
				type: 'select',
				name: '买方机构',
				position: 'basic'
			},
			sellerOrgan: {
				id: 'sellerOrgan',
				type: 'select',
				name: '卖方机构',
				position: 'basic'
			},
			item: {
				id: 'item',
				type: 'select',
				name: '品项',
				position: 'basic'
			},
			billBizType: {
				id: 'billBizType',
				type: 'select',
				name: '业务类型',
				position: 'more'
			},
			billKind: {
				id: 'billKind',
				type: 'select',
				name: '单据类型',
				position: 'more'
			},
			purchasePlan: {
				id: 'purchasePlan',
				type: 'select',
				name: '订货方案',
				position: 'more'
			},
			inAssignStatus: {
				id: 'inAssignStatus',
				type: 'select',
				name: '入库状态',
				position: 'more'
			},
			outAssignStatus: {
				id: 'outAssignStatus',
				type: 'select',
				name: '出库状态',
				position: 'more'
			},
			supplierState: {
				id: 'supplierState',
				type: 'select',
				name: '发单状态',
				position: 'more'
			},
			urgent: {
				id: 'urgent',
				type: 'select',
				name: '加急状态',
				position: 'more'
			},
			memo: {
				id: 'memo',
				type: 'input',
				name: '备注',
				position: 'more'
			},
			bdmemo: {
				id: 'bdmemo',
				type: 'input',
				name: '明细备注',
				position: 'more'
			},
			source: {
				id: 'source',
				type: 'select',
				name: '来源',
				position: 'more'
			},
			tagKey: {
				id: 'tagKey',
				type: 'input',
				name: '标签',
				position: 'more'
			}
		},
		mainTableColumn: {
			sysBillCode: {
				id: 'sysBillCode',
				name: '系统单号'
			},
			businessDate: {
				id: 'businessDate',
				name: '订货时间'
			},
			organName: {
				id: 'organName',
				name: '卖方机构'
			},
			otherOrganName: {
				id: 'otherOrganName',
				name: '买方机构'
			},
			stockPlanName: {
				id: 'stockPlanName',
				name: '订货方案'
			},
			billBizTypeName: {
				id: 'billBizTypeName',
				name: '业务类型'
			},
			urgentFlag: {
				id: 'urgentFlag',
				name: '加急状态'
			},
			detailAmount: {
				id: 'detailAmount',
				name: '明细数'
			},
			billState: {
				id: 'billState',
				name: '审核状态'
			},
			inAssignStatus: {
				id: 'inAssignStatus',
				name: '入库状态'
			},
			outAssignStatus: {
				id: 'outAssignStatus',
				name: '出库状态'
			},
			sumTaxMoney: {
				id: 'sumTaxMoney',
				name: '含税销售总金额'
			},
			sumMoney: {
				id: 'sumMoney',
				name: '非税销售总金额'
			},
			billTypeName: {
				id: 'billTypeName',
				name: '单据类型'
			},
			userBillCode: {
				id: 'userBillCode',
				name: '手工单号'
			},
			operateManName: {
				id: 'operateManName',
				name: '经办人'
			},
			parentBill: {
				id: 'parentBill',
				name: '上级单据'
			},
			memoList: {
				id: 'memoList',
				name: '备注'
			},
			generateWay: {
				id: 'generateWay',
				name: '单据来源'
			},
			modifyManName: {
				id: 'modifyManName',
				name: '最新修改人'
			},
			modifyDate: {
				id: 'modifyDate',
				name: '最新修改时间'
			},
			createManName: {
				id: 'createManName',
				name: '创建人'
			},
			createDate: {
				id: 'createDate',
				name: '创建时间'
			}
		}
	}
}
