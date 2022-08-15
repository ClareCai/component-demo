import library from './library.js'
export default {
	id: 'supplier-manage',
	label: '供货商管理',
	actions: [{
		id: 'add',
		label: '新增',
		messageHandler ({ supplier, type }) {
			return `供货商名称:${supplier}, 机构类型:${type}`
		}
	}, {
		id: 'delete',
		label: '删除',
		messageHandler ({ supplier }) {
			return `供货商名称:${supplier}`
		}
	}, {
		id: 'recover',
		label: '恢复',
		messageHandler ({ supplier }) {
			return `供货商名称:${supplier}`
		}
	}, {
		id: 'recyclingDelete',
		label: '回收站删除',
		messageHandler ({ supplier }) {
			return `供货商名称:${supplier}`
		}
	}, {
		id: 'enable',
		label: '启用',
		messageHandler ({ supplier }) {
			return `供货商名称:${supplier}`
		}
	}, {
		id: 'disable',
		label: '停用',
		messageHandler ({ supplier }) {
			return `供货商名称:${supplier}`
		}
	}, {
		id: 'update',
		label: '修改',
		messageHandler ({ pre, cur, name, type }) {
			return `供货商名称:${name},机构类型:${type};修改信息为:` + this.createUpdateMessageByLibrary(library.main)(pre, cur)
		}
	}, {
		id: 'connectItem',
		label: '关联品项',
		messageHandler ({ pre, cur, name, type }) {
			return `供货商名称:${name},机构类型:${type};` + this.createUpdateMessageByLibrary(library.connect)({ connectItem: pre }, { connectItem: cur })
		}
	}, {
		id: 'copyWithStore',
		label: '与其他机构一致',
		messageHandler ({ copyName, name, type }) {
			return `供货商名称:${name},机构类型:${type};与"机构名称:${copyName}"一致`
		}
	}, {
		id: 'copyConnect',
		label: '复制关系',
		messageHandler ({ selectRows, name, type }) {
			const _name = selectRows.map(item => item.name).join(',')
			return `供货商名称:${name},机构类型:${type};复制机构名称:"${_name}"`
		}
	}, {
		id: 'supplierTreeAdd',
		label: '新增类别',
		messageHandler ({ name }) {
			return `类别名称:${name}`
		}
	}, {
		id: 'supplierTreeDelete',
		label: '删除类别',
		messageHandler ({ name }) {
			return `类别名称:${name}`
		}
	}, {
		id: 'supplierTreeUpdate',
		label: '修改类别',
		messageHandler ({ name }) {
			return `类别名称:${name}`
		}
	}, {
		id: 'exportData',
		label: '导出档案',
		messageHandler () {
			return '导出供货商档案'
		}
	}]
}
