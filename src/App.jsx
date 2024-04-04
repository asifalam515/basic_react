import { useState } from 'react'
import './App.css'
import Team from './components/Team/Team'
import Users from './components/Users/Users'
import Friends from './components/Friends/Friends'

function App() {
  const [count,setCount]=useState(0)
const handleCounter=()=>{
  setCount(count+1)
}
const addFive=(num)=>{
  setCount(count+num)
}

  return (
    <>
    {/* <h1> {count} </h1> */}
    <Team></Team>
{/* <Users></Users> */}
<Friends></Friends>
    </>
  )
}

export default App
