const app = getApp()

Page({
  data: {
    placeHolder: 'Enter Movie Title Here..',
    movies: [],
    keyword: ''
  },

  search_nytimes(e) {
    if (!e.detail.value) return
    this.setData({movies: [], search: e.detail.value })
    return app.nytimes.searchApi(this.data.search)
      .then(d => {
        if (d.num_results) {
          //Implement review listing here
        } 
      })
      .catch(e => {
        console.error(e)
      })
  },

  search_douban() {
    return app.douban.searchApi(`v2/movie/search`, true, this.data.keyword)
      .then(d => {
        if (d.data.subjects.length) {
          this.setData({movies: this.data.movies.concat(d.data.subjects)})
        }
      })
      .catch(e => {
        console.error(e)
      })
  },

  onSearch(e) {
    this.setData({ movies: [], keyword: e.detail.value })
    this.search_douban()
  }


})