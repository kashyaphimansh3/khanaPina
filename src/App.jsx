import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/Login";
import OrderTracking from "./pages/OrderTracking";
import Signup from "./pages/Signup";
import RestaurantDetails from "./pages/RestaurantDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import SavedAddresses from "./pages/SavedAddresses";
import Payment from "./pages/Payment";
import ForgotPassword from "./pages/ForgotPassword";
function App(){

    return(

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home/>}/>

                <Route path="/login" element={<Login/>}/>

                <Route path="/signup" element={<Signup/>}/>
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route
    path="/restaurant/:id"
    element={<RestaurantDetails />}
/>
                <Route
path="/payment"
element={<Payment/>}


/>
<Route
    path="/orders"
    element={<Orders />}
/>

<Route
    path="/profile"
    element={<Profile />}
/>
<Route
    path="/wishlist"
    element={<Wishlist />}
/>
<Route
    path="/about"
    element={<About />}
/>
<Route
    path="/tracking"
    element={<OrderTracking />}
/>
<Route
    path="/edit-profile"
    element={<EditProfile />}
/>
<Route
    path="/saved-addresses"
    element={<SavedAddresses />}
/>
<Route
    path="/forgot-password"
    element={<ForgotPassword />}
/>
            </Routes>
            




        </BrowserRouter>

    )

}

export default App;