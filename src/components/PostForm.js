import React, { useState } from 'react'
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

    const submitData = (e) => {
        e.preventDefault()

        const newData = {teamName, coach, uniform, stadium}
        setTeamData([...teamData, newData])
        setTeamName("")
        setCoach("")
        setUniform("")
        setStadium("")
        // console.log(newData)
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
                <Button type="submit" onClick={submitData} variant="contained">Submit</Button>
                {/* material ui 안쓸때는 form 에 onsubmit 넣엇는데 이거쓰면 button 에 onsubmit? */}
            </Box>
            {/* <div>
                <form onSubmit={submitData}>
                    <div>
                        <input type="text" placeholder="Enter the coach" value={coach} onChange={(e) => {setCoach(e.target.value)}} />
                    </div>
                    <div>
                        <input type="text" placeholder="Enter the uniform" value={uniform} onChange={(e) => {setUniform(e.target.value)}} />
                    </div>
                    <div>
                        <input type="text" placeholder="Enter the stadium" value={stadium} onChange={(e) => {setStadium(e.target.value)}} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div> */}
        </>
    )
}

export default PostForm;