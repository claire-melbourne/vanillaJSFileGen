const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 3000 || process.env.PORT;
//app.use(express.urlencoded());
app.use(express.json());
// app.get('/', (req, res) => {
//   res.end('Hello World');
// })
app.use(express.static('public'));
app.post('/form', (req, res) => {
  console.log(req.body);
  res.end(req.body.title + ' received')
})

app.listen(PORT, console.log(`Listening on ${PORT}`));