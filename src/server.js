const express = require('express')
const axios = require('axios')

const app = express()
const port = 3001

function getDefinition(word) {
  const baseUrl = 'https://od-api.oxforddictionaries.com/api/v2'
  return axios.get(`${baseUrl}/lemmas/en-us/${word}`, {
    headers: {
      app_id: process.env.APP_ID,
      app_key: process.env.APP_KEY
    }
  })
  .then(res => {
    const root = res.data.results[0].lexicalEntries[0].inflectionOf[0].id;
    console.log('ROOT: ', root)
    return root;
  })
  .then(root => {
    return axios.get(`${baseUrl}/entries/en-us/${root}`, {
      headers: {
        app_id: process.env.APP_ID,
        app_key: process.env.APP_KEY
      }
    })
  })
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/definitions/:word', (req, res, next) => {
  return getDefinition(req.params.word)
    .then(r => res.json(r.data))
    .catch(err => next(err))
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
