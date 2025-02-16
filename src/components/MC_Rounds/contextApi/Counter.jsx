import React, { useContext } from 'react';
import {CounterContext} from './CounterContext';

const Counter = () => {
    const {count, increment} = useContext(CounterContext);
  return (
    <>
    <div>Counter</div>
    <div>{count}</div>
    <button onClick={increment}>Increase</button>
    </>
  )
}

export default Counter;