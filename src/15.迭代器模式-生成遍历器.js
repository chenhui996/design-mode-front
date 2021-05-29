// 迭代器模式 - 生成遍历器
function each(data) {
  // 生成遍历器
  let iterator = data[Symbol.iterator]()

  let item = {done: false}
  while (!item.done) {
    item = iterator.next()
    if (!item.done) {
      console.log(item.value)
    }
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
