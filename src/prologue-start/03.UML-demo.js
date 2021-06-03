class People {
  constructor(name, house) {
    this.name = name
    this.house = house
  }
  saySomething() {
    // .....
  }
}

class A extends People {
  constructor(name, house) {
    super(name, house)
  }
  saySomething() {
    alert(`I'm ${this.name}, this is my house: ${this.house}`)
  }
}

class B extends People {
  constructor(name, house) {
    super(name, house)
  }
  saySomething() {
    alert(`I'm ${this.name}, this is my house: ${this.house}`)
  }
}

class House {
  constructor(house) {
    this.house = house
  }
  showCity() {
    return this.house
  }
}

// * --------------------------------------------

// 测试用例

const cainHouse = new House('Hong Qiao')
const cain = new A('cain', cainHouse.showCity())
cain.saySomething()

const snakeHouse = new House('New York')
const snake = new B('snake', snakeHouse.showCity())
snake.saySomething()
