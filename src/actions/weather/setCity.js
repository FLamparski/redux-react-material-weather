import {SET_CITY} from './../const'

const yahooWeatherQuery = (cityName) => `https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${encodeURIComponent(cityName.toLowerCase())}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`

module.exports = function(cityName) {
  return {
    type: SET_CITY,
    payload: fetch(yahooWeatherQuery(cityName)).then(res => res.json())
  }
}
