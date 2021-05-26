// 代理模式 - demo
class RealImg {
  constructor(fileName) {
    this.fileName = fileName
    this.loadFromDisk()
  }

  display() {
    console.log('display... ' + this.fileName)
  }

  loadFromDisk() {
    console.log('loading... ' + this.fileName)
  }
}

class ProxyImg {
  constructor(fileName) {
    this.realImg = new RealImg(fileName)
  }
  display() {
    this.realImg.display()
  }
}

// 测试用例

let client = new ProxyImg('clientImg.png')
client.display()
