import { useParams } from "react-router-dom";

import restaurants from "../data/restaurants";
import foodItems from "../data/foodItems";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FoodCard from "../components/restaurant/FoodCard";

import "../styles/restaurantDetails.css";

function RestaurantDetails() {

    const { id } = useParams();

    const restaurant = restaurants.find(
        r => r.id === Number(id)
    );

    const menu = foodItems.filter(
        item => item.restaurantId === Number(id)
    );

    if (!restaurant)
        return <h1>Restaurant Not Found</h1>;

    return (

        <>

        <Navbar />

        <div className="container restaurant-page">

            {/* Banner */}

            <img
                src={restaurant.image}
                alt={restaurant.name}
                className="restaurant-banner"
            />

            {/* Restaurant Information */}

            <div className="restaurant-header">

                <div>

                    <h1>

                        {restaurant.name}

                    </h1>

                    <p>

                        {restaurant.cuisine}

                    </p>

                    <p>

                        📍 {restaurant.distance}

                    </p>

                </div>

                <div className="restaurant-rating">

                    ⭐ {restaurant.rating}

                </div>

            </div>

            {/* Information Cards */}

            <div className="restaurant-info-grid">

                <div className="info-card">

                    <h3>🚚 Delivery</h3>

                    <p>

                        {restaurant.deliveryTime} mins

                    </p>

                </div>

                <div className="info-card">

                    <h3>💰 Cost</h3>

                    <p>

                        ₹{restaurant.priceForTwo} for two

                    </p>

                </div>

                <div className="info-card">

                    <h3>🎁 Offer</h3>

                    <p>

                        {restaurant.offer}

                    </p>

                </div>

                <div className="info-card">

                    <h3>🕒 Opening Hours</h3>

                    <p>

                        10:00 AM - 11:00 PM

                    </p>

                </div>

            </div>

            {/* Menu */}

            <div className="menu-section">

                <h2>

                    🍽 Our Menu

                </h2>

                <div className="restaurant-grid">

                    {menu.map(food => (

                        <FoodCard
                            key={food.id}
                            food={food}
                        />

                    ))}

                </div>

            </div>
                        {/* Reviews */}

            <div className="review-section">

                <h2>

                    ⭐ Customer Reviews

                </h2>

                <div className="review-card">

                    <h4>Rahul Sharma</h4>

                    <span>★★★★★</span>

                    <p>

                        Amazing food quality and super fast delivery.
                        Highly recommended!

                    </p>

                </div>

                <div className="review-card">

                    <h4>Priya Singh</h4>

                    <span>★★★★☆</span>

                    <p>

                        Great taste, nice packaging and reasonable prices.

                    </p>

                </div>

            </div>

            {/* Similar Restaurants */}

            <div className="similar-section">

                <h2>

                    🍴 Similar Restaurants

                </h2>

                <div className="similar-grid">

                    {restaurants

                        .filter(

                            r =>
                                r.category === restaurant.category &&
                                r.id !== restaurant.id

                        )

                        .slice(0,3)

                        .map(r => (

                            <div
                                key={r.id}
                                className="similar-card"
                            >

                                <img
                                    src={r.image}
                                    alt={r.name}
                                />

                                <h3>

                                    {r.name}

                                </h3>

                                <p>

                                    ⭐ {r.rating}

                                </p>

                            </div>

                        ))}

                </div>

            </div>

            {/* Recommended Foods */}

            <div className="recommend-section">

                <h2>

                    🍕 Recommended Foods

                </h2>

                <div className="restaurant-grid">

                    {foodItems

                        .filter(

                            item =>
                                item.restaurantId === restaurant.id

                        )

                        .slice(0,4)

                        .map(food => (

                            <FoodCard

                                key={food.id}

                                food={food}

                            />

                        ))}

                </div>

            </div>

        </div>

        <Footer />

        </>

    );

}

export default RestaurantDetails;