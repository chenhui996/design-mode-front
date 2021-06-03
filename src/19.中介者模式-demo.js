// 中介者模式 - demo
class A {
  constructor() {
    this.number = 0
  }
  setNumber(number, mediator) {
    this.number = number
    // console.log(this.number);
    if (mediator) {
      mediator.setB()
    }
  }
}

class B {
  constructor() {
    this.number = 0
  }
  setNumber(number, mediator) {
    this.number = number
    if (mediator) {
      mediator.setA()
    }
  }
}

class Mediator {
  constructor(a, b) {
    this.a = a
    this.b = b
  }
  setA() {
    let number = this.b.number
    this.a.setNumber(number)
  }
  setB() {
    let number = this.a.number
    this.b.setNumber(number)
  }
}

// 测试用例
let a = new A()
let b = new B()
let mediator = new Mediator(a, b)

a.setNumber(10000, mediator)
console.log('b', b.number)

b.setNumber(100, mediator)
console.log('a', a.number)
