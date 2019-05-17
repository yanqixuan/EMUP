// miniprogram/pages/group/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftList:[
      {
        name:'',
        list:["推荐"]
      },
      {
        name:"作品",
        list:[
          "影视","形象","动漫","文化","潮流/综艺","游戏"
        ]
      },
      {
        name:"商品",
        list:[
          "男女服饰","数码配件","生活家居","鞋帽配饰","玩具手办","箱包收纳","首饰配件","美妆个护","休闲食品","文体图书"
        ]
      }
    ],
    rightList:[
      {
        title:"独家正品",
        list:[
          {
            img:'http://p.qpic.cn/qqumall/0/15244568995add5dc3a1f4b.png/0',
            name:'怪奇鹅'
          },
          {
            img:'http://p.qpic.cn/qqumall/0/15244568995add5dc3a1f4b.png/0',
            name:'怪奇鹅'
          },
          {
            img:'http://p.qpic.cn/qqumall/0/15244568995add5dc3a1f4b.png/0',
            name:'怪奇鹅'
          }
        ]
      },
      {
        title:"人气类目",
        list:[
          {
            img:'http://imgcache.gtimg.cn/ACT/svip_act/act_img/public/201809/1535964204_bag.png',
            name:'背包'
          },
          {
            img:'http://imgcache.gtimg.cn/ACT/svip_act/act_img/public/201809/1535964204_bag.png',
            name:'背包'
          },
          {
            img:'http://imgcache.gtimg.cn/ACT/svip_act/act_img/public/201809/1535964204_bag.png',
            name:'背包'
          },
          {
            img:'https://p.qpic.cn/qqumall/0/15542058905ca34cc243426.png/0',
            name:'U形枕'
          },
          {
            img:'https://p.qpic.cn/qqumall/0/15542058905ca34cc243426.png/0',
            name:'U形枕'
          },
          {
            img:'https://p.qpic.cn/qqumall/0/15542058905ca34cc243426.png/0',
            name:'U形枕'
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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