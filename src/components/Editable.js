import React from 'react'

const Editable = ({
    submitData,
    editTableData,
    editData,
    handleCancelClick,
}) => {
    
    return (
        <tr>
            <td>  
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a team name"
                    name="teamName"
                    value={editTableData.teamName}
                    onChange={editData}
                />
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter coach"
                    name="coach"
                    value={editTableData.coach}
                    onChange={editData}
                />
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter uniform"
                    name="uniform"
                    value={editTableData.uniform}
                    onChange={editData}
                />
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter stadium"
                    name="stadium"
                    value={editTableData.stadium}
                    onChange={editData}
                />
            </td>
            <td>
                <button type="submit" onClick={submitData}>Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}

export default Editable