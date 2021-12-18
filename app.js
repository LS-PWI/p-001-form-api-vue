const express = require('express')
const https = require('https')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(express.static('./dist/'))

app.use(cors({
  origin: '*'
}))

// JSON
app.use(express.json());

// GET /api/access
app.get('/api/access', function (req, res) {
  if (req.query.token == undefined) {
    res.status(404).send("Bad parameters")
  }
  else {
    let token = req.query.token
    if (token == "ex093984638ier") {
      res.status(200).send('{"msgtoken":"Valid token, access granted"}')
    }
    else {
      res.status(404).send('{"msgtoken":"Invalid token, access denied"}')
    }
  }
})

// Create http server
app.listen(PORT, function (err) {
  if (err) console.log(err)
  console.log('Server listening on PORT', PORT)
})
