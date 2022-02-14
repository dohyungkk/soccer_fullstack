import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PostForm = () => {
    const [teamName, setTeamName] = useState("")
    const [coach, setCoach] = useState("")
    const [uniform, setUniform] = useState("")
    const [stadium, setStadium] = useState("")
    const [teamData, setTeamData] = useState([])

    const [ home, setHome ] = useState("")

    useEffect(() => {
        axios.get("http://localhost:8888/home").then(function(response) {
            setHome(response.data)
        })
    }, [])

    const submitData = (e) => {
        e.preventDefault()

        const newData = {teamName, coach, uniform, stadium}
        setTeamData([...teamData, newData])
        setTeamName("")
        setCoach("")
        setUniform("")
        setStadium("")
        try {
            axios.post("http://localhost:8888/post_team", {
                teamData
            })
        } catch (error) {
            console.log(error)
        }
    }
    console.log(teamData)

    

    const editData = (id) => {
        const getData = (id) => {
            const team = teamData.find(item => item.id === id)
            return team
        }
        const temp = teamData
        const index = temp.indexOf(getData(id))
        const newData = temp[index]
        setTeamData({
            id: newData['id'],
            teamName: newData['teamName'],
            coach: newData['coach'],
            uniform: newData['uniform'],
            stadium: newData['stadium']
        })
    }

    const deleteData = (teamInfo) => {
        const newTeam = [...teamData]
        const index = teamData.findIndex((team) => team.id === teamInfo)
        newTeam.splice(index, 1)
        setTeamData(newTeam)
    }

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <InputLabel id="demo-simple-select-label">Team Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={teamName}
                        label="Team Name"
                        onChange={(e) => {setTeamName(e.target.value)}}
                    >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value="Manchester"><img src = "https://resources.premierleague.com/premierleague/badges/50/t1.png"/>Manchester</MenuItem>
                        <MenuItem value="Liverpool"><img src = "https://resources.premierleague.com/premierleague/badges/50/t14.png" />Liverpool</MenuItem>
                        <MenuItem value="Chelsea"><img src = "https://resources.premierleague.com/premierleague/badges/50/t8.png" />Chelsea</MenuItem>
                    </Select>
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Coach"
                        value={coach}
                        onChange={(e) => {setCoach(e.target.value)}}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Uniform"
                        value={uniform}
                        onChange={(e) => {setUniform(e.target.value)}}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Stadium"
                        value={stadium}
                        onChange={(e) => {setStadium(e.target.value)}}
                    />
                </div>
                <Button type="submit" onClick={submitData} variant="contained">{teamData.id ? "Save" : "Submit"}</Button>
            </Box>
            {home}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>My Soccer Team</TableCell>
                            <TableCell align="right">Team Name</TableCell>
                            <TableCell align="right">Coach</TableCell>
                            <TableCell align="right">Uniform</TableCell>
                            <TableCell align="right">Stadium</TableCell>
                            <TableCell align="right">Button</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teamData.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.teamName}</TableCell>
                                <TableCell align="right">{row.coach}</TableCell>
                                <TableCell align="right">{row.uniform}</TableCell>
                                <TableCell align="right">{row.stadium}</TableCell>
                                <TableCell align="right">
                                    <Button type="edit" onClick={editData} variant="contained" color="success">Edit</Button>
                                    <Button type="delete" onClick={deleteData} variant="contained" color="error">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default PostForm;