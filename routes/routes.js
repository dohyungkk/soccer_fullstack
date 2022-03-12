const express = require('express')
const { getTeams, getTeamById, createTeam, updateTeam, deleteTeam } = require('../controller/controller.js')

const router = express.Router();

router.get("/", getTeams)
router.get("/:id", getTeamById)
router.post("/", createTeam)
router.patch("/:id", updateTeam)
router.delete("/:id", deleteTeam)

module.exports = router