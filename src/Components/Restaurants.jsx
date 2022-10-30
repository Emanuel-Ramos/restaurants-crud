import React from "react";

const Restaurants = (props) => {
  return (
    <div className="table-responsive-sm">
      <table className="table">
        <thead>
          <tr>
            <th className="text-primary">id</th>
            <th className="text-primary">Nome</th>
            <th className="text-primary">Descrição</th>
            <th className="text-primary">Nota</th>
            <th className="text-primary">Vistado</th>
            <th className="text-primary">Edit</th>
            <th className="text-primary">Delete</th>
          </tr>
        </thead>
        <tbody className="text-light">
          {props.restaurants.length > 0 ? (
            props.restaurants.map((restaurant) => (
              <tr key={restaurant.id}>
                <td>{restaurant.id}</td>
                <td>{restaurant.name}</td>
                <td>{restaurant.description}</td>
                <td>{restaurant.rating}</td>
                <td>{restaurant.visited}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => {
                      props.editRestaurant(restaurant);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      props.deleteRestaurant(restaurant.id);
                    }}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No restaurants Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Restaurants;
