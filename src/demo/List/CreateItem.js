import Item from './Item'

// 工厂函数
const createDiscount = (data) => {
  return new Proxy(data, {
    get: (target, key, receiver) => {
      if (key === 'name') {
        return `${target[key]}【折扣】`
      }
      if (key === 'price') {
        return target[key] * 0.8
      }
      return target[key]
    },
  })
}

// 为何要使用工厂函数： 补充 -> 优惠商品的处理逻辑
export default function (list, itemData) {
  if (itemData.discount) {
    itemData = createDiscount(itemData)
  }
  return new Item(list, itemData)
}
