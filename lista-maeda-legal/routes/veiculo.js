// importart módulo express
const express = require('express');

// função do express para manipular as rotas
const rotas = express.Router();


// GET
// rota para acesar o método GET para veículo
rotas.get('/', (req, res) => {
  res.status(200).send({
    mensagem: 'Você acessou a rota raiz de veículo.'
  });
})


// POST
// rota para acesar o método POST para cliente
rotas.post('/', (req, res) => {

  // obter os dados do corpo da requisição
  const novoVeiculo = {
    nome: req.body.nome,
    fabricante: req.body.fabricante,
    anoModelo: req.body.ano,
    combustivel: req.body.combustivel,
    cor: req.body.cor,
    preco: req.body.preco
  }

  res.status(201).send({
    mensagem: 'O Veiculo foi adicionado 100%.',
    novoVeiculo: novoVeiculo
  });
});


// PUT
// rota para acesar o método PUT para veículo
rotas.put('/', (req, res) => {

  // obter o id enviado pela url
  const idVeiculo = {
    id: req.body.id,
    preco: req.body.preco
  }

  res.status(200).send({
    mensagem: `Id e o preço foram atualizados pelo servidor Id: ${idVeiculo.id}, preco: ${idVeiculo.preco}`
  });
})


// DELETE
// rota para excluir um veículo
rotas.delete('/:idveiculo', (req, res) => {
  const idveiculo = req.params.idveiculo;

  res.status(202).send({
    mensagem: `O ID ${idveiculo} excluído com sucesso.`
  });

});



// exportar toda a configuração das rotas
module.exports = rotas;