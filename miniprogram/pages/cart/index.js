// miniprogram/pages/cart/index.js
const db = wx.cloud.database({
  env: 'http-product'
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartProduct: [{
      img: '',
      title: '',
      name: '',
      type: '',
      price: ''
    }],
    products: []
  },
  go() {
    wx.switchTab({
      url: '../index/index'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ce49f32d66f474c5b3a024e/emup/cart',
      data: {},
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        // console.log(result)
        this.setData({
          products: result.data.data.products
        })
      },
      fail: () => { },
      complete: () => { }
    });

    let that = this
    db.collection('cart').get({
      success(res) {
        console.log(res.data)
        that.setData({
          cartProduct:res.data
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