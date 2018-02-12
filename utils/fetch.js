/**
 * fetch data from remote api
 * https://developer.nytimes.com/movie_reviews_v2.json
 * @param  {String} api
 * @param  {String} type
 * @param  {Object} params
 * @return {Promise} 
 */
module.exports = function (api, type, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${api}/${type}`,
      data: Object.assign({}, params),
      method:'GET',
      header: {'Content-Type': 'json'},
      success: resolve,
      fail: reject
    })
  })
}