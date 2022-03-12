const getTeams = "SELECT * FROM users";
const getTeamById = "SELECT * FROM users WHERE id = $1"
const addTeam = "INSERT INTO users (teamData) VALUES ($1) RETURNING *";
const updateTeam = "UPDATE users SET teamData = $1 WHERE id = $2";
const removeTeam = "DELETE FROM users WHERE id = $1";

module.exports = {
    getTeams,
    getTeamById,
    addTeam,
    updateTeam,
    removeTeam
}