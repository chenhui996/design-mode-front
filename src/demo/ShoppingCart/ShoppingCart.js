import $ from 'jquery'
import getCart from './GetCart.js'

export default class ShoppingCart {
  constructor(app) {
    this.$el = $('<div>').css({
      'padding-bottom': '10px',
      'border-bottom': '1px solid #ccc',
    })
    this.app = app
    this.cart = getCart()
  }
  // 初始化按钮
  initBtn() {
    let $el = this.$el
    let $btn = $(`<button>显示购物车</button>`)

    $btn.on('click', () => {
      this.showCart()
    })

    $el.append($btn)
  }
  // 显示购物车内容
  showCart() {
    alert(this.cart.getList())
  }
  // 渲染
  render() {
    this.app.$el.append(this.$el)
  }
  // 初始化购物车
  init() {
    this.initBtn()
    this.render()
  }
}
