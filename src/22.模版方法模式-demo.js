// 模版方法模式 - demo
class Action {
  handle() {
    this.handle1()
    this.handle2()
    this.handle3()
  }
  handle1() {
    console.log('1')
  }
  handle2() {
    console.log('2')
  }
  handle3() {
    console.log('3')
  }
}

// 测试用例
let action = new Action()
action.handle()
