import React from "react";
import CountDisplay from "./components/CountDisplay/CountDisplay";
import Display from "./components/Display/Display";
import Form from "./components/Form/Form";
import Heading from "./components/Heading/Heading";
import Manipulator from "./components/Manipulator/Manipulator";
import Table from "./components/Table/Table";
// jsx - javascript expression
// tsx
function App() {
  return (
    <div className="App">
      <Heading />
      <CountDisplay />
      <Manipulator />
      <Form />
      <Table />
    </div>
  );
}

export default App;
