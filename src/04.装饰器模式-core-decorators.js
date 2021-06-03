// 装饰器模式 - core-decorators

// readonly
import {readonly, deprecate} from 'core-decorators'

class Person {
  @readonly
  name() {
    return 'cain'
  }
}

// 测试用例
let cain = new Person()
console.log(cain.name())
// 由于 name 是只读属性，故赋值会报错
// cain.name = function(){}

// * -----------------------------------------

// deprecate

class MyClass {
  init() {
    console.log('init')
  }

  @deprecate
  name() {
    console.log('cain')
  }

  @deprecate('这个 api，即将废弃')
  old() {
    console.log('18')
  }

  @deprecate('这个 api，即将废弃，具体关注 github', {
    url: 'https://github.com/chenhui996',
  })
  phone() {
    console.log('13888888888')
  }
}

// 测试用例
let myclass = new MyClass()
myclass.init()
myclass.name() // 默认废弃信息提示
myclass.old() // 定制 normal 废弃信息
myclass.phone() // 定制 custom 废弃信息
