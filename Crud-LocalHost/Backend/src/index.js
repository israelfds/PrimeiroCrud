const express = require('express')
const app = express()
const port = 3000;



const databaseService = require('./service/database-service.js');




app.get('/alunos', (req, res) => {

  let content = databaseService.listarTodos();

  res.header("Access-Control-Allow-Origin", "*");

  res.status(200);
  res.send(`${JSON.stringify(content)}`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})