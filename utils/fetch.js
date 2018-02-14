/**
 * fetch data from remote api
 * https://developer.nytimes.com/movie_reviews_v2.json
 * @param  {String} api
 * @param  {String} type
 * @param  {Object} params
 * @return {Promise} 
 */
module.exports = function (url, hasParams, params) {
  if (hasParams) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: params,
        method: 'GET',
        header: { 'Content-Type': 'json' },
        success: resolve,
        fail: function({ errMsg }) {
          console.log(`${url} request fail`, errMsg)
        }
      })
    })
  }
  else{
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        method: 'GET',
        success: resolve,
        fail: function ({ errMsg }) {
          console.log(`${url} request fail`, errMsg)
        }
      })
    })
  }
}

