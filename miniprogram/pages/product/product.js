// miniprogram/pages/product/product.js
const db = wx.cloud.database({
  env: 'http-product'
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: [],
    name: '',
    num: '',
    price: '',
    oldPrice: '',
    info: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let id = wx.getStorageSync('id');
    // console.log(id);
    console.log(options.id)
    let that = this;
    db.collection('productList')
      .where({
        _id: options.id
      })
      .get({
        success(res) {
          let result = res.data[0]
          console.log(res.data[0])
          that.setData({
            img: result.img,
            name: result.name,
            num: result.num,
            price: result.price,
            oldPrice: result.oldPrice,
            info: result.info,
            // shop: result.shop,
            // evaluate: result.evaluate,
            // promise: result.promise,
            // details: result.details,
            // empty: result.empty
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})