export default [{
	path: '/',
	redirect: '/main'
}, {
	path: '/main',
	component: r => require.ensure([], function (require) { r(require('@/views/index/Index.vue')) }, 'main')
}]
