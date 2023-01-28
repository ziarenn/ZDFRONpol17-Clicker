import React from "react";

interface ManipulatorProps {
  count: number;
  setCount: (value: number) => void;
}

const Manipulator = ({ count, setCount }: ManipulatorProps) => {
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h5>Zwiększ lub zmniejsz</h5>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
};

export default Manipulator;
