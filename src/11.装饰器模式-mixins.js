// 装饰器模式 - mixins
function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}

const Foo = {
  foo() {
    alert('foo')
  },
}

@mixins(Foo)
class MyClass {}

// 测试用例
let obj = new MyClass()
obj.foo()
