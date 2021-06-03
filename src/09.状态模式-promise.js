// 状态模式 - promise
import StateMachine from 'javascript-state-machine'

// 状态机模型
let fsm = new StateMachine({
  init: 'pending', // 初始化状态
  transitions: [
    {
      name: 'resolve', // 事件名称
      from: 'pending',
      to: 'fullfilled',
    },
    {
      name: 'reject', // 事件名称
      from: 'pending',
      to: 'rejected',
    },
  ],
  methods: {
    // 监听 resolve
    onResolve: (state, data) => {
      // state - 当前状态机实例
      // data - fsm.resolve(xxx) 传递的参数
      data.successList.forEach((fn) => fn())
    },
    // 监听 rejectï
    onReject: (state, data) => {
      // state - 当前状态机实例
      // data - fsm.reject(xxx) 传递的参数
      data.failList.forEach((fn) => fn())
    },
  },
})

// 定义 Promise
class MyPromise {
  constructor(fn) {
    this.successList = []
    this.failList = []

    fn(
      () => {
        // resolve 函数
        fsm.resolve(this)
      },
      () => {
        // reject 函数
        fsm.reject(this)
      },
    )
  }
  then(successFn, failFn) {
    this.successList.push(successFn)
    this.failList.push(failFn)
  }
}

// 测试代码
const loadImg = (src) => {
  const promise = new MyPromise((resolve, reject) => {
    let img = document.createElement('img')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      reject(img)
    }
    img.src = src
  })
  return promise
}

let src = 'https://www.baidu.com/img/padpc_5a6eece295f587afa0f7b8f998670870.png'
let result = loadImg(src)

result.then(
  () => {
    console.log('ok1')
  },
  () => {
    console.log('fail1')
  },
)

result.then(
  () => {
    console.log('ok2')
  },
  () => {
    console.log('fail2')
  },
)
