import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'
const Component1 = () => {
  const value=useContext(CounterContext);
  return (
    <>
      This is Component1 {value.count}
      <button onClick={()=>value.setCount(count=>count+1)}>Count</button>
    </>
  )
}

export default Component1