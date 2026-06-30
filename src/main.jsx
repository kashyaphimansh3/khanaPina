import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/checkout.css";
import { WishlistProvider } from "./context/WishlistContext";
import { SearchProvider } from "./context/SearchContext";
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/home.css";
import "./styles/buttons.css";
import "./styles/restaurantcard.css";
import "./styles/categoryFilter.css";
import { CartProvider } from "./context/CartContext";
import "./styles/sortBar.css";
import "./styles/filterChips.css";
import "./styles/featured.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>

    <WishlistProvider>

        <SearchProvider>

            <App/>

        </SearchProvider>

    </WishlistProvider>

</CartProvider>
  </React.StrictMode>
);