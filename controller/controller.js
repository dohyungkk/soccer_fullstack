const dummyData = require('../dummy')
const teams = []

module.exports = {
    initialize:
    async (req,res) => {
        res.send('rickshouse soccer api')
    },
    sendTeam: 
    async (req,res) => {
        res.status(200).json(dummyData)
    },
    postTeam:
    async (req, res) => {
        let { teamData } = req.body
        console.log(teamData)
    },
    //idempotent
    updateTeam:
    async (req, res) => {
        res.json( { teamData } = req.body )
    },
    deleteTeam:
    async (req, res) => {
        const id = req.params.id
        res.json({ "id": req.body.id })
    }
}