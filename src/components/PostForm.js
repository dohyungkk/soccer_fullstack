import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

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
                        <MenuItem value="Manchester">Manchester</MenuItem>
                        <MenuItem value="Liverpool">Liverpool</MenuItem>
                        <MenuItem value="Chelsea">Chelsea</MenuItem>
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
                {/* section from material-ui */}
                <Button type="submit" onClick={submitData} variant="contained">Submit</Button>
            </Box>
            {home}
        </>
    )
}

export default PostForm;