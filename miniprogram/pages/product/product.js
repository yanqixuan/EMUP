// miniprogram/pages/product/product.js
import Toast from '../dist/toast/toast';
const db = wx.cloud.database({
  env: 'http-product'
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    _id:'',
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
  add(){
    console.log('tiao')
    wx.switchTab({
      url: '../cart/index'
    });
  },
  addProduct(){
    // let that = this;
    // console.log(this.data._id)
    wx.cloud.callFunction({
      name:'addProduct',
      data:{
        _id:this.data._id
      },
      success(res){
        Toast.success('加入成功');
        // console.log("yes",res.result)
        // console.log(res.result.res)
      },
      fail:console.error
    })
  },
  onLoad: function (options) {
    // console.log(this.data._id)
    // console.log(options.id)
    let that = this;
    db.collection('productList')
      .where({
        _id: options.id
      })
      .get({
        success(res) {
          let result = res.data[0]
          // console.log(res.data[0])
          that.setData({
            _id:options.id,
            img: result.img,
            name: result.name,
            num: result.num,
            price: result.price,
            oldPrice: result.oldPrice,
            info: result.info,
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