// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database({
  env:'http-product'
})
// 云函数入口函数
exports.main = async (event, context) => {
  console.log("111111111111111111111",event)
  const wxContext = cloud.getWXContext()
  const __id=event._id;
  let res = await db.collection('productList').where({
    _id:__id
  }).get()
  const name = res.data[0].name;
  const type = res.data[0].info.type;
  const price = res.data[0].price;
  const title = res.data[0].info.shop.name;

  let resAdd = await db.collection('cart').add({
    data:{
      _id:__id,
      name,
      type,
      price,
      title
    }
  })

  return {
    resAdd,
    res,
    // __id,
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}