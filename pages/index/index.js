//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  tosat: function() {
    wx.navigateTo({
      url: '../start/start'
    })
  }
})
