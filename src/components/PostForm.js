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
import MU from '../img/MU.png';
import CFC from '../img/chelsea.png'
import LFC from '../img/liverpool.png'
import ReadOnly from './ReadOnly.js'
import Editable from './Editable'

const PostForm = () => {
    // each is saved for object
    const [teamName, setTeamName] = useState("")
    const [coach, setCoach] = useState("")
    const [uniform, setUniform] = useState("")
    const [stadium, setStadium] = useState("")

    // array of object
    const [teamData, setTeamData] = useState([])

    // set to 1 for ID
    const [counter, setCounter] = useState(1)

    // we only need these 4 values for edits
    const [ editTableData, setEditTableData ] = useState({
        teamName: "",
        coach: "",
        uniform: "",
        stadium: "",
    })

    // keeping the ID as is
    const [ editID, setEditID ] = useState(null)

    // submit function to store values. Calling "newData" to be stored on "teamData" and posting it to the backend
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
            await axios.post("http://localhost:8888/team", {
                teamData
            })
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(teamData)

    // function to call whenever the inputs are edited
    const editData = (e) => {
        e.preventDefault()
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormData = { ...editTableData };
        newFormData[fieldName] = fieldValue;

        setEditTableData(newFormData);
    }

    // submit the editted values from Editable.js
    const handleEditTableSubmit = (e, id) => {
        e.preventDefault();
    
        const editedTeam = {
            id: editID,
            teamName: editTableData.teamName,
            coach: editTableData.coach,
            uniform: editTableData.uniform,
            stadium: editTableData.stadium,
        };
    
        const newTeam = [...teamData];
        const index = teamData.findIndex((team) => team.id === editID);
        newTeam[index] = editedTeam;
        setTeamData(newTeam);
        setEditID(null);
        axios.put(`http://localhost:8888/team/${id}`, {
            newTeam
        })
        
    };

    // pass in the saved values on ReadOnly.js view
    const handleEditClick = (e, team) => {
        e.preventDefault();
        setEditID(team.id);
    
        const formValues = {
          teamName: team.teamName,
          coach: team.coach,
          uniform: team.uniform,
          stadium: team.stadium,
        };
        setEditTableData(formValues);
    };

    // cancels the edit
    const handleCancelClick = () => {
        setEditID(null);
    };

    // deletes the row
    const deleteData = (teamInfo, id) => {
        const newTeam = [...teamData]
        const index = teamData.findIndex((team) => team.id === teamInfo)
        newTeam.splice(index, 1)
        setTeamData(newTeam)
        axios.delete(`http://localhost:8888/team/${id}`, {
            newTeam
        })
    }

    const [buttonText, setButtonText] = useState("Edit"); //same as creating your state variable where "Edit" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
    
    const handleClick = () => {
            switch (buttonText) {
              case "Edit":
                setButtonText("Save");
                break;
              case "Save":
                setButtonText("Edit");
                break;
      }
    };

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
                <Button type="submit" onClick={submitData} variant="contained">
                    {teamData.id ? "Save" : "Submit"}
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="Edit" onClick={() => handleClick()}variant="contained">
                    {buttonText}
                </Button>
                

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
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
            </Box>
        </>
    )
}

export default PostForm;