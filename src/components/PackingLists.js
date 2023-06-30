/** @format */

import { useState } from "react";
import Item from "./Item";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Tissue", quantity: 30, packed: true },

// ];

const PackingLists = ({
  items,
  onDeleteItem,
  onPackedItems,
  onClearHandle,
}) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onPackedItems={onPackedItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input status</option>
          <option value="description">Sort by Description status</option>
          <option value="packed">Sort by Packed status</option>
        </select>
        <button onClick={onClearHandle}>clear list</button>
      </div>
    </div>
  );
};

export default PackingLists;
