//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imageList: [],
    userInfo: {},
    hasUserInfo: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log("aaaaa")
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        imageList: []
      })
    }
  },

  // 上传图片控件事件
  chooseImage(e){
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  // 原图和压缩后的图
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log(res.tempFilePaths)
        const imageSet = this.data.imageList.concat(res.tempFilePaths)
        // 自定义设置限制只能上传3张图片
        this.data.imageList = imageSet.length <= 3 ? imageSet : imageSet.slice(0, 3)
        $digest(this)
      }
    })
  }
 
})
