import FINANCIAL_CLASS from './financial-class/index.js'
import BUSSINESS_TYPE from './bussiness-type/index.js'
import TAKE_STOCK_CLASS from './take-stock-class/index.js'
import INVOICE_TYPE from './invoice-type/index.js'
import INVENTORY_PROFIT_REASON from './inventory-profit-reason/index.js'
import SALES_AREA from './sales-area/index.js'
export default {
	id: 'support-archives',
	label: '辅助档案',
	child: [
		FINANCIAL_CLASS,
		BUSSINESS_TYPE,
		INVENTORY_PROFIT_REASON,
		TAKE_STOCK_CLASS,
		INVOICE_TYPE,
		SALES_AREA
	]
}
