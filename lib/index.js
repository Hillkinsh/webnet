let fs = require('fs');
let join = require('path').join;
/**
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 * @description 递归获取所有文件的位置名称
 */
function findSync(startPath) {
  let result = []
  let finder = path => {
    let files = fs.readdirSync(path)
    files.forEach((val, index) => {
      let fPath = join(path, val)
      let stats = fs.statSync(fPath)
      if (stats.isDirectory()) finder(fPath)
      if (stats.isFile()) result.push(fPath)
    })
  }
  finder(join(process.cwd(), startPath))
  return result
}

exports.findSync = findSync