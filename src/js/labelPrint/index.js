import app from '@/main.js'

const PRINT_SERVE = 'http://localhost:18000/CLodopfuncs.js'
const PRINT_SCRIPT_REG = /CLodopfuncs.js/

class LabelPrint {
	constructor () {
		this.inited = false
	}

	init () {
		return new Promise((resolve) => {
			if (!this.isInit()) {
				this.appenPrintScript(() => {
					this.inited = true
					resolve()
				})
			} else {
				resolve()
			}
		})
	}

	isInit () {
		return this.hasPrintScript() && this.inited
	}

	hasPrintScript () {
		const scripts = document.querySelectorAll('script')
		return Array.prototype.some.call(scripts, item => PRINT_SCRIPT_REG.test(item.src))
	}

	appenPrintScript (cb) {
		const printScript = document.createElement('script')
		printScript.src = PRINT_SERVE
		printScript.onload = cb
		printScript.onerror = () => {
			app.vue.$fxMessage.warning('打印服务不可用! 请联系管理员')
			this.removePrintScript()
		}
		document.body.appendChild(printScript)
	}

	removePrintScript () {
		const scripts = document.querySelectorAll('script')
		for (let i = scripts.length - 1; i >= 0; i--) {
			if (PRINT_SCRIPT_REG.test(scripts[i].src)) {
				scripts[i].parentNode.removeChild(scripts[i])
			}
		}
	}

	setPrintShowMode () {
		// loadop.SET_SHOW_MODE('PREVIEW_IN_BROWSE', true)
		// loadop.SET_SHOW_MODE('BKIMG_IN_PREVIEW', false)
		// loadop.SET_PRINT_MODE('AUTO_CLOSE_PREWINDOW', true)
	}

	print (printData, filter) {
		this.defaultTemplate(printData, filter)
	}

	defaultTemplate (printData, filter) {
		const loadop = window.getCLodop()
		// var iCount = loadop.GET_PRINTER_COUNT()
		// for (let i = 0; i < iCount; i++) {
		// 	console.log(loadop.GET_PRINTER_NAME(i))
		// }
		loadop.PRINT_INIT('品项条码打印')
		loadop.SET_PRINT_PAGESIZE(1, 600, 400, '')
		if (filter.includes('code')) {
			loadop.ADD_PRINT_TEXT(10, 10, 260, 20, printData.code)
		}
		if (filter.includes('spec')) {
			loadop.ADD_PRINT_TEXT(30, 10, 260, 20, printData.spec)
		}
		if (filter.includes('unit')) {
			loadop.ADD_PRINT_TEXT(30, 120, 260, 20, printData.unit)
		}
		loadop.ADD_PRINT_BARCODE(50, 20, 200, 50, '128Auto', printData.barcode)
		if (filter.includes('name')) {
			loadop.ADD_PRINT_TEXT(110, 10, 260, 20, printData.name)
		}
		if (filter.includes('refCostPrice') && app.vue.$fxUtils.isDef(printData.refCostPrice)) {
			loadop.ADD_PRINT_TEXT(130, 10, 260, 20, printData.refCostPrice)
		}
		if (filter.includes('refSellingPrice') && app.vue.$fxUtils.isDef(printData.refSellingPrice)) {
			loadop.ADD_PRINT_TEXT(130, 120, 260, 20, printData.refSellingPrice)
		}
		loadop.SET_PRINT_MODE('AUTO_CLOSE_PREWINDOW', true)
		// loadop.SET_PRINT_STYLEA(5, 'AngleOfPageInside', 180)
		loadop.PREVIEW()
	}
}

export const createLablePrint = function () {
	return new LabelPrint()
}
