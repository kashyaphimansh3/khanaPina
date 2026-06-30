import { useCart } from "../../context/CartContext";

function FoodCard({ food }) {

    const { addToCart } = useCart();

    return (

        <div className="restaurant-card">

            <img
                src={food.image}
                alt={food.name}
            />

            <div className="restaurant-info">

                <h3>{food.name}</h3>

                <p>{food.description}</p>

                <h2>₹{food.price}</h2>

                <button
                    className="signup-btn"
                    onClick={() => addToCart(food)}
                >
                    Add To Cart
                </button>

            </div>

        </div>

    );

}

export default FoodCard;