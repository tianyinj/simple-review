/* 
 * Simple HTML Parser Interface
 */
const fetch = require('./fetch')
const review_list_url = 'https://movie.douban.com/subject/'
const review_url = 'https://movie.douban.com/review/'
/* 
 * 抓取一个txt
 */
function readOne(id){
  return fetch(`${review_url}${id}`, false)
}

/* 
 * 抓取页面上所有url
 */
function readAll(id){
  return fetch(`${review_list_url}${id}/reviews`, false)
}

module.exports = {readOne, readAll}