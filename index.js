const express = require('express')
const path = require('path')
const expressEdge = require('express-edge')

const app = express()

app.use(express.static('public'))
app.use(expressEdge.engine)
app.set('views', `${__dirname}/views`)

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "pages/index.html"))
}) 
// app.get('/', (req, res) => {
//     res.render("projects")
// })

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, "pages/register.html"))
})
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, "pages/login.html"))
})

app.listen(8080, () =>console.log("Port 5000 listening..."))