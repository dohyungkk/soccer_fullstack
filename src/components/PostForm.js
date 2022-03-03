import React, { useEffect, useState, Fragment } from 'react';
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
import MU from './img/MU.png';
import CFC from './img/Chelsea.png'
import LFC from './img/Liverpool.png'
import ReadOnly from './ReadOnly.js'
import Editable from './Editable'

const PostForm = () => {
    const [teamName, setTeamName] = useState("")
    const [coach, setCoach] = useState("")
    const [uniform, setUniform] = useState("")
    const [stadium, setStadium] = useState("")
    const [teamData, setTeamData] = useState([])
    const [counter, setCounter] = useState(1)

    const [ home, setHome ] = useState("")

    const [ editTableData, setEditTableData ] = useState({
        teamName: "",
        coach: "",
        uniform: "",
        stadium: "",
    })

    const [ editID, setEditID ] = useState(null)
    const [ teamID, setTeamID ] = useState()

    useEffect(() => {
        axios.get("http://localhost:8888/home").then(function(response) {
            setHome(response.data)
        })
    }, [])

    const submitData = async (e) => {
        e.preventDefault()

        setCounter(counter => counter + 1)
        const newData = {
            id: counter,
            teamName: teamName, 
            coach: coach, 
            uniform: uniform, 
            stadium: stadium
        }
        setTeamData([...teamData, newData])
        setTeamName("")
        setCoach("")
        setUniform("")
        setStadium("")
        try {
            axios.post("http://localhost:8888/team", {
                teamData
            })
        } catch (error) {
            console.log(error)
        }
    }
    console.log(teamData)
    //contacts = teamData?

    // const editData = (teamInfo) => {
    //     setIsEditing(true);
    //     setEditTeam({ ...teamInfo });
    // };
    // const resetEditing = () => {
    //     setIsEditing(false);
    //     setEditTeam(null);
    // };
    const editData = (e) => {
        e.preventDefault()
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormData = { ...editTableData };
        newFormData[fieldName] = fieldValue;

        setEditTableData(newFormData);
    }

    const handleEditTableSubmit = (e) => {
        e.preventDefault();
    
        const editedTeam = {
          teamName: editTableData.teamName,
          coach: editTableData.coach,
          uniform: editTableData.uniform,
          stadium: editTableData.stadium,
        };
    
        const newTeamID = [...teamID];
    
        const index = teamID.findIndex((team) => team.id === editID);
    
        newTeamID[index] = editedTeam;
    
        setTeamData(newTeamID);
        setEditID(null);
    };

    const handleEditClick = (e, teamData) => {
        e.preventDefault();
        setTeamData(teamData.id);
    
        const formValues = {
          teamName: teamData.teamName,
          coach: teamData.coach,
          uniform: teamData.uniform,
          stadium: teamData.stadium,
        };
    
        setEditTableData(formValues);
    };

    const handleCancelClick = () => {
        setTeamID(null);
    };

    const deleteData = (teamInfo) => {
        // setTeamData((del) => {
        //     const newTeam = [...teamData]
        //     const index = del.filter((team) => team.id !== teamInfo.id)
        //     newTeam.splice(index, 1)
        //     return newTeam
        // })
        const newTeam = [...teamData]
        const index = teamData.findIndex((team) => team.id === teamInfo)
        newTeam.splice(index, 1)
        setTeamData(newTeam)
    }
    // const handleDeleteClick = (newID) => {
    //     const newTeam = [...teamID];
    
    //     const index = teamID.findIndex((team) => team.id === newID);
    
    //     newTeam.splice(index, 1);
    
    //     setTeamID(newTeam);
    // };

    // const deleteData = async (i) => {
    //     axios.delete(`http://localhost:8888/team/${id}/`)
    //     .then(res => {
    //         const del = teamData.filter(team => id != team.id)
    //         setTeamData(del)
    //         console.log('res', res)
    //     })
    //     const newTeam = [...teamData]
    //     newTeam.splice(i, 1)
    //     setTeamData(newTeam)
    // }

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleEditTableSubmit}
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
                        <MenuItem value="Manchester"><img src = {MU}/>Manchester</MenuItem>
                        <MenuItem value="Liverpool"><img src = {LFC}/>Liverpool</MenuItem>
                        <MenuItem value="Chelsea"><img src = {CFC}/>Chelsea</MenuItem>
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
                            <Fragment>
                                {editID === row.id ? 
                                (
                                    <Editable 
                                        editTableData={editTableData}
                                        editData={editData}
                                        handleCancelClick={handleCancelClick}
                                    />
                                ) : (
                                    <ReadOnly 
                                        row={row} 
                                        handleEditClick={handleEditClick}
                                        deleteData={deleteData}
                                    />
                                )}
                            </Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default PostForm;