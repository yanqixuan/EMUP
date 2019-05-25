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
    // let h = now.getHours();
    // let m = now.getMinutes();
    // let s = now.getSeconds();
    let time = now.getTime();
    let time1 = now.setHours(7,0,0);
    let time2 = now.setHours(13,0,0);
    let time3 = now.setHours(20,0,0);
    if(time<time1){
      let hour = (time-time1)/3600000;
      let minute = (time-hour*3600000)/60000;
      let second = (time-hour*3600000-minute*60000);
      this.setData({
        active:2,
        hour,
        minute,
        second
      })
    } else if (time<time2){
      let hour = (time-time1)/3600000;
      let minute = (time-hour*3600000)/60000;
      let second = (time-hour*3600000-minute*60000);
      this.setData({
        active:0,
        hour,
        minute,
        second
      })
    } else if (time<time3){
      let hour = (time-time1)/3600000;
      let minute = (time-hour*3600000)/60000;
      let second = (time-hour*3600000-minute*60000);
      this.setData({
        active:1,
        hour,
        minute,
        second
      })
    }

    console.log(now.getTime());
    console.log(now.getMinutes());
    console.log(time1,time2,time3,time);
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