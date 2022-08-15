import ORGAN_MANAGE from './src/organManage.js'
import IN_STORE_ORDER from './src/inStoreOrder.js'
import OUT_STORE_ORDER from './src/outStoreOrder.js'
import MOVE_ORDER from './src/moveOrder.js'
import TAKE_STOCK_ORDER from './src/takeStockOrder.js'
import STOCK_PLAN_ORDER from './src/stockPlanOrder.js'
import STOCK_ORDER from './src/stockOrder.js'
import SALE_ORDER from './src/saleOrder.js'
import FOOD_BUSINESS_ORDER from './src/foodBusinessOrder.js'
import THEORY_COST_ORDER from './src/theoryCostOrder.js'

export * from './filterSettingCongfig.js'

export const FILTER_ITEM_CONFIG = {
	...ORGAN_MANAGE,
	...IN_STORE_ORDER,
	...OUT_STORE_ORDER,
	...MOVE_ORDER,
	...TAKE_STOCK_ORDER,
	...STOCK_PLAN_ORDER,
	...STOCK_ORDER,
	...SALE_ORDER,
	...FOOD_BUSINESS_ORDER,
	...THEORY_COST_ORDER
}
