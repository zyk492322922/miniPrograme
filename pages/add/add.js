// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {
      phone: '',
      name: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  inputAuto(e) {
    const dataset = e.currentTarget.dataset;
    const name = dataset.name;
    const value = e.detail.value;
    const key = 'form.' + name;

    this.setData({
      [key]: value
    })

    console.log(this.data);
  },

  // 表单提交
  formSubmit() {
    const params = this.data.form;
  }
})