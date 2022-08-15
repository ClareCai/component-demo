import { post } from '@/js/api/dataSource'
export default {
	// 日志接口
	log: {
		// 分页查询
		getPage () {
			return post({ url: '/archive/logger/v1/search' })
		}
	}
}
