// cart
import $ from 'jquery'
import ShoppingCart from './ShoppingCart/ShoppingCart.js'
import List from './List/list.js'

export default class App {
  constructor(id) {
    this.$el = $('#' + id)
  }
  init() {
    this.initShoppingCart()
    this.initItemList()
  }
  // 初始化购物车
  initShoppingCart() {
    let shoppingCart = new ShoppingCart(this)
    shoppingCart.init()
  }
  // 初始化列表
  initItemList() {
    let list = new List(this)
    list.init()
  }
}
