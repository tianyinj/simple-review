// pages/list/review-list.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id : '',
    reviews : []
  },

  getMatches(string, regex) {
    var matches = [];
    var match;
    while(match = regex.exec(string)) {
      matches.push(match[1]);
    }
  return matches;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(item) {
    if (!item.id) return
    this.setData({ id: item.id })

    return app.parser.readAll(this.data.id)
      .then(d => {
        var reg = /href="https:\/\/movie\.douban\.com\/review\/(.*)<\/a><\/h2>/g;
        var matches = this.getMatches(d.data, reg)
        var reviews = []
        for (var i=0; i<matches.length; i++){
          var obj = matches[i].split(/\/">/)
          reviews.push({review_id:obj[0], title:obj[1]})
        }
        this.setData({reviews: reviews})
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