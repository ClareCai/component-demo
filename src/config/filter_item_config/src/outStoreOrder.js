export default {
	OutStore: {
		label: '出库单',
		mainFilterItem: {
			dateRang: {
				id: 'dateRang',
				type: 'dateRange',
				name: '出库时间',
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
			organId: {
				id: 'organId',
				type: 'select',
				name: '出库方',
				position: 'basic'
			},
			otherOrganId: {
				id: 'otherOrganId',
				type: 'select',
				name: '入库方',
				position: 'basic'
			},
			item: {
				id: 'item',
				type: 'select',
				name: '品项',
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
			inHouse: {
				id: 'inHouse',
				type: 'select',
				name: '入库仓库',
				position: 'more'
			},
			otherHouse: {
				id: 'otherHouse',
				type: 'select',
				name: '出库仓库',
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
				name: '出库时间'
			},
			organName: {
				id: 'organName',
				name: '出库方'
			},
			buyerOrganStore: {
				id: 'buyerOrganStore',
				name: '出库仓库'
			},
			billTypeName: {
				id: 'billTypeName',
				name: '单据类型'
			},
			billBizTypeName: {
				id: 'billBizTypeName',
				name: '业务类型'
			},
			detailAmount: {
				id: 'detailAmount',
				name: '明细数'
			},
			buyerBillState: {
				id: 'buyerBillState',
				name: '审核状态'
			},
			sumMoney: {
				id: 'sumMoney',
				name: '出库成本总金额'
			},
			sumSalesTaxMoney: {
				id: 'sumSalesTaxMoney',
				name: '含税销售总金额'
			},
			carriageFee: {
				id: 'carriageFee',
				name: '整单运费'
			},
			otherOrganName: {
				id: 'otherOrganName',
				name: '入库方'
			},
			userBillCodeList: {
				id: 'userBillCodeList',
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
