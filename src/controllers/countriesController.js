const { default: axios } = require('axios')
const { map } = require('../../app')

const getCountries = async (req, res) => {

  const countriesRawData = await axios.get('https://restcountries.com/v2/all')

  res.send(countriesRawData.data.map(countryData => countryData.name))
}

module.exports = {
  getCountries
}