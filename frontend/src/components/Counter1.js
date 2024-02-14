import React, { useState } from 'react';

const Counter1 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); 
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const getMessage = () => {
    if (count > 0) {
      return "Count is positive";
    } else if (count < 0) {
      return "Count is negative";
    } else {
      return "Count is zero";
    }
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>{getMessage()}</p>
    </div>
  );
};

export default Counter1;