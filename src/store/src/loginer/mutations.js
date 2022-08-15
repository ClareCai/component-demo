import { setLocalStorage } from '../utils'
export function SET_LOGINER (state, obj) {
	for (const key of Object.keys(obj)) {
		state[key] = obj[key]
		setLocalStorage(key, obj[key])
	}
}

const DEFAULT_LOGIN_STATE = {
	token: '',
	organName: '',
	employeeName: '',
	username: '',
	SLCloudToken: ''
}
export function LOGIN_OUT (state) {
	SET_LOGINER(state, DEFAULT_LOGIN_STATE)
}
