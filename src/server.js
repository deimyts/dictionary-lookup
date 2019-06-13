const express = require('express')
const axios = require('axios')

const app = express()
const port = 3001

function getDefinition(word) {
  const baseUrl = 'https://od-api.oxforddictionaries.com/api/v2'
  return axios.get(`${baseUrl}/entries/en-us/${word}`, {
    headers: {
      app_id: process.env.APP_ID,
      app_key: process.env.APP_KEY
    }
  })
  .catch(err => console.log('LOOKUP ERROR: ', err.message))
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/definitions/:word', (req, res) => {
  return getDefinition(req.params.word)
    .then(r =>  res.json(r.data))
    .catch(err => console.log('SERVER ERROR: ', err))
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
