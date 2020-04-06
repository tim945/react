/*
 * @Author: tim
 * @Date: 2020-04-04 11:58:36
 * @LastEditors: tim
 * @LastEditTime: 2020-04-05 15:30:45
 * @Description: 
 */
import React, { useState, useEffect } from 'react';

function EffectHook() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      <p>You clicked {count} times</p>
      {/* <button onClick={() => setCount(count + 1)}> */}
      <button onClick={() => setCount(preCount => preCount + 1)}>
        Click me
      </button>
    </>
  );
}

export default EffectHook
