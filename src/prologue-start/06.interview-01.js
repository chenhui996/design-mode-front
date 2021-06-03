// 面试题 两道

// * ------------------------------------------------

// 第一题

// 打车时，可以打专车或快车。任何车都有车牌号和名称。
// 不同车价格不同，快车每公里 1 元，专车每公里 2 元。
// 行程开始时，显示车辆信息。
// 行程结束时，显示打车金额（假定行程为 5 公里）

// 要求：

// 1.画出 UML 类图。
// 2.用 ES6 语法写出该示例。

// * ------------------------------------------------

class Car {
  constructor(name, lincenceNumber) {
    this.name = name
    this.lincenceNumber = lincenceNumber
  }
}

class NormalCar extends Car {
  constructor(name, lincenceNumber) {
    super(name, lincenceNumber)
    this.price = 1
  }
}

class VipCar extends Car {
  constructor(name, lincenceNumber) {
    super(name, lincenceNumber)
    this.price = 2
  }
}

class Task {
  constructor(car) {
    this.car = car
  }
  start() {
    return `Car imformation: name: ${this.car.name}, lincenceNumber: ${this.car.lincenceNumber}`
  }
  end(mileage) {
    return mileage * this.car.price
  }
}

// 测试用例

// normal car
let normal = new NormalCar('NormalCar', '沪A88888')
let normalTask = new Task(normal)
alert(normalTask.start())
alert(normalTask.end(5))

// vip car
let vip = new VipCar('VipCar', '沪A99999')
let vipTask = new Task(vip)
alert(vipTask.start())
alert(vipTask.end(5))
