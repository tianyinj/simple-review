/**
Interface to Nytimes Movie API
**/
//const fetch = require('./fetch')

const api_key = '78c73615837540efa12df2202cfbab80'
const url = "https://api.nytimes.com/svc/movies/v2/critics/.json"


function searchApi(query){
  const param = {'api-key': api_key, 'query' : `${query}`}
  return fetch(url, param)
}

function readApi(url){
  return fetch(url)
}

module.exports = { searchApi, readApi }