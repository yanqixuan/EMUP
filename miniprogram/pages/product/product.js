// miniprogram/pages/product/product.js
const db = wx.cloud.database({
  env: 'http-product'
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
        id: '1',
        img: [
          'http://p.qpic.cn/qqumall/0/15373333205ba1d8486749e.jpg/slt01',
          '//p.qpic.cn/qqumall/0/15373333455ba1d861bfdc5.jpg/slt01',
          '//p.qpic.cn/qqumall/0/15373333615ba1d8713abe8.jpg/slt01'
        ],
        name: '歪瓜出品6包100抽本色抽纸家用纸巾',
        num: '3.9万人已付款',
        price: '9.99',
        oldPrice: '19.80',
        info: {
          postage: '包邮(部分地区)',
          type: '6包/提 1个',
          server: [
            '正版授权', '7天退换', '批量抽检'
          ]
        },
        shop:{
          img:'https://p.qpic.cn/qqumall/0/15280955515b14e33f40ce5.png/0',
          name:'歪瓜出品旗舰店',
          introduce:'歪瓜出品 必属精品'
        },
        evaluate:{
          num:'26453',
          percent:'98.00%'
        },
        promise:{
          img:'//imgcache.gtimg.cn/ACT/svip_act/act_img/public/201808/m1535464484_guarantee-sell.png'
        },
        details:[
          '//p.qpic.cn/qqumall/0/15373331635ba1d7ab2c290.jpg/0',
          '//p.qpic.cn/qqumall/0/15373331635ba1d7ab1e6ff.jpg/0',
          '//p.qpic.cn/qqumall/0/15373331635ba1d7ab17ee8.jpg/0',
          '//p.qpic.cn/qqumall/0/15373331635ba1d7ab2050e.jpg/0',
          '//p.qpic.cn/qqumall/0/15373331635ba1d7ab250fc.jpg/0',
          '//p.qpic.cn/qqumall/0/15373331635ba1d7ab34047.jpg/0',
          '//p.qpic.cn/qqumall/0/15373331635ba1d7ab364a7.jpg/0',
          '//p.qpic.cn/qqumall/0/15453596065c1c50f6f1128.jpg/0'
        ],
        empty:false
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let id = wx.getStorageSync('id');
    // console.log(id);
    // console.log(options.id)
    let that = this;
    db.collection('productLIst').where({
      id: options.id
    })
      // // console.log(productList);
      .get({
        success(res) {
          console.log(res.data)
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