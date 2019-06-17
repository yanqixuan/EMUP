// miniprogram/pages/cart/index.js
const db = wx.cloud.database({
  env: 'http-product'
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:0,
    cartProduct: [{
      _id: '',
      picture: '',
      title: '',
      name: '',
      type: '',
      price: '',
      totalPrice:0,
      num: 1
    }],
    products: []
  },
  minus(event) {
    let cartProduct = this.data.cartProduct
    let index = event.target.dataset.index;
    cartProduct[index].num--;
    let id = event.target.id;
    let num = cartProduct[index].num;
    // let price = cartProduct[index].price * num;
    cartProduct[index].totalPrice =cartProduct[index].price* num
    this.setData({
      cartProduct
    })
    // console.log(event.target.id, event.target.dataset.index)

    // console.log(num)
    // console.log(this.data)
    wx.cloud.callFunction({
      name: 'changeNum',
      data: {
        flag: 0,
        id,
        index,
        num
      },
      success(res) {
        // console.log(res.result)
      }
    })
  },
  plus(event) {
    let cartProduct = this.data.cartProduct
    let index = event.target.dataset.index;
    cartProduct[index].num++;
    let id = event.target.id;
    let num = cartProduct[index].num;
    cartProduct[index].totalPrice =cartProduct[index].price* num
    this.setData({
      cartProduct
    })
    // console.log(event.target.id, event.target.dataset.index)

    // console.log(num)
    // console.log(this.data)
    wx.cloud.callFunction({
      name: 'changeNum',
      data: {
        flag: 1,
        id,
        index,
        num
      },
      success(res) {
        console.log(res.result.rrr.data)
      }
    })
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
    let promise = new Promise((resolve, reject) => {
      db.collection('cart').get({
        success(res) {
          // console.log(res.data)
          that.setData({
            cartProduct: res.data
          }),
            resolve()
        }
      })
    })
    promise.then(() => {
      let cartProduct = this.data.cartProduct
      for (let i = 0; i < cartProduct.length; i++) {
        cartProduct[i].totalPrice =cartProduct[i].price* cartProduct[i].num
      }
      this.setData({
        cartProduct,
        number:cartProduct.length
      })
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
    let that = this
    let promise = new Promise((resolve, reject) => {
      db.collection('cart').get({
        success(res) {
          // console.log(res.data)
          that.setData({
            cartProduct: res.data
          }),
            resolve()
        }
      })
    })
    promise.then(() => {
      let cartProduct = this.data.cartProduct
      for (let i = 0; i < cartProduct.length; i++) {
        cartProduct[i].totalPrice =cartProduct[i].price* cartProduct[i].num
      }
      this.setData({
        cartProduct,
        number:cartProduct.length
      })
    })
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