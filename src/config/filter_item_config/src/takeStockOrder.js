export default {
	TakeStockOrder: {
		label: '盘点单',
		mainFilterItem: {
			dateRange: {
				id: 'dateRange',
				type: 'dateRange',
				name: '盘点时间',
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
				name: '盘点机构',
				position: 'basic'
			},
			houseId: {
				id: 'houseId',
				type: 'select',
				name: '盘点仓库',
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
			billType: {
				id: 'billType',
				type: 'select',
				name: '单据类型',
				position: 'more'
			},
			entryClerk: {
				id: 'entryClerk',
				type: 'select',
				name: '经办人',
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
				name: '盘点时间'
			},
			organName: {
				id: 'organName',
				name: '盘点机构'
			},
			houseName: {
				id: 'houseName',
				name: '盘点仓库'
			},
			checkClassName: {
				id: 'checkClassName',
				name: '盘点分类'
			},
			checkWay: {
				id: 'checkWay',
				name: '盘点方式'
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
			sumTaxMoney: {
				id: 'sumTaxMoney',
				name: '实盘总金额'
			},
			sumAccountTaxMoney: {
				id: 'sumAccountTaxMoney',
				name: '账存总金额'
			},
			diffMoney: {
				id: 'diffMoney',
				name: '差异总金额'
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
