import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {

  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (restaurant) => {

    const exists = wishlist.find(
      (item) => item.id === restaurant.id
    );

    if (!exists) {
      setWishlist([...wishlist, restaurant]);
    }
  };

  const removeFromWishlist = (id) => {

    setWishlist(
      wishlist.filter((item) => item.id !== id)
    );

  };

  const isWishlisted = (id) => {

    return wishlist.some(
      (item) => item.id === id
    );

  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () =>
  useContext(WishlistContext);