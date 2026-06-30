import Navbar from "../components/layout/Navbar";
import { useCart } from "../context/CartContext";
import "../styles/cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <>
        <Navbar />

        <div className="empty-cart">
          <h1>🛒 Your Cart is Empty</h1>
          <p>Add some delicious food to get started.</p>
        </div>
      </>
    );
  }

  const deliveryFee = 49;
  const tax = Math.round(totalPrice * 0.05);
  const grandTotal = totalPrice + deliveryFee + tax;

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="cart-page">

          <div className="cart-left">

            <h1>Shopping Cart</h1>

            {cart.map((item) => (
              <div className="cart-item" key={item.id}>

                <img src={item.image} alt={item.name} />

                <div className="cart-details">

                  <h2>{item.name}</h2>

                  <p>{item.description}</p>

                  <h3>₹{item.price}</h3>

                  <p>
                    Total : <strong>₹{item.price * item.quantity}</strong>
                  </p>

                  <div className="quantity-box">

                    <button onClick={() => decreaseQuantity(item.id)}>
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>
                      +
                    </button>

                  </div>

                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>

              </div>
            ))}

          </div>

          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span>₹{deliveryFee}</span>
            </div>

            <div className="summary-row">
              <span>Tax</span>
              <span>₹{tax}</span>
            </div>

            <hr />

            <div className="summary-row total">
              <span>Total</span>
              <span>₹{grandTotal}</span>
            </div>

            <Link to="/checkout">

  <button className="checkout-btn">
    Proceed to Checkout
  </button>

</Link>

          </div>

        </div>
      </div>
    </>
  );
}

export default Cart;