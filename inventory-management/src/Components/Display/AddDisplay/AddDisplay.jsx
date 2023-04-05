import React, { useState } from "react";

const AddItem = (props) => {
  const [newProduct, setNewProduct] = useState({
    itemNumber: "",
    usd: "",
    weight: "",
    post: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addNewProductProperty(newProduct);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Item Number</label>
      <input
        type="text"
        name="itemNumber"
        value={newProduct.itemNumber}
        onChange={handleChange}
      />
      <label>USD</label>
      <input
        type="text"
        name="usd"
        value={newProduct.usd}
        onChange={handleChange}
      />
      <label>Weight</label>
      <input
        type="text"
        name="weight"
        value={newProduct.weight}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default AddItem;