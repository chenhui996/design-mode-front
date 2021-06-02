// 备忘录模式 - demo

// 备忘录
class Memento {
  constructor(content) {
    this.content = content
  }
  getContent() {
    return this.content
  }
}

// 备忘录列表
class CareTaker {
  constructor() {
    this.undoList = []
    this.redoList = []
  }
  add(memento) {
    this.undoList.push(memento)
  }
  undo() {
    let content = this.undoList[this.undoList.length - 1]
    this.redoList.push(content)
    this.undoList.length -= 1
    return content
  }
}

// 编辑器
class Editor {
  constructor() {
    this.content = null
  }
  getContent() {
    return this.content
  }
  setContent(content) {
    this.content = content
  }
  saveContentToMemento() {
    return new Memento(this.content)
  }
  getContentFromMemento(memento) {
    this.content = memento.getContent()
  }
}

// 测试用例
let editor = new Editor()
let careTaker = new CareTaker()

// 行为：开始操作 ---------------------------------
editor.setContent('111')
editor.setContent('222')

// 行为：存储状态 ---------------------------------
careTaker.add(editor.saveContentToMemento())

// 行为：继续操作 ---------------------------------
editor.setContent('333')

// 行为：再次存储状态 ------------------------------
careTaker.add(editor.saveContentToMemento())

// 行为：继续操作 ---------------------------------
editor.setContent('444')

// ----------------------------------------------

console.log('展示：当前状态 ---------------------------------')
console.log(editor.getContent())

console.log('行为：执行撤销 ---------------------------------')
editor.getContentFromMemento(careTaker.undo())

console.log('展示：当前状态 ---------------------------------')
console.log(editor.getContent())

console.log('行为：执行撤销 ---------------------------------')
editor.getContentFromMemento(careTaker.undo())

console.log('展示：当前状态 ---------------------------------')
console.log(editor.getContent())
