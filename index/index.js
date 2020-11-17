Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    introduce: '',
    img: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '父组件',
    })
  },

  handeItemChange(e) {
    console.log('父组件接收数据', e)
    this.setData({
      name: e.detail.name,
      introduce: e.detail.introduce,
      img: e.detail.img
    })
  }
})