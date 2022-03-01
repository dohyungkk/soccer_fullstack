import express from 'express'
import { getTeams, createTeam, updateTeam, deleteTeam } from '../controller/controller.js'

const router = express.Router();

router.get('/', getTeams)
router.post('/', createTeam)
// router.get('/:id', getTeam)
router.patch('/:id', updateTeam)
router.delete('/:id', deleteTeam)

export default router