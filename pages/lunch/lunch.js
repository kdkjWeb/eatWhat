// pages/lunch/lunch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: false,
    selectVal:'',
    selectList:[{
      name:"王小二",
      id:"1"
    }, {
      name: "王小二",
      id: "1"
      }, {
        name: "王小二",
        id: "1"
    }, {
      name: "王小二",
      id: "1"
    },]
  },
  selectShow: function () {
    this.setData({
      select: !this.data.select
    })
  },
  selectListValue: function (e) {
    var index = e.target.dataset.index;
    this.setData({
      selectVal: this.data.selectList[index].name,
      select: !this.data.select
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
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