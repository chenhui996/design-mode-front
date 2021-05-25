// 装饰器模式 - 装饰方法
class Math {
  @log
  add(a, b) {
    return a + b
  }
}

function log(target, name, descriptor) {
  // add 方法
  let oldValue = descriptor.value
  descriptor.value = function () {
    console.log(`Call ${name} with`, arguments)
    return oldValue.apply(this, arguments)
  }

  return descriptor
}

const math = new Math()
const result = math.add(2, 4)
console.log('result', result)
