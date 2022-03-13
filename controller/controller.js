const fs = require("fs")
const pool = require("../database/db.js")
const queries = require("../database/queries.js")

let teams = []

exports.getTeams = (req, res) => {
    // let readData = fs.readFileSync("data.json")
    // let getData = JSON.parse(readData)
    // res.send(getData)

    pool.query(queries.getTeams, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

exports.getTeamById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getTeamById, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

exports.createTeam = async (req, res) => {
    const { teamData } = req.body
    // teams.push({...teamData})
    // console.log(teams)
    // let addData = JSON.stringify(teamData)
    // fs.writeFile("data.json", addData, (err) => {
    //     if (err) throw err
    //     console.log("new data added")
    // })
    
    pool.query(queries.addTeam, [teamData], (error, results) => {
        if (error) throw error

        //if adding team works
        res.status(201).send("Team created successfully")
        console.log("team added to the db")
    })
}

exports.updateTeam = (req, res) => {
    // const team = teams.find((team) => team.id === req.params.id)
    // team.teamName = req.body.teamName
    // team.coach = req.body.coach
    // team.uniform = req.body.uniform
    // team.stadium = req.body.stadium

    // console.log('data has been edited')

    const id = parseInt(req.params.id)
    const { teamData } = req.body
    pool.query(queries.getTeamById, [id], (error, results) => {
        const noTeamFound = !results.rows.length
        if (noTeamFound) {
            res.send("Team does not exist in the db")
        }
        pool.query(queries.updateTeam, [teamData, id], (error, results) => {
            if (error) throw error
            res.status(200).send("Team removed successfully")
        })
    })
}

exports.deleteTeam = async (req, res) => {
    // const { teamData } = req.body
    // teams.push({...teamData})
    // teams = teams.filter((team) => team.id === req.params.id)
    // pool.query(queries.removeTeam, [id], (error, results) => {
    //     if (error) throw error
    // })
    // console.log(req.params)

    const id = parseInt(req.params.id)
    pool.query(queries.getTeamById, [id], (error, results) => {
        const noTeamFound = !results.rows.length
        if (noTeamFound) {
            res.send("Team does not exist in the db")
        }
        pool.query(queries.removeTeam, [id], (error, results) => {
            if (error) throw error
            res.status(200).send("Team removed successfully")
        })
    })
}
