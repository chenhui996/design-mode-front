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
  taskStart() {}
  taskEnd() {}
}

class NormalCar extends Car {
  constructor(name, lincenceNumber) {
    super(name, lincenceNumber)
    this.price = 1
  }
  taskStart() {
    return `Car imformation: name: ${this.name}, lincenceNumber: ${this.lincenceNumber}`
  }
  taskEnd(mileage) {
    return mileage * this.price
  }
}

class VipCar extends Car {
  constructor(name, lincenceNumber) {
    super(name, lincenceNumber)
    this.price = 2
  }
  taskStart() {
    return `Car imformation: name: ${this.name}, lincenceNumber: ${this.lincenceNumber}`
  }
  taskEnd(mileage) {
    return mileage * this.price
  }
}

// 测试用例

// normal car
let normal = new NormalCar('NormalCar', '沪A88888')
alert(normal.taskStart())
alert(normal.taskEnd(5))

// vip car
let vip = new VipCar('VipCar', '沪A99999')
alert(vip.taskStart())
alert(vip.taskEnd(5))
