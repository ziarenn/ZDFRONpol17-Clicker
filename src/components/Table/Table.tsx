import React from "react";

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

interface TableProps {
  response: Person;
}

const Table = ({ response }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Imie</th>
          <th>{response.firstName}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Nazwisko</th>
          <th>{response.lastName}</th>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Wiek</th>
          <th>{response.age}</th>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
//      imie | xyz
// nazwisko  | xyz
// wiek      | xyz
