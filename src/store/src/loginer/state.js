import { getLocalStorage, getLocalStorageNumber } from '../utils'
export default {
	// token
	token: getLocalStorage('token', ''),
	tenantId: getLocalStorageNumber('tenantId', 0),
	// 员工直属机构名称
	organName: getLocalStorage('organName', ''),
	// 员工名称
	employeeName: getLocalStorage('employeeName', ''),
	// 登录用户名
	username: getLocalStorage('username', ''),
	// 域名
	hostname: getLocalStorage('hostname', ''),
	hostId: getLocalStorage('hostId', ''),
	// 管理员标记
	systemFlag: getLocalStorageNumber('systemFlag', 0),
	// 可见销售金额
	haveMoneyPower: getLocalStorageNumber('haveMoneyPower', 0),
	// 可见成本金额
	haveCostPower: getLocalStorageNumber('haveCostPower', 0),
	// 商龙平台token
	SLCloudToken: ''
}
