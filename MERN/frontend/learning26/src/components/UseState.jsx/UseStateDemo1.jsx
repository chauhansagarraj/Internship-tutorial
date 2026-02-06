import React from 'react'
import { useState } from 'react';

export const UseStateDemo1 = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
  return (
    <div style={{textAlign:"center"}}>UseStateDemo1
    <br/>
    Count: {count}
    <br/>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div>
  )
}
