import { Link } from "react-router-dom";
import {
    FaShoppingCart,
    FaHeart,
    FaSearch,
    FaBars
} from "react-icons/fa";

import "../../styles/navbar.css";

function Navbar(){

    return(

        <header className="navbar">

            <div className="container nav-container">

                <Link to="/" className="logo">

                    🍔 QuickBite

                </Link>

                <nav className="nav-links">

                    <Link to="/">Home</Link>

                    <Link to="/">Restaurants</Link>

                    <Link to="/">Offers</Link>

                    <Link to="/">About</Link>

                    <Link to="/">Contact</Link>

                </nav>

                <div className="nav-right">

                    <div className="search-box">

                        <FaSearch/>

                        <input
                            type="text"
                            placeholder="Search food..."
                        />

                    </div>

                    <FaHeart className="icon"/>

                    <FaShoppingCart className="icon"/>

                    <button className="login-btn">

                        Login

                    </button>

                    <button className="signup-btn">

                        Signup

                    </button>

                    <FaBars className="menu"/>

                </div>

            </div>

        </header>

    )

}

export default Navbar;