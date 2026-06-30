import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import "../styles/orders.css";

function Orders() {

  const orders = [

    {
      id: 1001,
      restaurant: "Burger House",
      items: "Classic Cheese Burger x2",
      total: 498,
      status: "Delivered",
      date: "28 June 2026",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    },

    {
      id: 1002,
      restaurant: "Pizza Hub",
      items: "Farmhouse Pizza x1",
      total: 349,
      status: "On The Way",
      date: "Today",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    },

    {
      id: 1003,
      restaurant: "Chinese Wok",
      items: "Hakka Noodles x1",
      total: 249,
      status: "Cancelled",
      date: "25 June 2026",
      image:
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500",
    },

  ];

  return (

    <>

      <Navbar />

      <div className="container orders-page">

        <div className="orders-header">

          <h1>

            My Orders

          </h1>

          <p>

            Track your current and previous orders.

          </p>

        </div>

        {

          orders.map((order)=>(

            <div
              className="order-card"
              key={order.id}
            >

              <img
                src={order.image}
                alt={order.restaurant}
              />

              <div className="order-details">

                <h2>

                  {order.restaurant}

                </h2>

                <p>

                  {order.items}

                </p>

                <p className="date">

                  {order.date}

                </p>

              </div>

              <div className="order-price">

                <h2>

                  ₹{order.total}

                </h2>

              </div>

              <div className="order-status">

                <span
                  className={
                    order.status==="Delivered"

                      ?

                      "status delivered"

                      :

                      order.status==="Cancelled"

                      ?

                      "status cancelled"

                      :

                      "status progress"
                  }
                >

                  {order.status}

                </span>

                {

                  order.status==="On The Way"

                  &&

                  <Link
                    to="/tracking"
                  >

                    <button
                      className="track-btn"
                    >

                      🚚 Track Order

                    </button>

                  </Link>

                }

                <button
                  className="reorder-btn"
                >

                  🔄 Reorder

                </button>

              </div>

            </div>

          ))

        }

      </div>

      <Footer />

    </>

  );

}

export default Orders;