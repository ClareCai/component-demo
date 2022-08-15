import STOCK_PLAN from './stock-plan/index.js'
import STOCK_PLAN_ORDER from './stock-plan-order/index.js'
import STOCK_ORDER from './stock-order/index.js'
import SALE_ORDER from './sale-order/index.js'
import ASSIGN_MANAGE from './assign-manage/index.js'
export default {
	'stock-sale-manage': {
		id: 'stock-sale-manage',
		label: '采销管理',
		code: '0004',
		child: {
			...STOCK_PLAN,
			...STOCK_PLAN_ORDER,
			...STOCK_ORDER,
			...SALE_ORDER,
			...ASSIGN_MANAGE
		}
	}
}
