//Consumindo a api do Github com NodeJS

const express = require('express')
const app = express() //o express é usado pra criarmos nossa própria api
const axios = require('axios') //o axios é usado para fazer requisições em outra api. Usar o npm i axios para instalar.

app.listen('3000')

app.route('/').get((req,res) => {
  axios.get('https://api.github.com/users/LeneGhensev') 
  .then(result => res.send(result.data)) //se der certo, entra aqui, usa dados pra trazer as infos
  .catch(error => console.error(error)) //se der errado, entra aqui
})

app.route('/foto').get((req,res) => {
  axios.get('https://api.github.com/users/LeneGhensev')
  .then(result => res.send('<img src="${result.data.avatar_url}"/>')) //se der certo, entra aqui, usa dados pra trazer as infos
  .catch(error => console.error(error)) //se der errado, entra aqui
})

//instalei o axios "npm i axios" para fazer as requisições na api
