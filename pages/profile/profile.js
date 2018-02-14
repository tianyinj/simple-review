const app = getApp()

Page({
  data: {
    my_reviews: [],

  },

  onLoad(item){
    var my_reviews = wx.getStorageSync('my_reviews')
    console.log(my_reviews)
    if (!my_reviews) my_reviews = []
    this.setData({ my_reviews: my_reviews})

  }
})