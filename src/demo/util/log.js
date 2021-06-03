export const log = (type) => {
  return function (target, name, descriptor) {
    console.log(target, name, descriptor)
    // target: 装饰的类
    // name: 装饰的 API
    // descriptor: 装饰 API 的配置项
    let oldValue = descriptor.value

    descriptor.value = function () {
      // 在此统一打印日志
      console.log(`日志上报 ${type}`)
      // 执行原有的方法
      return oldValue.apply(this, arguments)
    }
    return descriptor
  }
}
