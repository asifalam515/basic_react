import { useState } from 'react'
import './App.css'
import Team from './components/Team/Team'
import Users from './components/Users/Users'

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
<Users></Users>
    </>
  )
}

export default App
