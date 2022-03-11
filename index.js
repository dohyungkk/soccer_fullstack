const express = require('express')
const cors = require('cors')
const teamRoutes = require('./routes/routes.js')

const app = express()
const HOST = 'http://localhost'
const PORT = 8888
const corsOptions ={
    origin:'*', 
    credentials:true,         
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/team", teamRoutes)
app.get("/", (req, res) => res.send("rickshouse soccer api"))
app.all("*", (req, res) => res.send("it does not exist"))

app.listen(PORT, () => console.log(`server running on ${HOST}:${PORT}`))
