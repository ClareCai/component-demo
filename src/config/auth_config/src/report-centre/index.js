import REPORT_CURRENT_STORE from './report-current-store/index.js'
import REPORT_PURCHASE_SELL_STOCK_SUMMARY from './report-purchase-sell-stock-summary/index.js'
import REPORT_PURCHASE_SELL_STOCK_STANDING_BOOK from './report-purchase-sell-stock-standing-book/index.js'
export default {
	report: {
		id: 'report',
		label: '报表中心',
		code: '0008',
		child: {
			...REPORT_CURRENT_STORE,
			...REPORT_PURCHASE_SELL_STOCK_SUMMARY,
			...REPORT_PURCHASE_SELL_STOCK_STANDING_BOOK
		}
	}
}
