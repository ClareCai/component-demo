import axios from 'axios'
import app from '@/main.js'
import { requestConfig, requestFileConfig } from './config'
import { Loading } from 'element-ui'
import utils from '@/js/lib/utils'
const loginErrorList = [100001, 100002, 100003, 100005]
const tokenErrorList = [100004]
const tokenRefreshCode = Symbol('cancel request')
const tokenRefreshList = []
// @TODO
// const CancelToken = axios.CancelToken
const service = axios.create(requestConfig)
const serviceFile = axios.create(requestFileConfig)
let tokenRefreshing = false
let loginErrorFlag = false
export const fxLoading = {
	loadingInstance: null,
	fxIsLoading: false
}
let loadingQueue = 0
const showLoading = (loadingFlag = true) => {
	loadingQueue++
	if (!loadingFlag) {
		return false
	}
	fxLoading.loadingInstance = Loading.service({ fullscreen: true, background: '#3031330f' })
	fxLoading.fxIsLoading = true
}
const hideLoading = () => {
	loadingQueue--
	if (loadingQueue === 0 && fxLoading.loadingInstance) {
		fxLoading.loadingInstance.close()
		fxLoading.fxIsLoading = false
	}
}
const requestInterceptors = [
	config => {
		config.headers.Authorization = app.vue.$store.state.loginer.token
		// @TODO
		// if (tokenRefreshing) {
		// 	let cancel = null
		// 	config.cancelToken = new CancelToken((c) => {
		// 		cancel = c
		// 	})
		// 	cancel(tokenRefreshCode)
		// }
		return config
	},
	error => {
		return Promise.reject(error)
	}
]
const responseInterceptors = [
	res => {
		let response = res.data
		if (res.config.responseType === 'arraybuffer') {
			if (!res.headers['content-disposition']) {
				const enc = new TextDecoder('utf-8')
				response = app.vue.$fxUtils.JSONparse(enc.decode(new Uint8Array(response)), 'object')
				if (typeof response !== 'object') {
					response = app.vue.$fxUtils.JSONparse(response, 'object')
				}
			} else {
				return res
			}
		}
		if (response.result || response.type === 0) {
			return response
		} else {
			if (tokenErrorList.includes(response.code)) {
				const serviceError = {
					code: 7000,
					config: res.config,
					message: '????????????'
				}
				return Promise.reject(serviceError)
			}
			return Promise.reject(response)
		}
	},
	error => {
		let serviceError = {
			code: 5000,
			message: '???????????????'
		}
		if (error.response && error.response.data) {
			let errData = error.response.data
			if (error.config.responseType === 'arraybuffer') {
				const enc = new TextDecoder('utf-8')
				errData = app.vue.$fxUtils.JSONparse(enc.decode(new Uint8Array(errData)))
			}
			if (typeof errData !== 'object' || errData.status === 500) {
				return Promise.reject(serviceError)
			}
			serviceError = errData
		} else if (error.message === tokenRefreshCode) {
			serviceError = {
				code: 6000,
				message: '???????????????'
			}
		}
		return Promise.reject(serviceError)
	}
]
service.interceptors.request.use(...requestInterceptors)
serviceFile.interceptors.request.use(...requestInterceptors)
service.interceptors.response.use(...responseInterceptors)
serviceFile.interceptors.response.use(...responseInterceptors)
const errorToast = error => {
	return new Promise(resolve => {
		app.vue.$fxMessage.error(error.message || 'has not error message').then(resolve)
	})
}
const successToast = message => {
	return new Promise(resolve => {
		app.vue.$fxMessage.success(message).then(resolve)
	})
}
const requestCommon = function (type) {
	return function ({
		responseType = 'json',
		url,
		data,
		query = {},
		loading = true,
		autoErrorMsg = true,
		autoSuccessMsg,
		responseComplete,
		success,
		logger
	}) {
		const arg = arguments[0]
		const requestInfo = app.vue.$fxLogger.requestInfoStart(url, data, query)
		let actionInfo = null
		if (logger) {
			actionInfo = app.vue.$fxLogger.actionInfo(logger)
		}
		loading && showLoading(loading)
		return new Promise((resolve, reject) => {
			service({
				method: type,
				url,
				data,
				params: query,
				responseType
			}).then(res => {
				if (actionInfo) {
					const resulteType = 1
					actionInfo.end(resulteType)
				}
				if (autoSuccessMsg && res.message) {
					successToast(res.message)
				}
				let _res = responseComplete ? res : (utils.isDef(res.data) ? res.data : {})
				if (success && typeof success === 'function') {
					_res = success(_res)
				}
				resolve(_res)
				return res
			}).catch((error) => {
				if (error.code === 7000) {
					tokenRefreshList.push({
						type,
						config: error.config,
						params: arg,
						resolve,
						reject
					})
					if (!tokenRefreshing) {
						tokenRefreshing = true
						tokenRefreshHandler()
					}
					return error
				}
				if (error.code === 6000) {
					return error
				}
				if (actionInfo) {
					const resulteType = 0
					actionInfo.end(resulteType)
				}
				if (loginErrorList.includes(error.code)) {
					if (!loginErrorFlag) {
						loginErrorFlag = true
						errorToast(error).then(() => {
							app.vue.$fxRouter.routeLoginPage()
						})
					}
				} else if (autoErrorMsg) {
					errorToast(error).then(() => {
						reject(error)
					})
				} else {
					reject(error)
				}
				return error
			}).always((res, error) => {
				loading && hideLoading()
				requestInfo.end(url)
			})
		})
	}
}
const requestFile = ({
	responseType = 'json',
	url,
	data,
	query = {},
	loading = true,
	autoErrorMsg = true,
	autoSuccessMsg,
	responseComplete,
	success,
	logger
}) => {
	const params = new FormData()
	Object.keys(data).forEach(item => {
		params.append(item, data[item])
	})
	const requestInfo = app.vue.$fxLogger.requestInfoStart(url, data, query)
	let actionInfo = null
	if (logger) {
		actionInfo = app.vue.$fxLogger.actionInfo(logger)
	}
	loading && showLoading(loading)
	return new Promise((resolve, reject) => {
		serviceFile({
			method: 'post',
			url,
			data: params,
			params: query,
			responseType
		}).then(res => {
			if (actionInfo) {
				const resulteType = res.result ? 1 : 0
				actionInfo.end(resulteType)
			}
			if (autoSuccessMsg && res.message) {
				successToast(res.message)
			}
			let _res = responseComplete ? res : (utils.isDef(res.data) ? res.data : {})
			if (success && typeof success === 'function') {
				_res = success(_res)
			}
			resolve(_res)
			return res
		}).catch((error) => {
			if (actionInfo) {
				const resulteType = 0
				actionInfo.end(resulteType)
			}
			if (loginErrorList.includes(error.code)) {
				errorToast(error).then(() => {
					app.vue.$fxRouter.routeLoginPage()
				})
			} else if (autoErrorMsg) {
				errorToast(error).then(() => {
					reject(error)
				})
			} else {
				reject(error)
			}
			return error
		}).always((res, error) => {
			loading && hideLoading()
			requestInfo.end(url)
		})
	})
}
const tokenRefreshHandler = function () {
	app.vue.$fxApi('auth.refreshToken')({
		data: {
			token: app.vue.$store.state.loginer.token
		}
	}).then(res => {
		app.vue.$store.commit('SET_LOGINER', {
			token: res.token
		})
		tokenRefreshing = false
		while (tokenRefreshList.length) {
			const tokenListItem = tokenRefreshList.shift()
			requestCommon(tokenListItem.type)(tokenListItem.params).then(tokenListItem.resolve).catch(tokenListItem.reject)
		}
	})
}
export default {
	requestPost: requestCommon('post'),
	requestPut: requestCommon('put'),
	requestDel: requestCommon('delete'),
	requestGet: requestCommon('get'),
	requestFile
}
export const loginErrorRefresh = function () {
	loginErrorFlag = false
}
