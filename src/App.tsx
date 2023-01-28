import React from "react";
import CountDisplay from "./components/CountDisplay/CountDisplay";
import Display from "./components/Display/Display";
import Form from "./components/Form/Form";
import Heading from "./components/Heading/Heading";
import Manipulator from "./components/Manipulator/Manipulator";
import Table from "./components/Table/Table";
import TodoDisplay from "./components/TodoDisplay/TodoDisplay";
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
      <Table response={response} />
      {/* props = properties = własciwości */}
      <Display response={response} />
      <TodoDisplay todo={todo} />
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

// 1. Przekaż obiekt response do komponentu Table.tsx propsem. Nie zapomnij o odebraniu propsów, destrukturyzacji i intefejsie
// 2. Wyświetl dane w tabeli (po lewej w tabeli imie nazwisko wiek, po prawej dane)
