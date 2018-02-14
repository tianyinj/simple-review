/**
Interface to Douban Movie API
Author: Tia jiang
**/

const url = "https://douban.uieee.com/v2/movie"
const fetch = require('./fetch')

/**
 * 抓取豆瓣电影特定类型的API
 * https://developers.douban.com/wiki/?title=movie_v2
 * @param  {String} path   eg. '/v2/movie/subject/1054395/reviews'
 *                             '/v2/movie/search?q={text}'
 * @param  {Objece} params 
 * @return {Promise}       
 */
function searchApi(path, hasParams, keyword='') {
  const param = {q: keyword}
  return fetch(`${url}/${path}`, hasParams, param)
}

/**
 * 抓取豆瓣电影特定类型的API
 * https://developers.douban.com/wiki/?title=movie_v2
 * @param  {String} path   eg. '/v2/movie/subject/1054395/reviews'
 *                             '/v2/movie/search?q={text}'
 * @param  {Objece} params 
 * @return {Promise}       
 */

function readApi(url) {
  return fetch(url, false)
}

module.exports = { searchApi, readApi }