const express = require('express')
const routes = require('./routes')
const db = require('./config/connection')
const cors = require('cors');

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors());

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routes)

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`now listening on port ${PORT}`)
    })
})