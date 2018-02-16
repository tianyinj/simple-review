const app = getApp()

Page({
  data: {
    my_reviews: [],
    saved_reviews: {},
    hasMove: true,
    startX:0,
    startY:0,
    endX: 0,
    endX: 0,
    angle: 0,

    left:0,
  },

  toggle_collapse(e){
    var index = e.currentTarget.dataset.index
    var my_reviews = this.data.my_reviews
    my_reviews[index].collapse = !my_reviews[index].collapse
    this.setData({my_reviews: my_reviews})
  },

  onLoad(){
    var my_reviews = wx.getStorageSync('my_reviews')
    var saved_reviews = wx.getStorageSync('saved_reviews')
    if (!my_reviews) my_reviews = []
    if (!saved_reviews) saved_reviews={}

    for (var i=0; i<my_reviews.length; i++){
      my_reviews[i].collapse = true
      my_reviews[i].left = this.data.left
    }
    this.setData({ my_reviews: my_reviews })

  },

  onShow(item){
    this.onLoad()
  },

  touchstart(e){
    this.setData({startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY, hasMove : true})
  },
  touchmove(e){
    var endX = e.changedTouches[0].clientX,
      endY = e.changedTouches[0].clientY,
      offset = endX - this.data.startX,
      index = e.currentTarget.dataset.index,
      my_reviews = this.data.my_reviews
      this.data.left = offset;
    this.setData({my_review: my_reviews})
    if (this.data.startX-endX > 200 && this.data.hasMove) {
      this.delItem(index)
      this.setData({hasMove: false})
    }
    this.onLoad()
  },

  delItem(index){
    console.log(index)
    var review_id = this.data.my_reviews[index].review_id
    this.data.saved_reviews[review_id] = false
    this.data.my_reviews.splice(index, 1)
    wx.setStorageSync('my_reviews', this.data.my_reviews)
    wx.setStorageSync('saved_reviews', this.data.saved_reviews)
    this.onLoad()
  }
})