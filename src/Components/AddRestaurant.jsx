import React, { useState } from "react";

const AddRestaurant = (props) => {
  // setting inital states for Component
  const formState = {
    id: null,
    name: "",
    description: "",
    rating: "",
    visited: "",
  };
  const [restaurant, setRestaurant] = useState(formState);

  // getting form inputs and setting them as states
  const handleInput = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  // handle restaurant form on submission
  const submitRestaurant = (e) => {
    e.preventDefault();
    if (
      !restaurant.name ||
      !restaurant.description ||
      !restaurant.rating ||
      !restaurant.visited
    )
      return;
    props.addRestaurant(restaurant);
    setRestaurant(formState);
  };

  return (
    <form onSubmit={submitRestaurant} className="text-light font-weight-bold">
      <div class="form-group">
        <label for="">Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          placeholder="restaurant name"
          value={restaurant.name}
          onChange={handleInput}
        />
      </div>
      <div class="form-group">
        <label for="">Description</label>
        <input
          type="text"
          class="form-control"
          name="description"
          placeholder="Descrição"
          value={restaurant.description}
          onChange={handleInput}
        />
      </div>
      <div class="form-group">
        <label for="">Nota</label>
        <input
          type="text"
          class="form-control"
          name="rating"
          placeholder="Nota"
          value={restaurant.rating}
          onChange={handleInput}
        />
      </div>
      <div class="form-group">
        <label for="">Visited</label>
        <input
          type="text"
          class="form-control"
          name="visited"
          placeholder="Visitado?"
          value={restaurant.visited}
          onChange={handleInput}
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Adiicionar restaurante
      </button>
    </form>
  );
};

export default AddRestaurant;
