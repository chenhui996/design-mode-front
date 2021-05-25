// 装饰器模式 - 装饰方法
class Person {
  constructor() {
    this.first = 'A'
    this.last = 'B'
  }

  @readonly
  name2() {
    alert(this.first)
    alert(this.last)
  }
}

function readonly(target, name, descriptor) {
  // console.log('target', target)
  // console.log('name', name)
  // descriptor: 属性描述对象(Object.defineProperty 中会用到)
  descriptor.writable = false
  return descriptor
}

// 测试用例

const cain = new Person()
cain.name2()
// 下面的不可行
// cain.name() = function(){}
// 预期会报错，说找不到 name 方法，因为 name 是只读属性
