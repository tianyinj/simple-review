// pages/review-content/review-content.js
var WxParse = require('../../utils/wxParse.js');
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: ''
  },

  onSave(){
    var that = this.data
    console.log(that)
    var my_reviews = wx.getStorageSync('my_reviews')
    if (!my_reviews) my_reviews = []
    console.log(my_reviews)
    var review = { review_id: this.data.id, title: this.data.title, 
        renderType: this.data.renderType,
        article: this.data.article}
    console.log(review)
    my_reviews.push(review)
    this.setData({my_reviews: my_reviews})
    wx.setStorageSync('my_reviews', my_reviews)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(item) {
    if (!item.id) return
    this.setData({ id: item.id, title: item.title })

    return app.parser.readOne(this.data.id)
      .then(d => {
        var start_idx = /<div id="link-report">/.exec(d.data).index;
        var end_idx = /<div class="main-author">/.exec(d.data).index;

        var str = d.data.substring(start_idx, end_idx)
        var that = this;
        WxParse.wxParse('article', 'html', str, that, 5);
        that = this;
        this.setData({ renderType: this.data.article.nodes[0].nodes[0].attr["data-original"] })
        this.setData({article: this.data.article.nodes[0].nodes[0].nodes})
        
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