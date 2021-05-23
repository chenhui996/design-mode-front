// 工厂模式

// 最简易模型

class Product {
  constructor(name) {
    this.name = name
  }
  init() {
    alert('init')
  }
  fn1() {
    alert('fn1')
  }
  fn2() {
    alert('fn2')
  }
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

let creator = new Creator()
let p = creator.create('p1')
p.init()
p.fn1()
