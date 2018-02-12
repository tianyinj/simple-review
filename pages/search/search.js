const app = getApp()

Page({
  data: {
    placeHolder: 'Enter Movie Title Here..',
    movies: [],
    search: ''
  },

  onSearch(e) {
    if (!e.detail.value) return
    this.setData({movies: [], search: e.detail.value })
    
    return app.nytimes.post('query', this.data.search)
      .then(d => {
        if (d.num_results) {
          //Implement review listing here
        } 
      })
      .catch(e => {
        console.error(e)
      })
  }
})