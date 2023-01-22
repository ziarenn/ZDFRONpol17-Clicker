import React from "react";

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

interface DisplayProps {
  response: Person;
}

const Display = ({ response }: DisplayProps) => {
  return (
    <div>
      <p>{response.firstName}</p>
      <p>123 to jest display</p>
    </div>
  );
};

export default Display;
