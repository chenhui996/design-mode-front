// 观察者模式 - node 继承
const EventEmitter = require('events').EventEmitter

// 继承
class Dog extends EventEmitter {
  constructor(name) {
    super()
    this.name = name
  }
}

let simon = new Dog('simon')
simon.on('bark', function () {
  console.log(this.name, 'bark-1')
})
simon.on('bark', function () {
  console.log(this.name, 'bark-2')
})
simon.on('bark', function () {
  console.log(this.name, 'bark-3')
})

setInterval(function () {
  simon.emit('bark')
}, 1000)
