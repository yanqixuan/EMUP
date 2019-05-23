const app = getApp()
Page({
  data:{
    inputShowed:false,
    headImgUrl:[],
    titleTabBar:[],
    msTitle:[],
    hotGroup:[],
    goodProductList:[],
    productList:[]
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
  }
})