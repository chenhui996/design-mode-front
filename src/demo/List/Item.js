import $ from 'jquery'
import getCart from '../ShoppingCart/GetCart'
import StateMachine from 'javascript-state-machine'
import { log } from '../util/log';

export default class Item {
  constructor(list, data) {
    this.list = list
    this.data = data
    this.$el = $('<div>')
    this.cart = getCart()
  }

  initContent() {
    let $el = this.$el
    let data = this.data
    $el.append($(`<p>名称： ${data.name}</p>`))
    $el.append($(`<p>价格： ${data.price}</p>`))
  }

  initBtn() {
    let $el = this.$el
    let $btn = $(`<button>`)

    // let _this = this
    let fsm = new StateMachine({
      init: '加入购物车',
      transitions: [
        {
          name: 'addToCart',
          from: '加入购物车',
          to: '从购物车删除',
        },
        {
          name: 'deleteFromCart',
          from: '从购物车删除',
          to: '加入购物车',
        },
      ],
      methods: {
        // 加入购物车 - 监听
        onAddToCart: () => {
          this.addToCartHandle()
          updateText()
        },
        // 从购物车删除 - 监听
        onDeleteFromCart: () => {
          this.deleteFromCartHandle()
          updateText()
        },
      },
    })

    const updateText = () => {
      $btn.text(fsm.state)
    }

    $btn.on('click', () => {
      // 执行：添加或删除 -> 购物车
      if (fsm.is('加入购物车')) {
        fsm.addToCart()
      } else {
        fsm.deleteFromCart()
      }
    })
    updateText()

    $el.append($btn)
  }

  // 添加到购物车
  @log('add')
  addToCartHandle() {
    this.cart.add(this.data)
  }

  // 从购物车移除
  @log('delete')
  deleteFromCartHandle() {
    this.cart.delete(this.data.id)
  }

  // 渲染
  render() {
    this.list.$el.append(this.$el)
  }

  // 初始化
  init() {
    this.initContent()
    this.initBtn()
    this.render()
  }
}
