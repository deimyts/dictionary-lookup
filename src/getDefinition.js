export default function getDefinition(word) {
  const baseUrl = 'https://od-api.oxforddictionaries.com/api/v2'
  return fetch(`${baseUrl}/entries/en-us/${word});
}
