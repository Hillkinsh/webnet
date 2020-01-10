require('./index.css')
require('./style/index.less')

const h2 = document.createElement('h2')
h2.className = 'test'
h2.innerText = 'testaaa'

const div = `<div class=mod><div>颜色应该是绿色</div></div>`

document.body.innerHTML = div