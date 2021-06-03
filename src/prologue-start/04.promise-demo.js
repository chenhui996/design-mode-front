function loadImg(src) {
  let promise = new Promise(function (resolve, reject) {
    let img = document.createElement('img')
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject('some error')
    }
    img.src = src
  })
  return promise
}

let src = 'https://www.baidu.com/img/padpc_5a6eece295f587afa0f7b8f998670870.png'
let result = loadImg(src)

result
  .then(function (img) {
    // part1
    alert(`width: ${img.width}`)
    return img
  })
  .then((img) => {
    // part2
    alert(`height: ${img.height}`)
    return img
  })
  .catch((err) => {
    alert(err)
  })
