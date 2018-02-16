const app = getApp()

Page({
  data: {
    my_reviews: [],
    saved_reviews: {},
    hasMove: false,
    hasStart: false,
    startX:0,
    startY:0,
    endX: 0,
    endY: 0,
    angle: 0
  },

  toggle_collapse(e){
    console.log(e)
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
      my_reviews[i].left = 0
    }
    this.setData({ my_reviews: my_reviews })

  },

  onShow(item){
    this.onLoad()
  },

  touchstart(e){
    this.setData({startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY, hasStart : true})
  },
  touchmove(e){
    this.data.endX = e.changedTouches[0].clientX
    this.data.endY = e.changedTouches[0].clientY
    var index = e.currentTarget.dataset.index
    var offset = this.data.endX - this.data.startX

    var my_reviews = this.data.my_reviews
    my_reviews[index].left = offset
    this.data.hasMove = true
    this.setData({my_reviews:my_reviews})
    
  },

  touchend(e) {
    
    var index = e.currentTarget.dataset.index

    var my_reviews= this.data.my_reviews

    if (this.data.startX - this.data.endX > 200 && this.data.hasStart && this.data.hasMove) {
      this.delItem(index)
      this.data.hasMove = false
    }
    for (var i = 0; i < my_reviews.length; i++) {
      my_reviews[i].left = 0
    }
    this.data.hasStart = false
    this.data.hasMove = false
    this.data.startX = 0
    this.data.endX = 0
    this.setData({ my_reviews: my_reviews })
    
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