// 桥接模式 - demo
class Color {
  constructor(name) {
    this.name = name
  }
}

class Shape {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  draw() {
    console.log(`${this.color.name} ${this.name}`)
  }
}

// 测试用例

// color
let red = new Color('red')
let yellow = new Color('yellow')

// shape + draw
let circle1 = new Shape('circle', red)
circle1.draw()
let circle2 = new Shape('circle', yellow)
circle2.draw()
let triangle1 = new Shape('triangle', red)
triangle1.draw()
let triangle2 = new Shape('triangle', yellow)
triangle2.draw()
