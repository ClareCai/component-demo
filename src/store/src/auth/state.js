import { getLocalStorageJson } from '../utils'
export default {
	// 模块权限
	moduleAuth: getLocalStorageJson('moduleAuth', {}),
	// 按钮权限
	detailsAuth: getLocalStorageJson('detailsAuth', {}),
	// 租户信息
	tenantInfo: getLocalStorageJson('tenantInfo', {})
}
