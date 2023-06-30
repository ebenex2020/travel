/** @format */
import { useState } from "react";

import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingLists from "./components/PackingLists";
import Stats from "./components/Stats";

import "./index.css";

const App = () => {
  const [items, setItems] = useState([]);

  const itemsHandler = (item) => {
    setItems((items) => [...items, item]);
  };

  const itemsDeleteHandler = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const itemsPackedHandler = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClear = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete the items"
    );

    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={itemsHandler} />
      <PackingLists
        items={items}
        onDeleteItem={itemsDeleteHandler}
        onPackedItems={itemsPackedHandler}
        onClearHandle={handleClear}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
