const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('this is app2')
})

app.listen(8081)
