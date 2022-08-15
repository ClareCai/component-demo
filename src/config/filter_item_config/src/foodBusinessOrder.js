export default {
	FoodBusinessOrder: {
		label: '菜品营业单据',
		mainFilterItem: {
			dateRange: {
				id: 'dateRange',
				type: 'dateRange',
				name: '营业时间',
				position: 'basic',
				disable: true
			},
			userBillCode: {
				id: 'userBillCode',
				type: 'input',
				name: '单据号',
				position: 'basic'
			},
			billState: {
				id: 'billState',
				type: 'select',
				name: '审核状态',
				position: 'basic'
			},
			offsetState: {
				id: 'offsetState',
				type: 'select',
				name: '冲减状态',
				position: 'basic'
			},
			organId: {
				id: 'organId',
				type: 'select',
				name: '营业机构',
				position: 'basic'
			},
			salesRegionId: {
				id: 'salesRegionId',
				type: 'select',
				name: '销售区域',
				position: 'basic'
			},
			item: {
				id: 'item',
				type: 'select',
				name: '菜品',
				position: 'basic'
			},
			billBizTypeId: {
				id: 'billBizTypeId',
				type: 'select',
				name: '业务类型',
				position: 'more'
			},
			billType: {
				id: 'billType',
				type: 'select',
				name: '单据类型',
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
				name: '营业时间'
			},
			organName: {
				id: 'organName',
				name: '营业机构'
			},
			salesRegionName: {
				id: 'salesRegionName',
				name: '销售区域'
			},
			billTypeName: {
				id: 'billTypeName',
				name: '单据类型'
			},
			billBizTypeName: {
				id: 'billBizTypeName',
				name: '业务类型'
			},
			buyerBillState: {
				id: 'buyerBillState',
				name: '审核状态'
			},
			offsetState: {
				id: 'offsetState',
				name: '冲减状态'
			},
			salesMoney: {
				id: 'salesMoney',
				name: '折前销售额'
			},
			realSalesMoney: {
				id: 'realSalesMoney',
				name: '实际销售额'
			},
			dishAmount: {
				id: 'dishAmount',
				name: '菜品总数'
			},
			dishNumber: {
				id: 'dishNumber',
				name: '菜品种数'
			},
			dataReasource: {
				id: 'dataReasource',
				name: '数据来源'
			},
			billCode: {
				id: 'billCode',
				name: '手工单号'
			},
			operateManName: {
				id: 'operateManName',
				name: '经办人'
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
