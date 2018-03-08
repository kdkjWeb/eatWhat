//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    modalShow:false,
    inputList: [{
      textContent: "",     //text 值
      label: "",              //label 的名字 最多4个字
      placeholder: "新建群名称",  //placeholder的值
      inputType: "input", //"labelInput"带有label的input  "select"选择框  "text"提示信息  "input"不带有label的input 默认text
      selectList: [],  //选择框 内部循环列表  当type为select时必须要传当前值
    }]
  },
  //弹框的出现
  layerShow(){
    this.setData({
      modalShow:true
    })
  },
  //子组件返回值的操作
  myeventBox(e){
    console.log(e.detail);
  },
  //点击跳转搜索框
  search(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  //点击群，跳转群内操作
  toGroup(){
    wx.navigateTo({
      url: '../group/group',
    })
  },
  onLoad:function(){
    
  },
  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    
  }
})
