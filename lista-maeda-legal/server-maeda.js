// importar a biblioteca
// instalar o pacote usando o comando: npm install express
const express = require('express');

// importar o body-parser para manipular os dados do corpo da requisição
// instalar o pacote com o comando: npm install body-parser
const bodyParser = require('body-parser');

// módulo para acessar os arquivos
const fs = require('fs'); 

// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 8080;

// criação do aplicativo servidor
const app = express();

// confguração do body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// importar as configurações de rotas
const veiculosRotas = require('./routes/veiculo');

// rota raiz do servidor
app.get('/', (req, res) => {
  const arquivoHtml = fs.readFileSync('./pages/index.html');
  
  res.status(200).end(arquivoHtml);
});

// configurar as rotas para veiculo
app.use('/veiculo', veiculosRotas);

// rodar o servidor
// executar o servidor
app.listen(port, localhost, console.log('Ta Rodando....'));