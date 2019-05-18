// miniprogram/pages/group/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: "",
    curId: "",
    leftList: [
      {
        name: '',
        select: true,
        list: [
          {
            title: "推荐",
            id: "tuijian"
          }
        ]
      },
      {
        name: "作品",
        select: false,
        list: [
          {
            title: "影视",
            id: "yinshi"
          },
          {
            title: "形象",
            id: "xingxiang"
          },
          {
            title: "动漫",
            id: "dongman"
          },
          {
            title: "文化",
            id: "wenhua"
          },
          {
            title: "潮流/综艺",
            id: "chaoliu"
          },
          {
            title: "游戏",
            id: "youxi"
          }
        ]
      },
      {
        name: "商品",
        select: false,
        list: [
          {
            title: "男女服饰",
            id: "nannvfushi"
          },
          {
            title: "数码配件",
            id: "shumapeijian"
          },
          {
            title: "生活家居",
            id: "shenghuojiaju"
          },
          {
            title: "鞋帽配饰",
            id: "xiemaopeoshi"
          },
          {
            title: "玩具手办",
            id: "wanjushouban"
          },
          {
            title: "箱包收纳",
            id: "xiangbaoshouna"
          },
          {
            title: "首饰配件",
            id: "shoushipeijian"
          },
          {
            title: "美妆个护",
            id: "meizhuanggehu"
          },
          {
            title: "休闲食品",
            id: "xiuxianshipin"
          },
          {
            title: "文体图书",
            id: "wentitushu"
          },

        ]
      }
    ],
    rightList: [
      {
        title: "—— 独家正品 ——",
        id: "tuijian",
        isProduct: false,
        list: [
          {
            img: 'http://p.qpic.cn/qqumall/0/15244568995add5dc3a1f4b.png/0',
            name: '怪奇鹅'
          },
          {
            img: 'http://p.qpic.cn/qqumall/0/15244568995add5dc3a1f4b.png/0',
            name: '怪奇鹅'
          },
          {
            img: 'http://p.qpic.cn/qqumall/0/15244568995add5dc3a1f4b.png/0',
            name: '怪奇鹅'
          }
        ]
      },
      {
        title: "—— 人气类目 ——",
        id: "人气类目",
        isProduct: true,
        list: [
          {
            img: 'http://imgcache.gtimg.cn/ACT/svip_act/act_img/public/201809/1535964204_bag.png',
            name: '背包'
          },
          {
            img: 'http://imgcache.gtimg.cn/ACT/svip_act/act_img/public/201809/1535964204_bag.png',
            name: '背包'
          },
          {
            img: 'http://imgcache.gtimg.cn/ACT/svip_act/act_img/public/201809/1535964204_bag.png',
            name: '背包'
          },
          {
            img: 'https://p.qpic.cn/qqumall/0/15542058905ca34cc243426.png/0',
            name: 'U形枕'
          },
          {
            img: 'https://p.qpic.cn/qqumall/0/15542058905ca34cc243426.png/0',
            name: 'U形枕'
          },
          {
            img: 'https://p.qpic.cn/qqumall/0/15542058905ca34cc243426.png/0',
            name: 'U形枕'
          },
        ]
      },
      {
        title: "—— 影视 ——",
        id: "yinshi",
        list: [
          {
            img: 'http://p.qpic.cn/qqumall/0/15244568995add5dc3a1f4b.png/0',
            name: '怪奇鹅'
          },
          {
            img: 'http://p.qpic.cn/qqumall/0/15244568995add5dc3a1f4b.png/0',
            name: '怪奇鹅'
          },
          {
            img: 'http://p.qpic.cn/qqumall/0/15244568995add5dc3a1f4b.png/0',
            name: '怪奇鹅'
          },
          {
            img: 'http://p.qpic.cn/qqumall/0/15244568995add5dc3a1f4b.png/0',
            name: '怪奇鹅'
          },
          {
            img: 'http://p.qpic.cn/qqumall/0/15244568995add5dc3a1f4b.png/0',
            name: '怪奇鹅'
          },
          {
            img: 'http://p.qpic.cn/qqumall/0/15244568995add5dc3a1f4b.png/0',
            name: '怪奇鹅'
          },
          {
            img: 'http://p.qpic.cn/qqumall/0/15244568995add5dc3a1f4b.png/0',
            name: '怪奇鹅'
          },
          {
            img: 'http://p.qpic.cn/qqumall/0/15244568995add5dc3a1f4b.png/0',
            name: '怪奇鹅'
          },
          {
            img: 'http://p.qpic.cn/qqumall/0/15244568995add5dc3a1f4b.png/0',
            name: '怪奇鹅'
          },
          {
            img: 'http://p.qpic.cn/qqumall/0/15244568995add5dc3a1f4b.png/0',
            name: '怪奇鹅'
          },
          {
            img: 'http://p.qpic.cn/qqumall/0/15244568995add5dc3a1f4b.png/0',
            name: '怪奇鹅'
          },
          {
            img: 'http://p.qpic.cn/qqumall/0/15244568995add5dc3a1f4b.png/0',
            name: '怪奇鹅'
          }
        ]
      }
    ]
  },
  switch(event) {
    // console.log(event);
    this.setData({
      toView: event.target.dataset.id,
      curId: event.target.dataset.id
    })
    // console.log(this.data.curId,event.target.dataset.id,this.data.leftList);
  },
  scrollTab(event) {
    // console.log(event);
    let st = event.detail.scrollTop
    // console.log(st)
    if(st>396)
    {
      this.setData({
        curId: "yinshi"
      })
    } else if(st>0) {
      this.setData({
        curId: 'tuijian'
      })
    }
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
    this.setData({
      curId:'tuijian'
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