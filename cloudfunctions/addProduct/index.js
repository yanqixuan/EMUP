// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database({
  env: 'http-product'
})
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const _id = event._id;
  let res = await db.collection('productList').where({  //在商品表中获取此id的商品信息
    _id
  }).get()

  let cart = await db.collection('cart')
  let resSelect = await cart.where({  //在购物车表中获取此id的商品信息
    _id
  }).get()
  if (resSelect.data.length === 0) {  //购物车无此id的商品，则添加此id的商品信息
    const name = res.data[0].name;
    const type = res.data[0].info.type;
    const price = res.data[0].price;
    const title = res.data[0].info.shop.name;
    const picture = res.data[0].picture;
    await cart.add({
    data: {
      _id,
      name,
      type,
      price,
      title,
      picture,
      num: 1
    }
    })
  } else {  //购物车存在此商品，数量+1
    await cart.where({
      _id
    }).update({
      data: {
        num: resSelect.data[0].num + 1
      }
    })
  }
  return {
    _id,
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}