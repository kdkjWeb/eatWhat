// pages/localBook/localBook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalShow: false,
    selectShow:false,
    inputList:[],
    title:"",
    payMentList:[{
      url:"../../static/indexB.png",
      name:"王小二",
      data:"2017年11月11号",
      charge:"100",
      pay:"30",
      account:"70"
    }, {
      url: "../../static/indexB.png",
      name: "王小二",
      data: "2017年11月11号",
      charge: "100",
      pay: "30",
      account: "70"
      }, {
        url: "../../static/indexB.png",
        name: "王小二",
        data: "2017年11月11号",
        charge: "100",
        pay: "30",
        account: "70"
    }, {
      url: "../../static/indexB.png",
      name: "王小二",
      data: "2017年11月11号",
      charge: "100",
      pay: "30",
      account: "70"
      }, {
        url: "../../static/indexB.png",
        name: "王小二",
        data: "2017年11月11号",
        charge: "100",
        pay: "30",
        account: "70"
    }, {
      url: "../../static/indexB.png",
      name: "王小二",
      data: "2017年11月11号",
      charge: "100",
      pay: "30",
      account: "70"
      }, {
        url: "../../static/indexB.png",
        name: "王小二",
        data: "2017年11月11号",
        charge: "100",
        pay: "30",
        account: "70"
    }, {
      url: "../../static/indexB.png",
      name: "王小二",
      data: "2017年11月11号",
      charge: "100",
      pay: "30",
      account: "70"
      }, {
        url: "../../static/indexB.png",
        name: "王小二",
        data: "2017年11月11号",
        charge: "100",
        pay: "30",
        account: "70"
      }]
  },
  // 账户操作
  selectShowF:function(){
    this.setData({
      selectShow: !this.data.selectShow
    })
  },
  //充值
  toCharge(){
    this.setData({
      selectShow: !this.data.selectShow
    });
    var json = [{
      label: "人员",              //label 的名字 最多4个字
      placeholder: "",  //placeholder的值
      inputType: "select", //"labelInput"带有label的input  "select"选择框  "text"提示信息  "input"不带有label的input 默认text
      selectList: [{
        name:"王小二",
        id:1
      }, {
        name: "王小二1",
        id: 1
        }, {
          name: "王小二2",
          id: 1
      }, {
        name: "王小二3",
        id: 1
      }],  //选择框 内部循环列表  当type为select时必须要传当前值
      },{
        label: "金额",              //label 的名字 最多4个字
        placeholder: "单位：元",  //placeholder的值
        inputType: "labelInput", //"labelInput"带有label的input  "select"选择框  "text"提示信息  "input"不带有label的input 默认text
      }];
    this.setData({
      modalShow: true,
      inputList: json
    })
  },
  //提现
  recharge(){
    this.setData({
      selectShow: !this.data.selectShow
    });
    var json = [{
      label: "金额",              //label 的名字 最多4个字
      placeholder: "单位：元",  //placeholder的值
      inputType: "labelInput", //"labelInput"带有label的input  "select"选择框  "text"提示信息  "input"不带有label的input 默认text
    }];
    this.setData({
      modalShow: true,
      inputList: json
    })
  },
  //组件返回值
  myeventBox(e) {
    console.log(e.detail);
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