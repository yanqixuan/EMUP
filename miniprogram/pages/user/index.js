// miniprogram/pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order:[
      {
        src:'../../images/icon/daifukuan.png',
        text:'待付款'
      },
      {
        src:'../../images/icon/daifahuo.png',
        text:'待发货'
      },
      {
        src:'../../images/icon/daishouhuo.png',
        text:'待收货'
      },
      {
        src:'../../images/icon/wodepingjia.png',
        text:'评价'
      },
      {
        src:'../../images/icon/icon5.png',
        text:'退换货'
      }
    ],
    otherLists:[
      {
        src:'../../images/icon/shoucang.png',
        title:'我的收藏'
      },
      {
        src:'../../images/icon/tubiao201.png',
        title:'地址管理'
      },
      {
        src:'../../images/icon/kaquan.png',
        title:'优惠卷'
      },
      {
        src:'../../images/icon/VIP.png',
        title:'SVIP特权'
      },
      {
        src:'../../images/icon/dianhua1.png',
        title:'电话客服'
      },
      {
        src:'../../images/icon/message.png',
        title:'消息中心'
      },
    ],
    helpLists:[
      {
        src:'../../images/icon/shiyongbangzhu1.png',
        title:'帮助中心'
      },
      {
        src:'../../images/icon/tousu.png',
        title:'侵权投诉'
      },
      {
        src:'../../images/icon/yijianfankui.png',
        title:'意见反馈'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var reqTask = wx.request({
      url: 'https://www.easy-mock.com/mock/5ce49f32d66f474c5b3a024e/emup/',
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        console.log(result)
      },
      fail: () => { },
      complete: () => { }
    });
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