// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database({
  env: 'http-product'
})
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const __id = event._id;
  let res = await db.collection('productList').where({
    _id: __id
  }).get()

  let cart = await db.collection('cart')

  let resSelect = await cart.where({
    _id: __id
  }).get()
  if (resSelect.data.length === 0) {
    const name = res.data[0].name;
    const type = res.data[0].info.type;
    const price = res.data[0].price;
    const title = res.data[0].info.shop.name;

    // let resAdd = 
    await cart.add({
    data: {
      _id: __id,
      name,
      type,
      price,
      title,
      num: 1
    }
    })

  } else {
    await cart.where({
      _id: __id
    }).update({
      data: {
        num: resSelect.data[0].num + 1
      }
    })
  }



  return {
    // resAdd,
    // resSelect,
    // res,
    __id,
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}