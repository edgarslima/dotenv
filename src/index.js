const express = require('express');
const routes = require('./routes');

const app = express();
const server = require('http').Server(app)


app.use(express.json()); 
app.use(routes);


if (typeof process.env.AMBIENTE !== 'undefinided' && process.env.AMBIENTE){
    process.env.AMBIENTE = 'desenvolvimento'
}

if (process.env.AMBIENTE !== 'production') {
    require ('dotenv').config()
    console.log('Carregou variáveis de ambiente...')
    
}

const PORT = process.env.PORT;


server.listen(PORT)
