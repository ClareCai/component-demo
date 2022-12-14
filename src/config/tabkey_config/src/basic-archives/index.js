import ORGAN_MANAGE from './organ-manage/index.js'
import SUPPLIER_MANAGE from './supplier-manage/index.js'
import CUSTOMER_MANAGE from './customer-manage/index.js'
import EMPLOYEE_MANAGE from './employee-manage/index.js'
import ITEM_MANAGE from './item-manage/index.js'
import PRICE_PLAN from './price-plan/index.js'
import STOCK_PLAN from './stock-plan/index.js'
export default {
	'basic-archives': {
		...ORGAN_MANAGE,
		...SUPPLIER_MANAGE,
		...CUSTOMER_MANAGE,
		...EMPLOYEE_MANAGE,
		...ITEM_MANAGE,
		...PRICE_PLAN,
		...STOCK_PLAN
	}
}
