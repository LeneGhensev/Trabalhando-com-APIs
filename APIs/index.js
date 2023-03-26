const express = require ('express') //criou-se uma constante que irá chamar o módulo express

const app = express() //inicializa o express e guarda na constante

app.listen('3000') //criação do server pra ouvir na porta 3000 do navegador

app.route('/').get((req,res) => res.send("Hello!"))

app.use(express.json())//midleware: ponte das requisições que deve ser usado sempre que tiver um body na requisição
//pega o conteúdo da requisição e transforma em json
app.route('/').post((req,res) => res.send(req.body)) //req.body pega o corpo da requisição e envia no send

let profissao = "Arquiteta de Sistemas"

app.use(express.json())
app.route('/').put((req,res) => {
    profissao = req.body.profissao
    res.send(profissao)
})

app.route('/prof').get((req,res) => res.send(profissao))

app.route('/:identificador').delete((req,res) => { //os dois pontos informa que irá ser passada uma variável para fazer o delete pode ser um id por exemplo
    res.send(req.params.identificador) //como a variável é passada na rota, é chamada de params
})

app.use(express.json())
app.route('/novo').post((req,res) => {
  const {nome, cidade} = req.body //passo essas infos de nome e cidade na requisição post
  res.send('Meu nome é ${nome} e minha cidade é ${cidade}')  
})

app.route('/:variavel').get((req,res) => res.send(req.params.variavel)) //route params. Exemplo, fazer no postman a requisição: localhost:3000/Lene
app.route('/identidade/:nome').get((req,res) => res.send(req.params.nome)) //route params. Exemplo, fazer no postman a requisição: localhost:3000/identidade/Lene

app.route('/about/user').get((req,res) => res.send(req.query)) //no query param, as variáveis são passadas na url da requisição. Exemplo, fazer no postman a requisição: localhost:3000/about/user?nome=Lene

//body params = são enviados no corpo da requisição, não ficam na url (req.body no post, put ou patch)
//route params = parâmetros enviados na própria url (exemplo app.route('/:variavel')) tudo depois dos dois pontos, torna-se uma variável
//query params = as variáveis são criadas diretamente na url da requisição, ex: ?nome=Lene&cidade=São Paulo
