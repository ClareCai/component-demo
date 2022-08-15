const fs = require('fs')
const path = require('path')
const exec = require('child_process').execSync
function resolvePath (dir) {
	return path.join(__dirname, dir)
}
const hasCommitizen = function () {
	const npmRoot = exec('npm root -g')
	const npmRootPath = npmRoot.toString("utf8").trim()
	return fs.existsSync(`${npmRootPath}/commitizen`)
}
const hasCommitMsg = function () {
	const _path = resolvePath('../node_modules/cz-customizable')
	return fs.existsSync(_path)
}
const hasLintStaged = function () {
	const _path = resolvePath('../node_modules/lint-staged')
	return fs.existsSync(_path)
}
const validateProxy = function (config) {
	if (!hasCommitizen()) {
		console.log('请先执行 npm install -g commitizen')
		process.exit()
	}
	if (!hasCommitMsg() || !hasLintStaged()) {
		console.log('存在没有安装的依赖, 请重新执行npm install')
		process.exit()
	}
	const proxy = Object.keys(config.devServer.proxy).map(item => {
		return {
			key: item,
			value: config.devServer.proxy[item]
		}
	})
	const invalidProxy = proxy.filter(item => !item.value.target)
	if (invalidProxy.length > 0) {
		console.log('存在没有配置的代理服务!')
		console.log(`请检查vue.config.js文件, PROXY_URL.${process.env.PROXY_TARGET}中, 缺少${invalidProxy.map(item => item.key).join(',')}服务的配置`)
		process.exit()
	}
}
module.exports.validateProxy = validateProxy