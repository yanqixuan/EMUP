// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database({
  env: 'http-product'
})
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const _id = event.id;
  await db.collection('cart').doc(_id).remove()
  return {
    _id,
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}