// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database({
  env: 'http-product'
})
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let id = event.id;
  if (event.flag === 0) {
    await db.collection('cart').doc(id).update({
      data: {
        num: _.inc(-1)
      },
      fail: console.error
    })
  } else {
    await db.collection('cart').doc(id).update({
      data: {
        num: _.inc(1)
      },
      fail: console.error
    })
  }
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}