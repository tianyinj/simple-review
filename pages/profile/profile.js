const app = getApp()

Page({
  data: {
    my_reviews: []
  },

  toggle_collapse(e){
    var index = e.currentTarget.dataset.index
    var my_reviews = this.data.my_reviews
    my_reviews[index].collapse = !my_reviews[index].collapse
    this.setData({my_reviews: my_reviews})
  },

  onLoad(item){
    var my_reviews = wx.getStorageSync('my_reviews')
    console.log(my_reviews)
    if (!my_reviews) my_reviews = []

    for (var i=0; i<my_reviews.length; i++){
      my_reviews[i].collapse = true
    }
    
    this.setData({ my_reviews: my_reviews })

  }
})