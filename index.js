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

app.get('/', cors(), controller.homeScreen)
app.get('/team', cors(), controller.sendTeam)
app.get('/home', cors(), controller.sendHome)
app.post('/post_team', cors(), controller.postTeam)
app.patch('/:id', cors(), controller.updateTeam)
app.delete('/:id', cors(), controller.deleteTeam)

app.listen(PORT, cors(), () => {
    console.log(`API running at ${HOST}:${PORT}!`)
})