import React, { useState } from 'react'

function Dropdown() {
    const [team, setTeam] = useState()

    return (
        <div>
            <h1>{team}</h1>
            <select value={team} onChange={e=>setTeam(e.target.value)}>
                <option></option>
                <option>Manchester</option>
                <option>Chelsea</option>
                <option>Liverpool</option>
            </select>
        </div>
    )
}

export default Dropdown;