// * ------------------------------------------------------------

// 父类
class People {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.weight = 100
  }
  eat() {
    alert(`${this.name} eat something`)
  }
  speak() {
    alert(`My name is ${this.name}, age ${this.age}`)
  }
}

let cain = new People('cain', 18)
// cain.eat()
// cain.speak()

let snake = new People('snake', 28)
// snake.eat()
// snake.speak()

// * ------------------------------------------------------------

// 子类继承父类
class Student extends People {
  constructor(name, age, number) {
    super(name, age)
    this.number = number
  }
  study() {
    alert(`${this.name} study`)
  }
  lookAss() {
    alert(`${this.weight} ass`)
  }
}

let king = new Student('king', 40, 325608)
king.study()
king.lookAss()

// * ------------------------------------------------------------
