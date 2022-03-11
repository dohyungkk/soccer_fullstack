const getTeams = "SELECT * FROM users";
const addTeam = "INSERT INTO users (teamData) VALUES ($1) RETURNING *";

module.exports = {
    getTeams, 
    addTeam
}