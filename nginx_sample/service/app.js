const express = require('express')
const morgan = require('morgan')

const app = express()

const port = process.env.PORT || 8080

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send(`app run on port ${port}`)
})


app.listen(port)
