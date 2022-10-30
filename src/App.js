import React, { useEffect, useState } from "react";
import "./index.css";
import Restaurants from "./Components/Restaurants";
import AddRestaurant from "./Components/AddRestaurant";
//import "bootstrap/dist/css/bootstrap.min.css";
import EditRestaurant from "./Components/EditRestaurant";
import axios from "axios";

function App() {
  // setting initial states

  const [restaurantData, setRestaurantData] = useState([]);
  const formState = {
    id: null,
    name: "",
    description: "",
    rating: "",
    visited: "",
  };
  const [restaurants, setRestaurants] = useState(restaurantData);
  const [edit, setEdit] = useState(false);
  const [currentRestaurant, setCurrentRestaurant] = useState(formState);

  // CRUD OPERATIONS
  // CREATE A restaurant
  const addRestaurant = (restaurant) => {
    restaurant.id = restaurants.length + 1;
    setRestaurants([...restaurants, restaurant]);
  };

  // EDIT A restaurant
  const editRestaurant = (restaurant) => {
    setEdit(true);
    setCurrentRestaurant({
      id: restaurant.id,
      name: restaurant.name,
      description: restaurant.description,
      rating: restaurant.rating,
      visited: restaurant.visited,
    });
  };
  // UPDATE A restaurant
  const updateRestaurant = (id, updatedRestaurant) => {
    setEdit(false);
    setRestaurants(
      restaurants.map((restaurant) =>
        restaurant.id === id ? updatedRestaurant : restaurant
      )
    );
  };
  // REMOVE A restaurant
  const deleteRestaurant = (id) => {
    setEdit(false);
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
  };
  useEffect(() => {
    axios
      .get(
        "https://restaurants-service-heroku.herokuapp.com/api/restaurants/lista"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container">
      <div className="header">
        <h1>TOP 10 RESTAURANTES DO ZAP</h1>
        <br />
        <br />
      </div>
      <div className="row library">
        <div className="col-sm-6 add-restaurant">
          {edit ? (
            <div>
              <h2>Edit restaurant</h2>
              <EditRestaurant
                edit={edit}
                setEdit={setEdit}
                currentRestaurant={currentRestaurant}
                updaterestaurant={updateRestaurant}
              />
            </div>
          ) : (
            <div>
              <h1>Adicionar restaurante</h1>
              <AddRestaurant addRestaurant={addRestaurant} />
            </div>
          )}
        </div>
        <div className="col-md-6">
          <h1>Available restaurants</h1>
          <Restaurants
            restaurants={restaurants}
            editRestaurant={editRestaurant}
            deleteRestaurant={deleteRestaurant}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
