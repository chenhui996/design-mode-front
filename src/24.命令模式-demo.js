// 命令模式 - demo

// 接收者
class Receiver {
  exec() {
    console.log('Execute the command')
  }
}

// 命令者
class Command {
  constructor(recevier) {
    this.recevier = recevier
  }
  cmd() {
    console.log('Trigger the command')
    this.recevier.exec()
  }
}

// 发布者
class Invoke {
  constructor(command) {
    this.command = command
  }
  invoke() {
    console.log('Issue a command')
    this.command.cmd()
  }
}

// 测试用例
let soldier = new Receiver()
let trumpeter = new Command(soldier)
let general = new Invoke(trumpeter)
general.invoke()
