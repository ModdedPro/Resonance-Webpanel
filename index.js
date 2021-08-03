const express = require('express')
const app = express()
const port = 8181

app.use(express.static('dist'))

app.listen(port, () => {
  console.log(`Started server`)
})
