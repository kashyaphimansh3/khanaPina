import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    const addToCart = (food) => {

        const existing = cart.find(item => item.id === food.id);

        if(existing){

            setCart(cart.map(item =>
                item.id === food.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ));

        }else{

            setCart([
                ...cart,
                {
                    ...food,
                    quantity:1
                }
            ]);

        }

    };

    const removeFromCart = (id)=>{

        setCart(cart.filter(item=>item.id!==id));

    };

    const increaseQuantity=(id)=>{

        setCart(cart.map(item=>

            item.id===id
            ? {...item,quantity:item.quantity+1}
            :item

        ));

    };

    const decreaseQuantity=(id)=>{

        setCart(cart.map(item=>

            item.id===id
            ? {...item,quantity:item.quantity-1}
            :item

        ).filter(item=>item.quantity>0));

    };

    const totalPrice=cart.reduce(

        (total,item)=>total+item.price*item.quantity,

        0

    );

    return(

        <CartContext.Provider

            value={{

                cart,

                addToCart,

                removeFromCart,

                increaseQuantity,

                decreaseQuantity,

                totalPrice

            }}

        >

            {children}

        </CartContext.Provider>

    );

}

export const useCart=()=>useContext(CartContext);