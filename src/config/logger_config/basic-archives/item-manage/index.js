import library from './library.js'
export default {
	id: 'item-manage',
	label: '品项管理',
	actions: [{
		id: 'add',
		label: '新增',
		messageHandler ({ item, code }) {
			return `品项名称:${item}, 品项编号:${code}`
		}
	}, {
		id: 'delete',
		label: '删除',
		messageHandler ({ item }) {
			return `品项名称:${item}`
		}
	}, {
		id: 'recover',
		label: '恢复',
		messageHandler ({ item }) {
			return `品项名称:${item}`
		}
	}, {
		id: 'recyclingDelete',
		label: '回收站删除',
		messageHandler ({ item }) {
			return `品项名称:${item}`
		}
	}, {
		id: 'enable',
		label: '启用',
		messageHandler ({ item }) {
			return `品项名称:${item}`
		}
	}, {
		id: 'disable',
		label: '停用',
		messageHandler ({ item }) {
			return `品项名称:${item}`
		}
	}, {
		id: 'update',
		label: '修改',
		messageHandler ({ pre, cur, name, code }) {
			return `品项名称:${name},品项编号:${code};修改信息为:` + this.createUpdateMessageByLibrary(library.main)(pre, cur)
		}
	}, {
		id: 'connectStore',
		label: '关联仓库',
		messageHandler ({ pre, cur, name, code }) {
			return `品项名称:${name},品项编号:${code};` + this.createUpdateMessageByLibrary(library.connect)({ connectStore: pre }, { connectStore: cur })
		}
	}, {
		id: 'copyWithItem',
		label: '与其他品项一致',
		messageHandler ({ copyName, name, code }) {
			return `品项名称:${name},品项编号:${code};与"品项名称:${copyName}"一致`
		}
	}, {
		id: 'copyConnect',
		label: '复制关系',
		messageHandler ({ selectRows, name, code }) {
			const _name = selectRows.map(item => item.name).join(',')
			return `品项名称:${name},品项编号:${code};复制品项名称:"${_name}"`
		}
	}, {
		id: 'itemTypeAdd',
		label: '新增类别',
		messageHandler ({ name }) {
			return `类别名称:${name}`
		}
	}, {
		id: 'itemTypeDelete',
		label: '删除类别',
		messageHandler ({ name }) {
			return `类别名称:${name}`
		}
	}, {
		id: 'itemTypeUpdate',
		label: '修改类别',
		messageHandler ({ name }) {
			return `类别名称:${name}`
		}
	}, {
		id: 'exportData',
		label: '导出档案',
		messageHandler () {
			return '导出品项档案'
		}
	}, {
		id: 'settingMulity',
		label: '批量设置',
		messageHandler ({ settingInfo }) {
			return `批量设置信息:${settingInfo}`
		}
	}]
}
