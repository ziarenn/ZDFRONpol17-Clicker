import { useState } from "react";

const DisplayRandom = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  const updateRandomNumber = () => {
    const random = Math.random();
    setRandomNumber(random);
  };

  return (
    <>
      <p>{randomNumber}</p>
      <button onClick={updateRandomNumber}>Update</button>
    </>
  );
};

export default DisplayRandom;
