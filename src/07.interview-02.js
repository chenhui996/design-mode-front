// 面试题 两道

// * ------------------------------------------------

// 第二题

// 某停车场，分 3 层，每层 100 车位。
// 每个车位，都能监控到车辆的驶入和驶出。
// 车辆进入停车场前，显示每层的空余车位数量。
// 车辆进入停车场时，摄像头可识别车牌号和时间。
// 车辆出来时，出口显示器显示车牌号和停车时常。

// 要求：

// 1.画出 UML 类图。
// 2.用 ES6 语法写出该示例。

// * ------------------------------------------------

class Car {
  constructor(num) {
    this.num = num
  }
}

class Place {
  constructor() {
    this.empty = true
  }
  in() {
    this.empty = false
  }
  out() {
    this.empty = true
  }
}

class Floors {
  constructor(index, places) {
    this.index = index
    this.places = places || []
  }
  emptyNumber() {
    let num = 0
    this.places.forEach((place) => {
      if (place.empty) {
        num += 1
      }
    })
    return num
  }
}

class Camera {
  shot(car) {
    return {
      num: car.num,
      inTime: Date.now(),
    }
  }
}
class Screen {
  show(car, inTime) {
    console.log(`车牌号: ${car.num}`, `停车时常： ${Date.now() - inTime}`)
  }
}

class Park {
  constructor(floors) {
    this.floors = floors || []
    this.camera = new Camera()
    this.carList = []
    this.screen = new Screen()
  }
  emptyNum() {
    return this.floors
      .map((floor) => {
        return `${floor.index} 层还有 ${floor.emptyNumber()} 个空闲车位`
      })
      .join('\n')
  }
  in(car) {
    let info = this.camera.shot(car)
    // console.log(info)
    let f = parseInt((Math.random() * 100) % 3)
    let p = parseInt((Math.random() * 100) % 100)
    let place = this.floors[f].places[p]
    place.in()
    info.place = place
    this.carList[car.num] = info
  }
  out(car) {
    // 获取信息
    let info = this.carList[car.num]
    // 将车位清空
    let place = info.place
    place.out()
    // 显示时间
    this.screen.show(car, info.inTime)
    // 清空记录
    delete this.carList[car.num]
  }
}

// 测试用例

// 初始化停车场
const floors = []
for (let i = 0; i < 3; i++) {
  const places = []
  for (let j = 0; j < 100; j++) {
    places[j] = new Place()
  }
  floors[i] = new Floors(i + 1, places)
}

const park = new Park(floors)

// 初始化 car
let carA = new Car('沪A·99999')
let carB = new Car('沪B·88888')
let carC = new Car('沪C·77777')

console.log('// * -------------------------------------------')
console.log('// * ------------------驶入----------------------')
console.log('// * -------------------------------------------')
console.log('第一辆车进入停车场前')
console.log(park.emptyNum())
park.in(carA)
console.log('// * -------------------------------------------')
console.log('第二辆车进入停车场前')
console.log(park.emptyNum())
park.in(carB)
console.log('// * -------------------------------------------')
console.log('第三辆车进入停车场前')
console.log(park.emptyNum())
park.in(carC)

console.log('// * -------------------------------------------')
console.log('// * ------------------驶出----------------------')
console.log('// * -------------------------------------------')
console.log('第一辆车从停车场-驶出')
park.out(carA)
console.log('// * -------------------------------------------')
console.log('第二辆车从停车场-驶出')
park.out(carB)
console.log('// * -------------------------------------------')
console.log('第三辆车从停车场-驶出')
park.out(carC)
