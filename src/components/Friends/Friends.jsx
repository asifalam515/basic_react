import { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Friends = () => {
    const [friends,setFriends]=useState([])
    const teamStyle={
        border:'2px solid purple',
        margin:'15px',
        borderRadius:'5px',
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])
    return (
        <div>
            {
                friends.map((friend)=><Friend friend={friend} key={friend.id}> </Friend>)
            }
        </div>
    );
};

export default Friends;