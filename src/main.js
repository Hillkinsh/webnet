require('./index.css')
require('./style/index.less')

const h2 = document.createElement('h2')
h2.className = 'test'
h2.innerText = 'testaaa'

const div = `<div class=mod><div>颜色应该是绿色</div></div>`

let a = Array.isArray([]) ? '1' : '2'
console.log(a)
let b = [1, 2, 3].includes(a) ? a : 'b'
console.log(b)
document.body.innerHTML = div
class TopProperty {
  _name;
  _age;
  _sex;
  constructor(name, age, sex) {
    this._name = name
    this._age = age
    this._sex = sex
  }
}