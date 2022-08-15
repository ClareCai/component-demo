import Vue from 'vue'
import Vuex from 'vuex'
import loginer from './src/loginer/index'
import address from './src/address/index'
import system from './src/system/index'
import auth from './src/auth/index'
import filterItem from './src/filterItem/index'
import stylusDynamic from './src/stylus-dynamic/index'
Vue.use(Vuex)

const store = () => new Vuex.Store({
	modules: {
		loginer,
		address,
		system,
		auth,
		filterItem,
		stylusDynamic
	}
})

export default store
