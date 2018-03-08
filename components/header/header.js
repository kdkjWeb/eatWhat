const app = getApp();
Component({
  properties: {
    
  },
  data:{
    index:"10",
    isShow: true,
    otherList: ['成员列表', '本群商家', '帐薄详情', '退出该群']
  },
  ready: function (e) {
    this.setData({
      index: app.globalData.headerIndex
    })
  },
  methods:{
    
    //点击期望早餐
    breakfast(e){
      console.log('期望早餐');
      app.globalData.headerIndex = 0;
      this.setData({
        index: app.globalData.headerIndex,
      });
      wx:wx.navigateTo({
        url: '../lunch/lunch',
      })

    },
    //点击新建商家
    business(){
      console.log('新建商家')
      app.globalData.headerIndex = 1;
      this.setData({
        index: app.globalData.headerIndex,
      })
      wx: wx.navigateTo({
        url: '../newVeg/newVeg',
      })
    },
    //点击其他
    other(){
      console.log('其他')
      app.globalData.headerIndex = 2;
      this.setData({
        index: app.globalData.headerIndex,
        isShow: !this.data.isShow
      })
    },
    //点击其他下面的选项
    otherS(e){
      let index = e.currentTarget.dataset.index;
      switch(index){
        case 0:
        console.log('成员列表');
        wx.navigateTo({
          url: '../member/member',
        })
        break;
        case 1:
        console.log('本群商家');
        wx.navigateTo({
          url: '../localMerchants/localMerchants',
        })
        break;
        case 2:
        console.log('帐薄详情');
        wx.navigateTo({
          url: '../localBook/localBook',
        })
        break;
        case 3:
        console.log('退出该群');
        break;
      }
    }
  }
})