import { useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import {
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaBars,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";

import { useCart } from "../../context/CartContext";
import "../../styles/navbar.css";

function Navbar() {
  const { cart } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="container nav-container">

        {/* Logo */}

        <Link to="/" className="logo">

          🍛 <span>KhanaPina</span>

        </Link>

        {/* Navigation */}

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <Link to="/">Home</Link>

          <Link to="/">Restaurants</Link>

          <Link to="/">Offers</Link>

          <Link to="/orders">My Orders</Link>

          <Link to="/about">About</Link>

        </nav>

        {/* Right Side */}

        <div className="nav-right">

          {/* Search */}

          <div className="search-box">

            <FaSearch className="search-icon"/>

            <input
    type="text"
    placeholder="Search restaurants..."
    value={searchTerm}
    onChange={(e) =>
        setSearchTerm(e.target.value)
    }
/>

          </div>

          {/* Wishlist */}

          <Link
            to="/wishlist"
            className="icon-link"
          >

            <FaHeart className="icon"/>

          </Link>

          {/* Profile */}

          <Link
            to="/profile"
            className="icon-link"
          >

            <FaUserCircle className="icon"/>

          </Link>

          {/* Cart */}

          <Link
            to="/cart"
            className="cart-link"
          >

            <FaShoppingCart className="icon"/>

            {cart.length > 0 && (

              <span className="cart-count">

                {cart.length}

              </span>

            )}

          </Link>

          {/* Login */}

          <Link to="/login">

            <button className="login-btn">

              Login

            </button>

          </Link>

          {/* Signup */}

          <Link to="/signup">

            <button className="signup-btn">

              Signup

            </button>

          </Link>

          {/* Mobile Menu */}

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;