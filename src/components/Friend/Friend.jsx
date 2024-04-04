import React from 'react';

const Friend = ({friend}) => {
    const teamStyle={
        border:'2px solid purple',
        margin:'15px',
        borderRadius:'5px',
    }
    const {name,username,email}=friend
    return (
        <div > 
            <h1> {friend.name} </h1>
             <h3> {name} </h3>
            <h5> {username} </h5>
            <h6> {email} </h6>
            
        </div>
    );
};

export default Friend;