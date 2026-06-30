import restaurants from "../../data/restaurants";
import RestaurantCard from "../restaurant/RestaurantCard";
import "../../styles/trending.css";

function Trending() {

    const trendingRestaurants =
        restaurants.filter(
            restaurant => restaurant.trending
        );

    return (

        <section className="container trending-section">

            <div className="section-header">

                <h2>🔥 Trending Near You</h2>

                <p>

                    Most ordered restaurants this week.

                </p>

            </div>

            <div className="restaurant-grid">

                {trendingRestaurants.map((restaurant) => (

                    <RestaurantCard

                        key={restaurant.id}

                        restaurant={restaurant}

                    />

                ))}

            </div>

        </section>

    );

}

export default Trending;