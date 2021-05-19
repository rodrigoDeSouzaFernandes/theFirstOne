const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// exercicio 1
app.get("/ping", (_req, res) => {
  res.json({message: 'pong'})
});

// exercicio 2
app.post("/hello", (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` })
})

// exercicio 3
app.post("/greetings", (req, res) => {
  const {name, age} = req.body;
  if(Number(age) <= 17) {
    res.status(401).json({ message: `Unauthorized` })
  }
  res.status(200).json({ message: `Hello: ${name}` });
});

app.use((err, req, res, next) => {
  res.status(500).send(`Algo deu errado, mensagem: ${err.message}`)
});

app.listen(3000, () => {
  console.log("rodando na porta 3000")
});