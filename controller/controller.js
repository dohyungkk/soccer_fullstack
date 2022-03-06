import fs from "fs"

let teams = []

export const getTeams = (req, res) => {
    let readData = fs.readFileSync("data.json")
    let getData = JSON.parse(readData)
    res.send(getData)
}

export const createTeam = async (req, res) => {
    let { teamData } = req.body
    teams.push({...teamData})
    // console.log(teams)
    let addData = JSON.stringify(teamData)
    fs.writeFile("data.json", addData, (err) => {
        if (err) throw err
        console.log("new data added")
    })
}

export const updateTeam = (req, res) => {
    const team = teams.find((team) => team.id === req.params.id)
    team.teamName = req.body.teamName
    team.coach = req.body.coach
    team.uniform = req.body.uniform
    team.stadium = req.body.stadium

    console.log(`following has been updated ${req.body.teamName}, ${req.body.coach}, ${req.body.uniform}, ${req.body.stadium}`)
}

export const deleteTeam = (req, res) => {
    console.log('data has been deleted')
    teams = teams.filter((team) => team.id === req.params.id)
}
