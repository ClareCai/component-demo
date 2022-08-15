import IN_STORE_TYPE from './in_store'
import OUT_STORE_TYPE from './out_store'
import STOCK_ORDER_TYPE from './stock_order'
import SALE_ORDER_TYPE from './sale_order'
import ENUM_TYPE from './enum_type'
import USER_TYPE from './user_type'

export default {
	...IN_STORE_TYPE,
	...OUT_STORE_TYPE,
	...STOCK_ORDER_TYPE,
	...SALE_ORDER_TYPE,
	...ENUM_TYPE,
	...USER_TYPE
}
