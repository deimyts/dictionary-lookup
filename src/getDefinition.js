const axios = require('axios')
export default function getDefinition(word) {
  const baseUrl = 'http://localhost:3001/api'
  return axios.get(`${baseUrl}/definitions/${word}`)
    .then(res => res.data)
    .catch(err => console.log('CLIENT ERROR: ', err))
}
