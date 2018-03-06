// pages/search/search.js
//获取应用实例
const app = getApp();

Page({
  data: {
    modalShow: false,
    inputList: [{
      textContent: "群名称",     //text 值
      inputType: "text" //"labelInput"带有label的input  "select"选择框  "text"提示信息  "input"不带有label的input 默认text
    }]
  },
  //弹框的出现
  addGroup(e) {
    var id = e.target.dataset.id;
    this.setData({
      modalShow: true
    })
  },
  //子组件返回值的操作
  myeventBox(e) {
    console.log(e.detail);
  },
  //点击跳转搜索框
  search() {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  onLoad: function () {

  },
  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {

  }
})
