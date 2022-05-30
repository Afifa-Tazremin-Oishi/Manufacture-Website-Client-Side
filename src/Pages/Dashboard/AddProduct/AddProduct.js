import React, { useState } from "react";
import { toast } from "react-toastify";
import "./AddProduct.css";

const AddProduct = () => {
  const [available, setAvailable] = useState();
  const [minimum, setMinimum] = useState();

  const handleAvailable = (event) => {
    setAvailable(parseInt(event.target.value));
  };

  const handleMinimumQuantity = (event) => {
    setMinimum(parseInt(event.target.value));
  };

  const handleAddProduct = (event) => {
    event.preventDefault();

    const tool = {
      img: event.target.img.value,
      name: event.target.name.value,
      description: event.target.description.value,
      available: event.target.available.value,
      minimum: event.target.minimum.value,
      price: event.target.price.value,
    };

    fetch("https://aqueous-savannah-68941.herokuapp.com/tools", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tool),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Product successfully added.");
          event.target.reset();
        }
      });
  };

  return (
    <section className="add-product-section">
      <h3 className="review-title">Add a Product</h3>
      <hr />
      <div className="add-review-container">
        <div className="add-product-form">
          <form onSubmit={handleAddProduct}>
            <input
              className="add-input-field"
              type="text"
              name="name"
              id=""
              placeholder="Product Name"
            />

            <input
              onChange={handleAvailable}
              type="number"
              name="available"
              id="available-input-field"
              placeholder="Available quantity"
            />

            <label>
              {available < 1 && (
                <span className="text-xs label-text text-red-600">
                  Available Quantity must be 1 or longer
                </span>
              )}
            </label>

            <input
              onChange={handleMinimumQuantity}
              type="number"
              name="minimum"
              id="quantity-input-field"
              placeholder="Minimum quantity"
            />

            <label>
              {minimum < 1 && (
                <span className="text-xs label-text text-red-600">
                  Minimum Quantity must be 1 or longer
                </span>
              )}
              {minimum > available && (
                <span className="text-xs label-text text-red-600">
                  Minimum Quantity must be less than available quantity
                </span>
              )}
            </label>

            <input
              className="add-input-field"
              type="number"
              name="price"
              id=""
              placeholder="Per Unit Price"
            />

            <input
              className="add-input-field"
              type="text"
              name="img"
              id=""
              placeholder="Product Image URL"
            />

            <textarea
              className="address-input-field"
              name="description"
              id=""
              cols="30"
              rows="2"
              placeholder="Product description"
              required
            ></textarea>

            <input
              disabled={minimum < 1 || available < 1 || minimum > available}
              className="btn btn-primary text-white font-bold confirm-btn"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
