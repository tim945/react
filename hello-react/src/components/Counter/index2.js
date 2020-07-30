/*
 * @Author: tim
 * @Date: 2020-07-30 13:35:36
 * @LastEditors: tim
 * @LastEditTime: 2020-07-30 14:21:50
 * @Description: 
 */ 
import React, { useReducer } from "react"

// reducer 重写 useState 计数器
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: Number(state.count) + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return {count: action.payload};
    default:
      throw new Error();
  }
}

function Counter2({initialCount}) {
  const initState  = {count: initialCount}
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      Count2: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}

export default Counter2
