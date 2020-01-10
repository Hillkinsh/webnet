const path = require('path')
const Config = require('webpack-chain')
const {
  findSync
} = require('../lib')

const config = new Config()
const configFilesArray = findSync('config') // 配置文件的文件路径列表
const resolve = (src) => path.join(process.cwd(), src)

module.exports = () => {
  const map = new Map()
  configFilesArray.map(_ => {
    const name = _.split('/').pop().replace('.js', '')
    return map.set(name, require(_)(config, resolve))
  })
  map.forEach((v, key) => {
    // css 配置
    if (key === 'css') {
      v('css', /\.css$/)
    } else {
      v()
    }
  })
  return config
}