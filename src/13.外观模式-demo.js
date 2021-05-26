// 外观模式 - demo
function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector
    selector = null
  }

  // ...
}

// 测试用例
let div1 = document.createElement('div')
let div2 = document.createElement('div')

bindEvent(div1, 'click', '#div1', fn)
bindEvent(div2, 'click', fn)

// dom 自行搞定，此处仅示意
