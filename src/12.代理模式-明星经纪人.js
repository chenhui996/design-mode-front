// 代理模式 - 明星经纪人
let star = {
  name: '陈辉',
  age: 18,
  phone: '13900000001',
}

// 经纪人
let agent = new Proxy(star, {
  get: function (target, key) {
    if (key === 'phone') {
      // 返回经纪人自己的电话
      return '13244444441'
    }
    if (key === 'price') {
      // 明星不报价，经纪人报价
      return 120000
    }
    // 其他的，不需要通过经纪人的信息，就直接返回。
    return target[key]
  },
  set: function (target, key, val) {
    if (key === 'customPrice') {
      if (val < 100000) {
        // 价格太低，报一个错误出去
        throw new Error('价格太低')
      } else {
        target[key] = val
        return true
      }
    }
  },
})

// 测试用例

console.log('// * ----------公开信息----------')
console.log('明星姓名：', agent.name)
console.log('明星年龄：', agent.age)
console.log('// * ----------经纪人代理信息----------')
console.log('明星电话 -> 经纪人电话：', agent.phone)
console.log('明星报价 -> 经纪人报价：', agent.price)
console.log('// * ----------自定义代理信息----------')
console.log('自定义高报价: 150000')
agent.customPrice = 150000
console.log('价格：', agent.customPrice)
console.log('自定义低报价： 90000')
agent.customPrice = 90000
console.log('价格：', agent.customPrice)
