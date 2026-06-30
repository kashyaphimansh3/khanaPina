import { useState } from "react";
import restaurants from "../../data/restaurants";
import RestaurantCard from "../restaurant/RestaurantCard";
import { useSearch } from "../../context/SearchContext";

function CategorySection({
  selectedCategory,
  sortBy,
  activeFilter,
}) {

  const { searchTerm } = useSearch();

  const [visibleCount, setVisibleCount] = useState(6);

  let filteredRestaurants = restaurants.filter((restaurant) => {

    const search = searchTerm.toLowerCase();

    const matchesSearch =
      restaurant.name.toLowerCase().includes(search) ||
      restaurant.cuisine.toLowerCase().includes(search) ||
      restaurant.offer.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "All" ||
      restaurant.category.toLowerCase() ===
        selectedCategory.toLowerCase();

    let matchesFilter = true;

    switch (activeFilter) {

      case "Trending":
        matchesFilter = restaurant.trending;
        break;

      case "Best Seller":
        matchesFilter = restaurant.bestSeller;
        break;

      case "Free Delivery":
        matchesFilter = restaurant.freeDelivery;
        break;

      case "Pure Veg":
        matchesFilter = restaurant.pureVeg;
        break;

      default:
        matchesFilter = true;
    }

    return (
      matchesSearch &&
      matchesCategory &&
      matchesFilter
    );

  });

  switch (sortBy) {

    case "rating":
      filteredRestaurants.sort((a, b) => b.rating - a.rating);
      break;

    case "lowPrice":
      filteredRestaurants.sort((a, b) => a.priceForTwo - b.priceForTwo);
      break;

    case "highPrice":
      filteredRestaurants.sort((a, b) => b.priceForTwo - a.priceForTwo);
      break;

    case "delivery":
      filteredRestaurants.sort((a, b) => a.deliveryTime - b.deliveryTime);
      break;

    default:
      break;

  }

  return (

    <section className="container">

      <h2>Popular Restaurants</h2>

      <div className="restaurant-grid">

        {filteredRestaurants.length > 0 ? (

          filteredRestaurants
            .slice(0, visibleCount)
            .map((restaurant) => (

              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
              />

            ))

        ) : (

          <h2
            style={{
              textAlign: "center",
              margin: "70px auto"
            }}
          >
            😔 No Restaurants Found
          </h2>

        )}

      </div>

      {visibleCount < filteredRestaurants.length && (

        <div className="load-more-box">

          <button
            onClick={() =>
              setVisibleCount(visibleCount + 6)
            }
          >
            Load More Restaurants →
          </button>

        </div>

      )}

    </section>

  );

}

export default CategorySection;