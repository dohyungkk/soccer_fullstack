import React from 'react'
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Readable = ({ teamData, handleEditClick, handleDeleteClick }) => {
    return (
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
                                    <Button type="edit" variant="contained" color="success">Edit</Button>
                                    <Button type="delete" variant="contained" color="error">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

export default Readable;