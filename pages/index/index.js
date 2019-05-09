//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    loadingText: '上拉加载更多',
    tableList: [{
      id: 1,
      title: '工单标题',
      createTime: '2019-10-01',
      status: '已接收'
    }, {
      id: 2,
      title: '工单标题',
      createTime: '2019-10-01',
      status: '已接收'
    }, {
      id: 3,
      title: '工单标题',
      createTime: '2019-10-01',
      status: '已接收'
    }, {
      id: 4,
      title: '工单标题',
      createTime: '2019-10-01',
      status: '已接收'
    }, {
      id: 5,
      title: '工单标题',
      createTime: '2019-10-01',
      status: '已接收'
    }, {
      id: 6,
      title: '工单标题',
      createTime: '2019-10-01',
      status: '已接收'
    }, {
      id: 7,
      title: '工单标题',
      createTime: '2019-10-01',
      status: '已接收'
    }],
    pageNum: 0,
    pageSize: 10,
    noMore: false
  },
  //事件处理函数
  onLoad: function() {
    this.getTableList();
  },

  // 无限加载
  onReachBottom() {
    this.getTableList();
  },

  // 下拉刷新
  onPullDownRefresh() {
    this.pageNum = 0;
    this.getTableList();
    wx.stopPullDownRefresh();
  },

  getTableList() {
    if (this.data.noMore) {
      return;
    }

    const params = {
      pageSize: this.data.pageSize,
      pageNum: this.data.pageNum
    }

    this.setData({
      loadingText: '加载中...'
    })
  }
})