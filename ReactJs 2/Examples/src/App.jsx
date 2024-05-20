import './App.css'
import { useRef, useState } from 'react'
function App() {
  let ref=useRef(0);
  const [display,setDisplay]=useState(0);
  const handleClick=()=>{
    ref.current=ref.current+1;
    setDisplay(ref.current);
  }
  return(
    <button onClick={handleClick}>
      click me
      <p>Times:{display}</p>
    </button>
  )
}

export default App

