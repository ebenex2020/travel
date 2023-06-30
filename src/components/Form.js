/** @format */

import { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItems = { description, quantity, parked: false, id: Date.now() };

    if (!description) return;

    onAddItems(newItems);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form " onSubmit={handleSubmit}>
      <h3>What do you need for your 😈 Trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
};

export default Form;
