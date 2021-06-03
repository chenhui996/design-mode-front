// 状态模式 - demo

// 红绿灯切换
class State {
  constructor(color) {
    this.color = color
  }
  handle(context) {
    console.log(`turn to ${this.color} light`)
    context.setState(this)
  }
}
class Context {
  constructor() {
    this.state = null
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
  }
}

// 测试用例
let context = new Context()

let green = new State('green')
let yellow = new State('yellow')
let red = new State('red')

console.log('绿灯亮了')
green.handle(context)
console.log('黄灯亮了')
yellow.handle(context)
console.log('红灯亮了')
red.handle(context)
