//importar as dependencias
const express = require('express')

//inicializando o express
const app = express()

//conigurar a view engine e configurar a pasta publica
app.set('view engine', 'ejs')
app.use(express.static('public'))

//configurar o body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//escutar a porta
app.listen(3000) 