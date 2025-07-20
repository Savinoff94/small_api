const express = require('express')
const routes = require('./routes/routes')
const app = express()
app.use(express.json());
const port = 3000

app.use('/todos', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})