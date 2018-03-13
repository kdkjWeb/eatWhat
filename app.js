//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
    
    // 发送 res.code 到后台换取 openId, sessionKey, unionId
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           console.log(res.userInfo);
    //           console.log(this.globalData.userInfo);
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   },
    //   fail: res => {
    //   }
    // })
  },
  onShow:function(){
    // 登录
    this.login();
  },
  // 拉取授权信息
  fetch:function(){
    var that = this;
    wx.showModal({
      content: "吃什么小程序需要获取您的用户信息",
      showCancel: false,
      confirmText: "重新拉取",
      success: function (res) {
        wx.openSetting({
          success: (res) => {
              that.register();
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
          }, fail: (res) => {}
        })
      }
    })
  },
  //调用后台 获取token；
  login: function () {
    console.log(11111111);
    var that = this;
    wx.login({
      success: r => {
        var code = r.code;
        wx.request({
          url: that.globalData.appPath + 'login',
          method: "GET",
          data: {
            code: code,
            // password:'123'
          },
          success: function (res) {
            if (res.data.code == 0) {
              if (res.data.token) {
                var token = "globalData.token";
                that.globalData.token = res.data.token;
                that.check();
              }
            }
            if (res.data.code == "50010") {
          
            }
            if (res.data.msg == "10000") {
              that.register(); 
              return;
            }
          },
          fail: function (res) {

          }
        })
      }
    })
  },
  register: function () {
    var that = this;
    wx.login({
      success: r => {
        var code = r.code;
        wx.getUserInfo({
          success: function (res) {
            wx.request({
              url: that.globalData.appPath + 'register',
              data: {
                encryptedData: res.encryptedData,
                iv: res.iv,
                code: code
              },
              success: function (res) {
                if (res.data.code != 0) {
                  // 错误提示
                  wx.hideLoading();
                  wx.showModal({
                    title: '提示:',
                    content: res.data.msg,
                    showCancel: false
                  })
                  return;
                }
                wx.hideLoading();
                that.login();
              }
            })
          },fail:function(){
            that.fetch()
          }
        })
      }
    })

  },
  check:function(){
    var that = this;
      wx.request({
        url: this.globalData.appPath + 'check-token',
        header: {
          cookie: 'JSESSIONID=' + that.globalData.token
        },
        data: {
          JSESSIONID: that.globalData.token
        },
        success: function (res) {
          if (res.data.code == 0) {
            that.globalData.uid = res.data.userInfo.id;
            that.globalData.userInfo = res.data.userInfo;
          }
        }
      })
  },
  // 通过时间戳获取时间
  times:function(val,date){
    var time = new Date(val);
    var year = time.getFullYear();
    var month = time.getMonth() >= 10 ? (time.getMonth() + 1) : '0' + (time.getMonth() + 1);
    var day = time.getDate() >= 10 ? time.getDate() : '0' + time.getDate();
    var hour = time.getHours() >= 10 ? time.getHours() : '0' + time.getHours();
    var min = time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes();
    var sec = time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds();
    if(date == "date") {
      return (year + "-" + month + "-" + day);
    }else if(date == "time") {
      return (hour + ":" + min);
    }else if (date == "fulldate") {
      return (year + "-" + month + "-" + day + " " + hour + ":" + min);
    }
    
  },
  onLoad: function () {
    
  },
  globalData: {
    userInfo: null,
    uid:null,
    groupId:"112",  //测试群号，后期设置为null
    crowdName:"",
    crowdMoney:"",
    // appPath: "http://192.168.20.136:8082/",
    appPath: "http://192.168.20.108:8082/",
    socketPath:"ws://192.168.20.108:8082/",
    // appPath: "http://192.168.20.8:8080/",
    token: '',
    pageSize:0
  }
})