import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const Editable = () => {
  return (
    // <TableRow>
    //     <TableCell align="right">
    //         <TextField></TextField>
    //     </TableCell>
    //     <TableCell align="right"></TableCell>
    //     <TableCell align="right"></TableCell>
    //     <TableCell align="right"></TableCell>
    //     <TableCell align="right">
    //     </TableCell>
    // </TableRow>
    <tr>
        <td>  
        </td>
        <td>
            <input
                type="text"
                required="required"
                placeholder="Enter a team name"
                name="teamName"
            />
        </td>
        <td>
            <input
                type="text"
                required="required"
                placeholder="Enter coach"
                name="coach"
            />
        </td>
        <td>
            <input
                type="text"
                required="required"
                placeholder="Enter uniform"
                name="uniform"
            />
        </td>
        <td>
            <input
                type="text"
                required="required"
                placeholder="Enter stadium"
                name="stadium"
            />
        </td>
    </tr>
  )
}

export default Editable