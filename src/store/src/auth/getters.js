import utils from '@/js/lib/utils'
import { getModuleAuthConfigNameMap } from './mutations'
const getDetailsAuth = function (detailsAuth, moduleName) {
	return detailsAuth[moduleName] || {}
}
const hasAuth = function (state, moduleName, details) {
	const detailsAuthMap = getDetailsAuth(state, moduleName)
	return utils.logicJudgmentStr(details, detail => {
		return !!detailsAuthMap[detail]
	})
}
export default {
	// 获取详情权限
	detailsAuthGetter: state => (authKey) => {
		const [moduleName, details] = authKey.split('.')
		return hasAuth(state.detailsAuth, moduleName, details)
	},
	// 获取模块权限
	moduleAuthGetter: state => (moduleName) => {
		const authMap = getModuleAuthConfigNameMap()
		return utils.logicJudgmentStr(moduleName, (moduleName) => {
			return authMap.has(moduleName) ? !!state.moduleAuth[moduleName] : true
		})
	}
}
