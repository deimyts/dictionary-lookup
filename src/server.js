const express = require('express')
const axios = require('axios')

const app = express()
const port = 3001

function getDefinition(word) {
  const baseUrl = 'https://od-api.oxforddictionaries.com/api/v2'
  return axios.get(`${baseUrl}/entries/en-us/${word}`, {
    headers: {
      // 'Content-Type': 'application/json',
      // 'mode': 'same-origin',
      app_id: process.env.APP_KEY,
      app_key: process.env.APP_ID
    }
  })
  .then(res => res.data.definition)
  .catch(err => console.log(err))
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/definitions/', (req, res) => res.json({definition: 'You rang?'}))
app.listen(port, () => console.log(`Server listening on port ${port}`))
