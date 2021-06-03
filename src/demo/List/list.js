import $ from 'jquery'
import {GET_LIST} from '../config/config.js'
import createItem from './CreateItem'

export default class List {
  constructor(app) {
    this.app = app
    this.$el = $('<div>')
  }
  // 获取数据
  loadData() {
    return fetch(GET_LIST).then((result) => {
      return result.json()
    })
  }
  // 生成列表
  initItemList(data) {
    data.forEach((itemData) => {
      // 创建一个 Item 然后 init
      let item = createItem(this, itemData)
      item.init()
    })
  }
  // 渲染
  render() {
    this.app.$el.append(this.$el)
  }
  init() {
    this.loadData()
      .then((data) => {
        this.initItemList(data)
      })
      .then(() => {
        // 渲染
        this.render()
      })
    console.log('初始化完成------------------------')
  }
}
