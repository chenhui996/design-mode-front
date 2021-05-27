// 观察者模式 - demo

// 主题-状态
class Subject {
  constructor() {
    this.state = 0
    this.observers = []
  }
  getState() {
    return this.state
  }
  setState(state) {
    if (this.state !== state) {
      this.state = state
      this.notifyAllObservers()
    }
    return
  }
  notifyAllObservers() {
    this.observers.map((observer) => {
      observer.update()
    })
  }
  attach(observer) {
    this.observers.push(observer)
  }
}

// 观察者
class Observer {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.attach(this)
  }
  update() {
    console.log(
      `Subject 的 state 更新了，当前值：${this.subject.getState()}。 -> 依次触发 Observer 更新，当前： ${
        this.name
      }`,
    )
  }
}

// 测试用例
let subject = new Subject()

let o1 = new Observer('o1', subject)
let o2 = new Observer('o2', subject)
let o3 = new Observer('o3', subject)

subject.setState(1)
subject.setState(2)
subject.setState(3)
