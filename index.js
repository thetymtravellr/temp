const express = require('express');
const cors = require('cors');
const db = require('./config/db')

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.send('node server running')
})

app.listen(port, () => {
    console.log('listening');
})