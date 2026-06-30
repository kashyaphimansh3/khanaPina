import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import {
  FaCheckCircle,
  FaUtensils,
  FaMotorcycle,
  FaHome,
  FaPhoneAlt,
  FaUserCircle,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../styles/orderTracking.css";

function OrderTracking() {

  const order = {

    id: "QB728194",

    status: "Preparing",

    eta: "25 mins",

    rider: {

      name: "Rahul Verma",

      phone: "+91 9876543210",

      rating: "4.9"

    },

    address: {

      title: "Home",

      location:
        "Sant Nagar, Burari, Delhi"

    }

  };

  const orderedItems = [

    {

      id: 1,

      name: "Cheese Burger",

      qty: 2,

      price: 299

    },

    {

      id: 2,

      name: "Farmhouse Pizza",

      qty: 1,

      price: 449

    },

    {

      id: 3,

      name: "Cold Coffee",

      qty: 2,

      price: 149

    }

  ];

  const subtotal = orderedItems.reduce(

    (sum, item) =>

      sum + item.price * item.qty,

    0

  );

  const deliveryFee = 49;

  const gst = Math.round(subtotal * 0.05);

  const total = subtotal + deliveryFee + gst;

  return (

    <>

      <Navbar />

      <div className="container tracking-page">

        {/* Header */}

        <div className="tracking-header">

          <div>

            <h1>

              📦 Track Your Order

            </h1>

            <p>

              Order ID :
              <strong>

                {" "}

                {order.id}

              </strong>

            </p>

          </div>

          <div className="status-pill">

            {order.status}

          </div>

        </div>

        {/* Progress */}

        <div className="progress-card">

          <h2>

            Order Status

          </h2>

          <div className="timeline">

            <div className="timeline-step completed">

              <FaCheckCircle />

              <span>

                Order Placed

              </span>

            </div>

            <div className="timeline-line active"></div>

            <div className="timeline-step active">

              <FaUtensils />

              <span>

                Preparing

              </span>

            </div>

            <div className="timeline-line"></div>

            <div className="timeline-step">

              <FaMotorcycle />

              <span>

                Out for Delivery

              </span>

            </div>

            <div className="timeline-line"></div>

            <div className="timeline-step">

              <FaHome />

              <span>

                Delivered

              </span>

            </div>

          </div>

        </div>

        {/* Two Column */}

        <div className="tracking-grid">

          {/* Left */}

          <div>

            {/* ETA */}

            <div className="tracking-card">

              <h2>

                <FaClock />

                Estimated Arrival

              </h2>

              <h1>

                {order.eta}

              </h1>

            </div>

            {/* Rider */}

            <div className="tracking-card">

              <h2>

                <FaUserCircle />

                Delivery Partner

              </h2>

              <h3>

                {order.rider.name}

              </h3>

              <p>

                ⭐ {order.rider.rating}

              </p>

              <button className="call-btn">

                <FaPhoneAlt />

                Call Rider

              </button>

            </div>

            {/* Address */}

            <div className="tracking-card">

              <h2>

                <FaMapMarkerAlt />

                Delivery Address

              </h2>

              <h3>

                {order.address.title}

              </h3>

              <p>

                {order.address.location}

              </p>

            </div>

          </div>

          {/* Right */}

          <div className="tracking-card">

            <h2>

              Ordered Items

            </h2>

            {

              orderedItems.map(item => (

                <div

                  key={item.id}

                  className="tracking-item"

                >

                  <div>

                    <h4>

                      {item.name}

                    </h4>

                    <p>

                      Qty : {item.qty}

                    </p>

                  </div>

                  <strong>

                    ₹{item.qty * item.price}

                  </strong>

                </div>

              ))

            }

            <hr />

            <div className="bill-row">

              <span>

                Subtotal

              </span>

              <span>

                ₹{subtotal}

              </span>

            </div>

            <div className="bill-row">

              <span>

                Delivery Fee

              </span>

              <span>

                ₹{deliveryFee}

              </span>

            </div>

            <div className="bill-row">

              <span>

                GST

              </span>

              <span>

                ₹{gst}

              </span>

            </div>

            <hr />

            <div className="bill-row total">

              <span>

                Grand Total

              </span>

              <span>

                ₹{total}

              </span>

            </div>

            <button className="cancel-order">

              Cancel Order

            </button>

          </div>

        </div>

      </div>

      <Footer />

    </>

  );

}

export default OrderTracking;