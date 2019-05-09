// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      title: '工单标题',
      createTime: '2019-10-01',
      status: '处理中',
      imgUrls: ['http://qianlong-test.shoujidai.com/2018/04/12/23327906-4771-4303-86be-9e375befeb2b.jpg']
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getOrderDetail(options.id)
  },

  getOrderDetail(id) {
    const params = {
      id
    }
  },

  previewImg(event) {
    const currentImg = event.currentTarget.dataset.url;

    wx.previewImage({
      current: currentImg, // 当前显示图片的http链接
      urls: this.data.detail.imgUrls // 需要预览的图片http链接列表
    })
  }
})