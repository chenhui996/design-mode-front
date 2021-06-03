// 策略模式 - demo
class OrdinaryUser {
  buy() {
    console.log('普通用户购买')
  }
}
class MemberUser {
  buy() {
    console.log('会员用户购买')
  }
}
class VipUser {
  buy() {
    console.log('vip 用户购买')
  }
}

// 测试用例
let u1 = new OrdinaryUser()
u1.buy()
let u2 = new MemberUser()
u2.buy()
let u3 = new VipUser()
u3.buy()
