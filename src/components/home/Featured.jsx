import restaurants from "../../data/restaurants";
import RestaurantCard from "../restaurant/RestaurantCard";

function Featured() {

  const featuredRestaurants = restaurants.filter(
    (restaurant) => restaurant.featured
  );

  return (

    <section className="container featured-section">

      <div className="section-header">

        <h2>⭐ Featured Restaurants</h2>

        <p>
          Handpicked restaurants loved by our customers.
        </p>

      </div>

      <div className="restaurant-grid">

        {featuredRestaurants.map((restaurant) => (

          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
          />

        ))}

      </div>

    </section>

  );

}

export default Featured;