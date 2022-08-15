import API_BILL_STOCK from './api_bill-stock'
import API_BILL_SALE from './api_bill-sale'
import API_BILL_STOCK_PLAN from './api_bill-stock-plan'
import API_BILL_ASSIGN_SUMMARY from './api_bill-assign-summary'
export default {
	...API_BILL_STOCK,
	...API_BILL_SALE,
	...API_BILL_STOCK_PLAN,
	...API_BILL_ASSIGN_SUMMARY
}
