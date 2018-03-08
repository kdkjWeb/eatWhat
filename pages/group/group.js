// pages/group/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalShow: false,
    inputList: [{
      textContent: "群定投票吗？",     //text 值
      inputType: "text" //"labelInput"带有label的input  "select"选择框  "text"提示信息  "input"不带有label的input 默认text
    }],
      groupName: '烤鸭组',
      businessName: '世纪城北京烤鸭',
      startTime: '17:30',
      endTime: '19:30',
      all: '300',
      average: '50',
      userList: [
        {
          id: '01',
          name: '张三'
        }, {
          id: '02',
          name: '李四'
        }, {
          id: '03',
          name: '王五'
        }, {
          id: '04',
          name: '张三'
        }, {
          id: '05',
          name: '李四'
        }, {
          id: '06',
          name: '王五'
        }
      ],
      num: 11
  },

  //点击投票按钮
  vote(){
    console.log('你点击了投票')
  },
  // 点击确定按钮
  success(){
    this.setData({
      modalShow: true
    })
  },
  //点击修改按钮
  canel(){

  },
  //点击弹出框的确定按钮
  myeventBox(){
    console.log('弹出框的确定按钮')
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