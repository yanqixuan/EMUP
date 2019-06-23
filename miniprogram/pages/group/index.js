// miniprogram/pages/group/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: "",
    curId: "",
    leftList: [],
    rightList: []
  },
  toProductList(event){
    // console.log(event.currentTarget.dataset.pid)
    let pid = event.currentTarget.dataset.pid
    wx.navigateTo({
      url: '../groupList/groupList?pid='+pid,
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  switch(event) {
    this.setData({
      toView: event.target.dataset.id,
      curId: event.target.dataset.id
    })
  },
  scrollTab(event) {
    // console.log(event);
    let st = event.detail.scrollTop
    // console.log(st)
    if (st > 3160) {
      this.setData({
        curId: "youxi"
      })
    } else if (st > 2612) {
      this.setData({
        curId: "chaoliuzongyi"
      })
    } else if (st > 2064) {
      this.setData({
        curId: "wenhua"
      })
    } else if (st > 1516) {
      this.setData({
        curId: "dongman"
      })
    } else if (st > 968) {
      this.setData({
        curId: "xingxiang"
      })
    } else if (st > 396) {
      this.setData({
        curId: "yinshi"
      })
    } else if (st > 0) {
      this.setData({
        curId: 'tuijian'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ce49f32d66f474c5b3a024e/emup/group',
      data: {},
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        // console.log(result.data.data.leftList)
        let leftList = result.data.data.leftList;
        let rightList = result.data.data.rightList;
        this.setData({
          leftList,
          rightList
        })
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
    this.setData({
      curId: 'tuijian'
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