import React from 'react'
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ReadOnly = ({ row, editData, deleteData }) => {
    return (
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
    )
}

export default ReadOnly;