import { useState } from 'react';
import Chai from './components/Chai';
import "./App.css";

function App() {
  let [counter,setCounter]=useState(0);
  const addValue=()=>{
    setCounter(prevcounter => prevcounter+1);
    setCounter(prevcounter => prevcounter+1);
    setCounter(prevcounter => prevcounter+1);
    setCounter(prevcounter => prevcounter+1);
  }
  const removeValue= () =>{
    setCounter(counter-1);
  }
  const [color,setBackgroundColor]=useState("aqua");
  return (
    <>
        {/* <h1>Counter Value: {counter}</h1>
        <button onClick={addValue} className='border-2 border-red-500'>Add Value {counter}</button>
        <br/>
        <br/>
        <button onClick={removeValue} className='border-2 border-red-500'>Remove Value {counter}</button> */}
        <div className='relative w-[100vw] h-[100vh]  m-0 p-0' style={{backgroundColor:color}}>
          <div className='flex gap-4 bg-[#e6e1e1] border-2 rounded-xl w-[60%] mx-auto justify-center absolute  left-[20%] bottom-[5%] cursor-pointer py-2'>
              <div className='bg-red-700 rounded-xl px-3 py-0' onClick={()=>setBackgroundColor("red")}>Red</div>
              <div className='bg-green-700 rounded-xl px-3 py-0' onClick={()=>setBackgroundColor("green")}>Green</div>
              <div className='bg-blue-700 rounded-xl px-3 py-0' onClick={()=>setBackgroundColor("blue")}>Blue</div>
              <div className='bg-[#BAB86C] rounded-xl px-3 py-0' onClick={()=>setBackgroundColor("olive")}>Olive</div>
              <div className='bg-gray-700 rounded-xl px-3 py-0' onClick={()=>setBackgroundColor("gray")}>Gray</div>
              <div className='bg-yellow-700 rounded-xl px-3 py-0' onClick={()=>setBackgroundColor("yellow")}>Yellow</div>
              <div className='bg-pink-700 rounded-xl px-3 py-0' onClick={()=>setBackgroundColor("pink")}>Pink</div>
              <div className='bg-purple-700 rounded-xl px-3 py-0' onClick={()=>setBackgroundColor("purple")}>Purple</div>
              <div className='bg-[#afafc8] rounded-xl px-3 py-0' onClick={()=>setBackgroundColor("lavender")}>Lavender</div>
              <div className='bg-[#bdbaba] text-black rounded-xl px-3 py-0' onClick={()=>setBackgroundColor("white")}>White</div>
              <div className='bg-black text-white rounded-xl px-3 py-0' onClick={()=>setBackgroundColor("black")}>Black</div>
          </div>
        </div>
    </>
  );
}

export default App;
