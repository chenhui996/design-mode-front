// 迭代器模式 - for...of
function each(data) {
  // for...of: ES6 专门为开发人员准备的，即无需每次都手写遍历器。
  for (let item of data) {
    console.log(item)
  }
}

// 测试用例

// 数组
let arr = [1, 2, 3, 4, 5]

each(arr)

// html 标签
let nodeList = document.querySelectorAll('h1')

each(nodeList)

// Map 对象
let map = new Map()
map.set('a', 100)
map.set('b', 200)

each(map)
