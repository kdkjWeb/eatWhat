//index.js
//获取应用实例
const app = getApp();
const $v = app.globalData;
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
  //获取群列表
  groupList(){
    wx.request({
      url: $v.appPath +'/pc_crowd/s_my_crowd',
      method:"GET",
      data:{
        uid: $v.uid
      },
      success:(res)=>{
        if(res.data.code == 0) {
            console.log(res.data.code);
        }else {
          wx.showModal({
            title: '提示:',
            content: res.data.msg,
            showCancel: false
          })
        }
      }
    })
  },
  //点击群，跳转群内操作
  toGroup(){
    wx.navigateTo({
      url: '../group/group',
    })
  },
  onLoad:function(){
    var timer = setInterval(()=>{
      if ($v.uid) {
        clearInterval(timer);
        this.groupList();
      }
      
    },10);
    
  },
  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    
  }
})
