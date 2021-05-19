const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get("/ping", (_req, res) => {
  res.json({message: 'pong'})
});

app.use((err, req, res, next) => {
  res.status(500).send(`Algo deu errado, mensagem: ${err.message}`)
});

app.listen(3000, () => {
  console.log("rodando na porta 3000")
});