import React, { useState } from "react";
import Item from "./Item";
import itemData from "../data/items";
import Filter from "./Filter";
import ItemForm from "./ItemForm";

function ShoppingList() {
  const [items, setItems] = useState(itemData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  const itemsToDisplay = items
    .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        search={search}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
