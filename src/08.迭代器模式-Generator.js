// 迭代器模式 - Generator
import 'core-js/stable'
import 'regenerator-runtime/runtime'

function* helloWorldGenerator() {
  yield 'hello'
  yield 'world'
  return 'ending'
}

// 测试用例

var hw = helloWorldGenerator()
// // hw[Symbol.iterator]()
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())

// 同理，也可用 for...of 来做
