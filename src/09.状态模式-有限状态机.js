// 状态模式 - 有限状态机
import StateMachine from 'javascript-state-machine'
import $ from 'jquery'

// 初始化状态及模型
let fsm = new StateMachine({
  init: '收藏',
  transitions: [
    {
      name: 'doStore',
      from: '收藏',
      to: '取消收藏',
    },
    {
      name: 'deleteStore',
      from: '取消收藏',
      to: '收藏',
    },
  ],
  methods: {
    // 监听执行收藏
    onDoStore: () => {
      alert('执行收藏') // 服务端交互: get post ...
      undateText() // 更新视图
    },
    // 监听取消收藏
    onDeleteStore: () => {
      alert('取消收藏') // 服务端交互: get post ...
      undateText() // 更新视图
    },
  },
})

let $btn = $('#btn1')

// 按钮点击事件
$btn.on('click', () => {
  if (fsm.is('收藏')) {
    fsm.doStore()
  } else {
    fsm.deleteStore()
  }
})

// 更新视图
const undateText = () => {
  $btn.text(fsm.state)
}

undateText()
