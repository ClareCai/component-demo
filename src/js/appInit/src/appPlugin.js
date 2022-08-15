import appPlugin, {
	$fxEventBus,
	$fxCreateEventBus,
	$fxRouter,
	$fxGo,
	$fxGoBlank,
	$fxGoToBillBlank,
	$fxGoPrint,
	$fxSlCloudReport,
	$fxTabkey,
	$fxBiubiuorder
} from '@/js/lib/plugin'

export default (vue) => {
	appPlugin()
	vue.prototype.$fxEventBus = $fxEventBus
	vue.prototype.$fxCreateEventBus = $fxCreateEventBus
	vue.prototype.$fxRouter = $fxRouter
	vue.prototype.$fxGo = $fxGo
	vue.prototype.$fxGoBlank = $fxGoBlank
	vue.prototype.$fxGoToBillBlank = $fxGoToBillBlank
	vue.prototype.$fxGoPrint = $fxGoPrint
	vue.prototype.$fxSlCloudReport = $fxSlCloudReport
	vue.prototype.$fxTabkey = $fxTabkey
	vue.prototype.$fxBiubiuorder = $fxBiubiuorder
}
