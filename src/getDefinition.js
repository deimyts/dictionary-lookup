const axios = require('axios')
export default function getDefinition(word) {
  const baseUrl = 'http://localhost:3001/api'
  return axios.get(`${baseUrl}/definitions/`)
    .then(res => {
      console.log('RESPONSE: ', res.data);
      return res.data;
    })
    .catch(err => console.log(err))
}
