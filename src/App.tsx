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
  // symulacja fetcha
  const response = {
    firstName: "John",
    lastName: "Smith",
    age: 30,
  };

  const todo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  return (
    <div className="App">
      <Heading />
      <CountDisplay />
      <Manipulator />
      <Form />
      <Table />
      {/* props = properties = własciwości */}
      <Display response={response} />
    </div>
  );
}

export default App;

// const props = {
//   dataToPassDown: response,
// };

// PRZEKAZYWANIE DANYCH Z KOMPONENTU RODZICA DO KOMPONENTU DZIECKA - PROPS
// 1. Wpisanie propsa w tag komponentu (wyświetlnie).
// 2. Stworzenie odpowiedniego interfejsu w komponencie który odbiera dane. Pamiętaj że nawet jeżeli przekazujesz tylko 1 prop, jest on obwijany obiektem.
// 3. Odebranie propsów przez parametr w komponencie dziecku. Od razu destrukturyzuj parametr.
// 4. Korzystaj z danych.

// 1. Stwórz komponent TodoDisplay. W tym komponencie wyświetlaj diva. Sam komponent wyświetl w App.tsx
// 2. Propsem przekaż obiekt todo do TodoDisplay.
// 3. Wszystkie własności obiektu wyświetlaj w TodoDisplay w divie w osobnych paragrafach (<p>)
