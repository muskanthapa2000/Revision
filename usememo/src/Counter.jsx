import React, { useMemo, useState } from 'react'

function Counter() {

    const [countOne , setCountOne] = useState(0);
    const [countTwo , setCountTwo] = useState(0)

    const IncrementOne =()=>{
        setCountOne(countOne+1);
    }

    const IncrementTwo =()=>{
        setCountTwo(countTwo+1);
    }

    const memofunction = useMemo(()=>{
            let i =0;
            while(i<99999999) i++;
            return countOne%2===0;

    } , [countOne])

  return (
    <div>
        <h1>COUNTER APP USING USE MEMO</h1>

        <button onClick={IncrementOne}>INCREMENT </button>: {countOne}
        <span>{memofunction ? "even" : "odd"}</span> <br></br>

        <button onClick={IncrementTwo}>INCREMENT </button>: {countTwo} 
    </div>
  )
}

export default Counter