import BASIC_ARCHIVES from './src/basic-archives/index.js'
import SYSTEM_SETTING from './src/system-setting/index.js'
import STORE_MANAGE from './src/store-manage/index.js'
import STOCK_SALE_MANAGE from './src/stock-sale-manage/index.js'
import FINANCIAL_MANAGE from './src/financial-manage/index.js'
import REPORT_CENTRE from './src/report-centre/index.js'
import COST_MANAGE from './src/cost-manage/index.js'
import SHOPPING_ONLINE from './src/shopping-online/index.js'

import { firstButton } from './src/enum.js'
export const AUTH_CONFIG = {
	...BASIC_ARCHIVES,
	...SYSTEM_SETTING,
	...STORE_MANAGE,
	...STOCK_SALE_MANAGE,
	...FINANCIAL_MANAGE,
	...REPORT_CENTRE,
	...COST_MANAGE,
	...SHOPPING_ONLINE
}
export const FIRST_BUTTON_ENUM = firstButton
