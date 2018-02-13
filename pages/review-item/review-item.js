const app = getApp()

Page({
  data: {
    id: '',
    reviews: []
  },

  onLoad(item) {
    if (!item.id) return
    this.setData({id: item.id })

    return app.douban.searchApi(`v2/movie/subject/${this.data.id}/comments`, false)
      .then(d => {
        this.setData({ reviews: this.data.reviews.concat(d.comments.title)})
      })
      .catch(e => {
        console.error(e)
      })
  }
})