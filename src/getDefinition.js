const axios = require('axios')
export default function getDefinition(word) {
  const baseUrl = 'http://localhost:3001/api'
  return axios.get(`${baseUrl}/definitions/`)
    .then(res => console.log(res.data.definition))
    .catch(err => console.log(err))
}
