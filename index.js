const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>This line itself should be returned instead of "Hello, World!" after pushing to the repo.</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})