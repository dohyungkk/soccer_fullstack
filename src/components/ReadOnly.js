import React from 'react'
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const ReadOnly = ({ row, handleEditClick, deleteData }) => {
    return (
        <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            {/* <TableCell align="right">{row.counter}</TableCell> */}
            <TableCell align="right">{row.teamName}</TableCell>
            <TableCell align="right">{row.coach}</TableCell>
            <TableCell align="right">{row.uniform}</TableCell>
            <TableCell align="right">{row.stadium}</TableCell>
            <TableCell align="right">
                <Button type="edit" onClick={(e) => handleEditClick(e, row)} variant="contained" color="success">Edit</Button>
                <Button type="delete" onClick={() => deleteData(row.id)} variant="contained" color="error">Delete</Button>
            </TableCell>
        </TableRow>
    )
}

export default ReadOnly;