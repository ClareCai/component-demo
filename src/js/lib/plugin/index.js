import promisePro from './src/promisePro'
import platform from './src/platform'
import eventBus from './src/eventBus'
import slCloudReport from './src/slCloudReport'
import visibilityChange from './src/visibilityChange'
import tabkey from './src/tabKey'
import biubiuorder from './src/biubiuorder'

import {
	clearRouterQuery,
	routeLoginPage,
	replaceRouterPathNofresh
} from './src/router'

export const $fxRouter = {
	clearRouterQuery,
	routeLoginPage,
	replaceRouterPathNofresh
}
export { eventBus as $fxEventBus, slCloudReport as $fxSlCloudReport, tabkey as $fxTabkey, biubiuorder as $fxBiubiuorder }
export { createEventBus as $fxCreateEventBus } from './src/eventBus'
export {
	go as $fxGo,
	goBlank as $fxGoBlank,
	goToBillBlank as $fxGoToBillBlank,
	goPrint as $fxGoPrint
} from './src/router'
export default () => {
	promisePro()
	visibilityChange()
	slCloudReport.init()
	platform.init()
}

