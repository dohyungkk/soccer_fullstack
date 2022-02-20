const express = require('express')
const cors = require("cors")
const app = express()
const controller = require('./controller/controller')

const HOST = 'http://localhost'
const PORT = 8888

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const corsOptions ={
    origin:'*', 
    credentials:true,         
    optionSuccessStatus:200,
}
app.use(cors(corsOptions))

app.get('/', cors(), controller.initialize)
app.get('/team', cors(), controller.sendTeam)
app.post('/team', cors(), controller.postTeam)
app.patch('/team/:id', cors(), controller.updateTeam)
app.delete('/team/:id', cors(), controller.deleteTeam)

app.listen(PORT, cors(), () => {
    console.log(`API running at ${HOST}:${PORT}!`)
})