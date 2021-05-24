// 适配器模式 - demo
class Adaptee {
  specificRequest() {
    return '日本标准插头'
  }
}

class Target {
  constructor(adaptee) {
    this.adaptee = adaptee
  }
  request() {
    let info = this.adaptee.specificRequest()
    return `${info} => 转换适配器 => 中国标准插头`
  }
}

// 测试用例

let target = new Target(new Adaptee())
alert(target.request())
