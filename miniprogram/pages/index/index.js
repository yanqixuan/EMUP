const app = getApp()
Page({
  data: {
    Height:0,
    inputShowed: false,
    headImg: ['../../images/sailiya.png','../../images/juhuasuan.png'],
    titleTabBar: [],
    titleTabBarImg:[
      {
        img:'../../images/icon/icon-test.png',
        text:'9.9起'
      },
      {
        img:'../../images/icon/icon-test_1.png',
        text:'新品会'
      },
      {
        img:'../../images/icon/icon-test_2.png',
        text:'大家买'
      },
      {
        img:'../../images/icon/icon-test_3.png',
        text:'手办营'
      },
    ],
    msTitle: [],
    hotGroup: [],
    goodProductList: [],
    productList: [],
    active: 0,
    hour: 0,
    minute: 0,
    second: 0,

  },
  imgHeight(e) {
    var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
    var imgh = e.detail.height;//图片高度
    var imgw = e.detail.width;//图片宽度
    var swiperH = winWid * imgh / imgw + 'px'
    console.log(e, winWid, swiperH)
    this.setData({
      Height: swiperH
    })
  },
  time() {
    let now = new Date();
    let time = now.getTime();
    let time1 = now.setHours(7, 0, 0);
    let time2 = now.setHours(13, 0, 0);
    let time3 = now.setHours(20, 0, 0);
    if (time < time1) {
      let hour = parseInt((time1 - time) / 3600000);
      let minute = parseInt((time1 - time - hour * 3600000) / 60000);
      let second = parseInt((time1 - time - hour * 3600000 - minute * 60000) / 1000);
      this.setData({
        // active: 2,
        hour,
        minute,
        second
      })
    } else if (time < time2) {
      let hour = parseInt((time2 - time) / 3600000);
      let minute = parseInt((time2 - time - hour * 3600000) / 60000);
      let second = parseInt((time2 - time - hour * 3600000 - minute * 60000) / 1000);
      this.setData({
        // active: 0,
        hour,
        minute,
        second
      })
    } else if (time < time3) {
      let hour = parseInt((time3 - time) / 3600000);
      let minute = parseInt((time3 - time - hour * 3600000) / 60000);
      let second = parseInt((time3 - time - hour * 3600000 - minute * 60000) / 1000);
      this.setData({
        // active: 1,
        hour,
        minute,
        second
      })
    } else {
      time1 += 24 * 3600000;
      let hour = parseInt((time1 - time) / 3600000);
      let minute = parseInt((time1 - time - hour * 3600000) / 60000);
      let second = parseInt((time1 - time - hour * 3600000 - minute * 60000) / 1000);
      this.setData({
        // active: 2,
        hour,
        minute,
        second
      })
    }
  },
  active() {
    let now = new Date();
    let time = now.getTime();
    let time1 = now.setHours(7, 0, 0);
    let time2 = now.setHours(13, 0, 0);
    let time3 = now.setHours(20, 0, 0);
    if (time < time1) {
      this.setData({
        active: 2
      })
    } else if (time < time2) {
      this.setData({
        active: 0
      })

    } else if (time < time3) {
      this.setData({
        active: 1
      })
    } else {
      this.setData({
        active: 2
      })
    }
  },
  toProduct(e) {
    let id = e.currentTarget.dataset.id;
    // console.log(e)
    wx.navigateTo({
      url: '../product/product?id=' + id
    });
  },
  onLoad() {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ce49f32d66f474c5b3a024e/emup/index',
      data: {},
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        this.setData({
          inputShowed: result.data.data.inputShowed,
          headImgUrl: result.data.data.headImgUrl,
          titleTabBar: result.data.data.titleTabBar,
          msTitle: result.data.data.msTitle,
          hotGroup: result.data.data.hotGroup,
          goodProductList: result.data.data.goodProductList,
          productList: result.data.data.productList,
        })
      },
      fail: () => { },
      complete: () => { }
    });
    setInterval(() => {
      this.time();
    }, 1000);
    this.active();
  }
})