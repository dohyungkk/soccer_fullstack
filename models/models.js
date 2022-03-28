const Pool = require("pg").Pool;

const pgSchema = Pool.init ( {
    id: Number,
    teamData: {
        teamName: String,
        coach: String,
        uniform: String,
        stadium: String
    }
})

module.exports = pgSchema
