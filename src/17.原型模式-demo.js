// 原型模式 - demo
let prototype = {
  getName: function () {
    return this.first + '' + this.last
  },
  say: () => {
    console.log('hello')
  },
}

// 测试用例

// 基于原型创建 objA
let objA = Object.create(prototype)
objA.first = 'A'
objA.last = 'B'
console.log(objA.getName())
objA.say()

// 基于原型创建 objB
let objB = Object.create(prototype)
objB.first = 'C'
objB.last = 'D'
console.log(objB.getName())
objB.say()
