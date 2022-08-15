import { FX_NODE_ENV } from './env.config'

const slCLoudConfig = {
	release: {
		host: 'https://b.tcsl.com.cn/home',
		reportMap: {
			'report_report-current-store': '1985661031448006022',
			'report_report-purchase-sell-stock-summary': '1985661031448006021',
			'report_report-purchase-sell-stock-standing-book': '1985661031448006020',
			'report_shop-gross': '2723528613111428337',
			'report_dishe-cost': '2723528613111428336',
			'report_dishe-gross': '2723528613111428335',
			'report_raw-score': '2723528613111428334'
		},
		loginParams: {
			username: '11111111110',
			password: 'aa123456'
		}
	},
	production: {
		host: 'https://btest.tcsl.com.cn/home',
		reportMap: {
			'report_report-current-store': '1985661031448006022',
			'report_report-purchase-sell-stock-summary': '1985661031448006021',
			'report_report-purchase-sell-stock-standing-book': '1985661031448006020',
			'report_shop-gross': '2723528613111428337',
			'report_dishe-cost': '2723528613111428336',
			'report_dishe-gross': '2723528613111428335',
			'report_raw-score': '2723528613111428334'
		},
		loginParams: {
			username: '11111111110',
			password: 'aa123456'
		}
	},
	development: {
		host: 'https://btest.tcsl.com.cn/home',
		reportMap: {
			'report_report-current-store': '1985661031448006022',
			'report_report-purchase-sell-stock-summary': '1985661031448006021',
			'report_report-purchase-sell-stock-standing-book': '1985661031448006020',
			'report_shop-gross': '2723528613111428337',
			'report_dishe-cost': '2723528613111428336',
			'report_dishe-gross': '2723528613111428335',
			'report_raw-score': '2723528613111428334'
		},
		loginParams: {
			username: '11111111110',
			password: 'aa123456'
		}
	}
}

export default {
	host: slCLoudConfig[FX_NODE_ENV].host,
	reportMap: slCLoudConfig[FX_NODE_ENV].reportMap,
	loginParams: slCLoudConfig[FX_NODE_ENV].loginParams
}
