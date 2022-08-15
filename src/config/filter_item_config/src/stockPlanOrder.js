export default {
	StockPlanOrder: {
		label: '采购计划单',
		mainFilterItem: {
			dateRange: {
				id: 'dateRange',
				type: 'dateRange',
				name: '申请时间',
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
			buyerHouse: {
				id: 'buyerHouse',
				type: 'select',
				name: '买方仓库',
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
			stockPlanId: {
				id: 'stockPlanId',
				type: 'select',
				name: '订货方案',
				position: 'more'
			},
			assignStatus: {
				id: 'assignStatus',
				type: 'select',
				name: '分派状态',
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
				name: '申请时间'
			},
			organName: {
				id: 'organName',
				name: '买方机构'
			},
			buyerOrganStore: {
				id: 'buyerOrganStore',
				name: '买方仓库'
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
			buyerBillState: {
				id: 'buyerBillState',
				name: '审核状态'
			},
			assignStatusList: {
				id: 'assignStatusList',
				name: '分派状态'
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