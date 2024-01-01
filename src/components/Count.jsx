import React, { useState } from 'react';

const Typewriter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    // Check if count is greater than 0 to avoid negative numbers
    if (count > 0) {
      setCount(count - 1);
    } else if (count === 10) {
      // If count is 10, remove the leading zero
      setCount(9);
    }
  };

  // Add leading zero for numbers 1 to 9
  const formattedCount = count < 10 ? '0' + count : count;

  return (
    <div>
      <h1>Counter: {formattedCount}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Count;
