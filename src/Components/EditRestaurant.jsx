import React, { useState, useEffect } from "react";

const EditRestaurant = (props) => {
  // setting initial states
  const [restaurant, setRestaurant] = useState(props.currentRestaurant);

  // effect hook to set setrestaurant state to current selected restaurant for editing
  useEffect(() => {
    setRestaurant(props.currentRestaurant);
  }, [props]);

  // getting edit form inputs and setting them as states for setrestaurant
  const handleInput = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  // handle edit form submission, update values in form
  const submitEditForm = (e) => {
    e.preventDefault();
    props.updateRestaurant(restaurant.id, restaurant);
  };

  return (
    <form onSubmit={submitEditForm} className="text-light font-weight-bold">
      <div className="form-group">
        <label for="">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="restaurant name"
          value={restaurant.name}
          onChange={handleInput}
        />
      </div>
      <div className="form-group">
        <label for="">Descrição</label>
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="Descrição"
          value={restaurant.decription}
          onChange={handleInput}
        />
      </div>
      <div className="form-group">
        <label for="">Nota</label>
        <input
          type="text"
          className="form-control"
          name="rating"
          placeholder="Nota"
          value={restaurant.rating}
          onChange={handleInput}
        />
      </div>
      <div className="form-group">
        <label for="">Visitado</label>
        <input
          type="text"
          className="form-control"
          name="visited"
          placeholder="Visitado ?"
          value={restaurant.visited}
          onChange={handleInput}
        />
      </div>
      <button className="btn btn-primary mr-4">Enviar</button>
      <button
        type="submit"
        className="btn btn-warning"
        onClick={() => props.setEdit(false)}
      >
        Cancelar
      </button>
    </form>
  );
};

export default EditRestaurant;
