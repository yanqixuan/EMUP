const app = getApp()
Page({
  data:{
    inputShowed:false,
    headImgUrl:[],
    titleTabBar:[],
    msTitle:[],
    hotGroup:[],
    goodProductList:[],
    productList:[],
    active:0,
    hour:0,
    minute:0,
    second:0
  },
  time(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    if(h<7){
      this.setData({
        active:2,
        hour:h-20-1,
        minute:60-m,
        second:60-s
      })
    } else if (h<13){
      this.setData({
        active:0,
        hour:h-7-1,
        minute:60-m,
        second:60-s
      })
    } else if (h<20){
      this.setData({
        active:1,
        hour:h-13-1,
        minute:60-m,
        second:60-s
      })
    }

    console.log(now.getTime());
    console.log(now.getMinutes());
  },
  onLoad(){
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ce49f32d66f474c5b3a024e/emup/index',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        this.setData({
          inputShowed:result.data.data.inputShowed,
          headImgUrl:result.data.data.headImgUrl,
          titleTabBar:result.data.data.titleTabBar,
          msTitle:result.data.data.msTitle,
          hotGroup:result.data.data.hotGroup,
          goodProductList:result.data.data.goodProductList,
          productList:result.data.data.productList,
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    this.time();
  }
})