import { get, post, put, del } from '@/js/api/dataSource'
import app from '@/main.js'

export default {
	// 权限接口
	auth: {
		// 登录
		login () {
			return post({ url: '/auth/v1/login/username' })
		},
		// 手机密码登录
		loginByPhone () {
			return post({ url: '/auth/v1/login/phone' })
		},
		// 刷新token
		refreshToken () {
			return put({ url: '/auth/token/v1/token/refresh' })
		},
		// 登出
		logout () {
			return del({ url: '/auth/v1/logout', autoSuccessMsg: true })
		},
		// 获取当前登陆人权限
		getCurrentAuth (fatherCodeList = '', loading = true) {
			return get({
				url: '/auth/privilege_employee/v1/mes/privilege/employee/tree',
				query: { fatherCodeList, systemSign: 0 },
				success: (res) => {
					return {
						treeModularsData: res.treeModularsData || [],
						haveModulars: res.haveModulars || [],
						havePrivileges: res.havePrivileges || [],
						treeHavePrivilegesData: res.treeHavePrivilegesData || []
					}
				},
				loading
			})
		},
		getWechatInfo () {
			return get({ url: `/auth/wechat/v1/bind/${app.vue.$store.state.loginer.hostId}` })
		},
		unbindWechat () {
			return del({ url: `/auth/wechat/v1/bind/${app.vue.$store.state.loginer.hostId}`, autoSuccessMsg: true })
		},
		getTenantInfo () {
			return get({ url: '/archive/tenant/v1/info' })
		}
	}
}
