// pages/review-content/review-content.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: ''
  },

  getMatches(string, regex) {
    var matches = [];
    var match;
    while (match = regex.exec(string)) {
      matches.push(match);
    }
    return matches;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(item) {
    console.log(item)
    if (!item.id) return
    this.setData({ id: item.id })

    return app.parser.readOne(this.data.id)
      .then(d => {
        var reg = /<p>(.*)<\/p>/g;
        var matches = this.getMatches(d.data, reg)
        wx.setStorageSync("file", matches)
      })
      .catch(e => {
        console.error(e)
      })
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