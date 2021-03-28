//importar as dependencias
const express = require('express')
const bodyParser = require('body-parser')

//inicializando o express
const app = express()

//conigurar a view engine e configurar a pasta publica
app.set('view engine', 'ejs')
app.use(express.static('public'))

//configurar o body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rota principal
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/tela_livro', (req, res) => {
    res.render('tela_livro')
})

//escutar a porta
app.listen(3000) 