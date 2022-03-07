import React from 'react'
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';

const Editable = ({

    handleEditTableSubmit,

    editTableData,
    editData,
    handleCancelClick,
}) => {
    
    return (
        <TableRow>
            <TableCell>  
            </TableCell>
            <TableCell>
                <TextField
                    type="text"
                    required="required"
                    placeholder="Enter a team name"
                    name="teamName"
                    value={editTableData.teamName}
                    onChange={editData}
                />
            </TableCell>
            <TableCell>
                <TextField
                    type="text"
                    required="required"
                    placeholder="Enter coach"
                    name="coach"
                    value={editTableData.coach}
                    onChange={editData}
                />
            </TableCell>
            <TableCell>
                <TextField
                    type="text"
                    required="required"
                    placeholder="Enter uniform"
                    name="uniform"
                    value={editTableData.uniform}
                    onChange={editData}
                />
            </TableCell>
            <TableCell>
                <TextField
                    type="text"
                    required="required"
                    placeholder="Enter stadium"
                    name="stadium"
                    value={editTableData.stadium}
                    onChange={editData}
                />
            </TableCell>
            <TableCell>

                <Button type="submit" onClick={handleEditTableSubmit} variant="contained">Save</Button>

                <Button type="submit" variant="contained">Save</Button>

                <Button type="button" onClick={handleCancelClick} variant="contained" color="error">Cancel</Button>
            </TableCell>
        </TableRow>
    )
}

export default Editable