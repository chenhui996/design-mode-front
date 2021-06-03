// 装饰器模式 - demo

class Circle {
  draw() {
    console.log('画一个圆形')
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle
  }
  draw() {
    this.circle.draw()
    this.setRedBorder(this.circle)
  }
  setRedBorder(circle) {
    console.log('为 ${circle} 设置红色彼边框')
  }
}

// 测试用例
let circle = new Circle()
circle.draw()

console.log('// * ----------------------------------------');

let decorator = new Decorator(circle)
decorator.draw()
