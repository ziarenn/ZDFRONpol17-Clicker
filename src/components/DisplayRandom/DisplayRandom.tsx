import { useState } from "react";

interface DisplayRandomProps {
  setRandomNumber: (value: number) => void;
}

const DisplayRandom = ({ setRandomNumber }: DisplayRandomProps) => {
  const updateRandomNumber = () => {
    const random = Math.random();
    setRandomNumber(random);
  };

  return (
    <>
      <button onClick={updateRandomNumber}>Update</button>
    </>
  );
};

export default DisplayRandom;
