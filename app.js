//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录

    wx.getUserInfo({
      success: res => {
        this.login(res.encryptedData, res.iv);
        this.globalData.wxLogin = {
          encryptedData: res.encryptedData,
          iv: res.iv
        }
      },
      fail: res => {
        this.fetch();
      }
    });
    // 发送 res.code 到后台换取 openId, sessionKey, unionId

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          console.log(res);
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(this.globalData.userInfo);
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      },
      fail: res => {
      }
    })
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
            wx.getUserInfo({
              success: res => {
                that.login(res.encryptedData, res.iv);
                that.globalData.wxLogin = {
                  encryptedData: res.encryptedData,
                  iv: res.iv
                }
              },
              fail: res => {
                that.fetch();
              }
            });
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
          }, fail: (res) => {}
        })
      }
    })
  },
  //调用后台 获取token；
  login: function (encryptedData, iv) {
    var that = this;
    wx.login({
      success: r => {
        var code = r.code;
        wx.request({
          url: this.globalData.appPath + 'login',
          method: "GET",
          data: {
            encryptedData: encryptedData,
            iv: iv,
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
              that.register(encryptedData, iv);

            }
          },
          fail: function (res) {

          }
        })
      }
    })
  },
  register: function (encryptedData, iv) {
    var that = this;
    wx.login({
      success: r => {
        var code = r.code;
        wx.request({
          url: this.globalData.appPath + 'register',
          data: {
            encryptedData: encryptedData,
            iv: iv,
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
            that.login(encryptedData, iv);
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
          }
        }
      })
  },
  onLoad: function () {

  },
  globalData: {
    userInfo: null,
    uid:null,
    // appPath: "http://192.168.20.136:8082/",
    appPath: "http://192.168.20.111:8082/",
    token: '',
    headerIndex: "10", //群名header组件的index
  }
})