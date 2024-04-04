import { useState } from "react";

const Team = () => {
  
    const [team,setTeam]=useState(11)
    const addPlayer=()=>{
     setTeam(team+1)   
    }
    const removePlayer=()=>{
        setTeam(team-1)
    }
    const teamStyle={
        border:'2px solid purple',
        margin:'15px',
        borderRadius:'5px',
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team} </h3>
            <button onClick={addPlayer}>Add Player</button>
            <button onClick={removePlayer}>Remove Player</button>
        </div>
    );
};

export default Team;