import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import { useWishlist } from "../../context/WishlistContext";

import "../../styles/restaurantCard.css";

function RestaurantCard({ restaurant }) {

    const navigate = useNavigate();

    const {
        addToWishlist,
        removeFromWishlist,
        isWishlisted
    } = useWishlist();

    const wishlisted = isWishlisted(restaurant.id);

    const handleWishlist = (e) => {

        e.stopPropagation();

        if (wishlisted) {

            removeFromWishlist(restaurant.id);

        } else {

            addToWishlist(restaurant);

        }

    };

    return (

        <div
            className="restaurant-card"
            onClick={() =>
                navigate(`/restaurant/${restaurant.id}`)
            }
        >

            <button
                className="wishlist-btn"
                onClick={handleWishlist}
            >

                <FaHeart
                    color={wishlisted ? "#FF3B5C" : "#ccc"}
                />

            </button>

            <img
                src={restaurant.image}
                alt={restaurant.name}
            />

            <div className="restaurant-info">

                <h3>{restaurant.name}</h3>

                <p>{restaurant.cuisine}</p>

                <div className="restaurant-meta">

                    <span>⭐ {restaurant.rating}</span>

                    <span>{restaurant.deliveryTime} mins</span>

                </div>

                <div className="restaurant-bottom">

                    <span>
                        ₹{restaurant.priceForTwo} for two
                    </span>

                    <span>
                        {restaurant.distance}
                    </span>

                </div>

                <span className="offer">

                    {restaurant.offer}

                </span>

            </div>

        </div>

    );

}

export default RestaurantCard;