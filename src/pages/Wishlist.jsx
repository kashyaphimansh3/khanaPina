import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { useWishlist } from "../context/WishlistContext";
import "../styles/wishlist.css";

function Wishlist() {

  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  return (
    <>
      <Navbar />

      <div className="container wishlist-page">

        <h1>❤️ My Wishlist</h1>

        {wishlist.length === 0 ? (

          <div className="empty-wishlist">

            <h2>No favourites yet.</h2>

            <p>
              Save your favourite restaurants to see them here.
            </p>

            <Link to="/" className="browse-btn">
              Browse Restaurants
            </Link>

          </div>

        ) : (

          <div className="wishlist-grid">

            {wishlist.map((restaurant) => (

              <div
                className="wishlist-card"
                key={restaurant.id}
              >

                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                />

                <div className="wishlist-info">

                  <h2>{restaurant.name}</h2>

                  <p>{restaurant.cuisine}</p>

                  <div className="wishlist-meta">

                    <span>
                      ⭐ {restaurant.rating}
                    </span>

                    <span>
                      {restaurant.deliveryTime} mins
                    </span>

                  </div>

                  <p className="price">

                    ₹{restaurant.priceForTwo} for two

                  </p>

                  <div className="wishlist-buttons">

                    <Link
                      to={`/restaurant/${restaurant.id}`}
                    >

                      <button className="view-btn">

                        View

                      </button>

                    </Link>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeFromWishlist(restaurant.id)
                      }
                    >

                      Remove

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </>
  );
}

export default Wishlist;