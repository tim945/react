/*
 * @Author: tim
 * @Date: 2020-07-30 13:35:36
 * @LastEditors: tim
 * @LastEditTime: 2020-07-30 14:20:52
 * @Description: 
 */ 
import React, { useState } from "react"

const Counter = ({initialCount}) => {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => Number(prevCount) + 1)}>+</button>
    </div>
  );
}

export default Counter
