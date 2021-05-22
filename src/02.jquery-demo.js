// JQ
class jQuery {
  constructor(seletor) {
    let slice = Array.prototype.slice
    let dom = slice.call(document.querySelectorAll(seletor)) // 处理成 [] 形式
    let len = dom ? dom.length : 0
    // 将 dom 中的数组元素，分别挨个绑定到 this 上。（作为属性绑定）
    for (let i = 0; i < len; i++) {
      this[i] = dom[i]
    }
    this.length = len
    this.seletor = seletor || ''
  }
  append() {
    // ...
  }
  addClass() {
    // ...
  }
  html() {
    // ...
  }
  // 此处省略 N 个 API
}

window.$ = function (seletor) {
  // 工厂模式
  return new jQuery(seletor)
}

// * ----------------------------------

// 测试代码
let $p = $('p')
console.log($p)
console.log($p.addClass)
