import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaClock,
  FaMobileAlt,
  FaCreditCard,
  FaMoneyBillWave,
  FaLock,
  FaTag,
  FaCheckCircle,
} from "react-icons/fa";

import Navbar from "../components/layout/Navbar";
import { useCart } from "../context/CartContext";
import coupons from "../data/coupons";

import "../styles/checkout.css";

function Checkout() {

  const { cart, totalPrice } = useCart();

  const deliveryFee = 49;

  const tax = Math.round(totalPrice * 0.05);

  // -----------------------------
  // Address
  // -----------------------------

  const [address, setAddress] = useState({

    fullName: "",

    phone: "",

    address: "",

    city: "",

    state: "",

    pincode: "",

    landmark: ""

  });

  // -----------------------------
  // Payment
  // -----------------------------

  const [payment, setPayment] =
    useState("upi");

  // -----------------------------
  // Delivery
  // -----------------------------

  const [deliveryTime, setDeliveryTime] =
    useState("express");

  // -----------------------------
  // Coupon
  // -----------------------------

  const [couponCode, setCouponCode] =
    useState("");

  const [discount, setDiscount] =
    useState(0);

  const [couponMessage, setCouponMessage] =
    useState("");

  const [selectedCoupon, setSelectedCoupon] =
    useState("");

  const grandTotal = Math.max(

    totalPrice +

    deliveryFee +

    tax -

    discount,

    0

  );

  // -----------------------------
  // Apply Coupon
  // -----------------------------

  const applyCoupon = (code = couponCode) => {

    const coupon = coupons.find(

      c =>

        c.code === code.toUpperCase()

    );

    if (!coupon) {

      setCouponMessage(

        "❌ Invalid Coupon"

      );

      setDiscount(0);

      setSelectedCoupon("");

      return;

    }

    let value = 0;

    if (coupon.type === "flat") {

      value = coupon.discount;

    }

    else {

      value = Math.round(

        totalPrice *

        coupon.discount /

        100

      );

    }

    setDiscount(value);

    setCouponCode(coupon.code);

    setSelectedCoupon(coupon.code);

    setCouponMessage(

      `🎉 ${coupon.code} Applied Successfully`

    );

  };

  return (

    <>

      <Navbar />

      <div className="container checkout-page">

        {/* LEFT */}

        <div className="checkout-left">

          <div className="page-header">

            <h1>

              Checkout

            </h1>

            <p>

              Complete your order securely.

            </p>

          </div>

          {/* Address */}

          <div className="checkout-card">

            <h2>

              <FaMapMarkerAlt />

              Delivery Address

            </h2>

            <div className="row">

              <input

                value={address.fullName}

                onChange={(e)=>

                  setAddress({

                    ...address,

                    fullName:e.target.value

                  })

                }

                placeholder="Full Name"

              />

              <input

                value={address.phone}

                onChange={(e)=>

                  setAddress({

                    ...address,

                    phone:e.target.value

                  })

                }

                placeholder="Phone Number"

              />

            </div>

            <textarea

              rows="4"

              value={address.address}

              onChange={(e)=>

                setAddress({

                  ...address,

                  address:e.target.value

                })

              }

              placeholder="Complete Address"

            />

            <div className="row">

              <input

                value={address.city}

                onChange={(e)=>

                  setAddress({

                    ...address,

                    city:e.target.value

                  })

                }

                placeholder="City"

              />

              <input

                value={address.state}

                onChange={(e)=>

                  setAddress({

                    ...address,

                    state:e.target.value

                  })

                }

                placeholder="State"

              />

            </div>

            <div className="row">

              <input

                value={address.pincode}

                onChange={(e)=>

                  setAddress({

                    ...address,

                    pincode:e.target.value

                  })

                }

                placeholder="Pincode"

              />

              <input

                value={address.landmark}

                onChange={(e)=>

                  setAddress({

                    ...address,

                    landmark:e.target.value

                  })

                }

                placeholder="Landmark"

              />

            </div>

          </div>

          {/* Delivery */}

          <div className="checkout-card">

            <h2>

              <FaClock />

              Delivery Time

            </h2>

            <label

              className={`delivery-card ${
                deliveryTime==="express"
                  ? "active"
                  : ""
              }`}

            >

              <input

                type="radio"

                checked={

                  deliveryTime==="express"

                }

                onChange={()=>

                  setDeliveryTime("express")

                }

              />

              <div className="delivery-content">

                <div>

                  <h3>

                    🚴 Express Delivery

                  </h3>

                  <p>

                    20-30 Minutes

                  </p>

                </div>

                <span className="recommended">

                  Recommended

                </span>

              </div>

            </label>

            <label

              className={`delivery-card ${
                deliveryTime==="standard"
                  ? "active"
                  : ""
              }`}

            >

              <input

                type="radio"

                checked={

                  deliveryTime==="standard"

                }

                onChange={()=>

                  setDeliveryTime("standard")

                }

              />

              <div className="delivery-content">

                <div>

                  <h3>

                    🚗 Standard Delivery

                  </h3>

                  <p>

                    35-45 Minutes

                  </p>

                </div>

              </div>

            </label>

          </div>

          {/* Payment */}

          <div className="checkout-card">

            <h2>

              <FaCreditCard />

              Payment Method

            </h2>
                        <label
              className={`payment-card ${
                payment === "upi" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                checked={payment === "upi"}
                onChange={() => setPayment("upi")}
              />

              <div>

                <h3>

                  <FaMobileAlt />

                  UPI

                </h3>

                <p>

                  Google Pay • PhonePe • Paytm

                </p>

              </div>

            </label>

            <label
              className={`payment-card ${
                payment === "card" ? "active" : ""
              }`}
            >

              <input
                type="radio"
                checked={payment === "card"}
                onChange={() => setPayment("card")}
              />

              <div>

                <h3>

                  <FaCreditCard />

                  Credit / Debit Card

                </h3>

                <p>

                  Visa • Mastercard • RuPay

                </p>

              </div>

            </label>

            <label
              className={`payment-card ${
                payment === "cod" ? "active" : ""
              }`}
            >

              <input
                type="radio"
                checked={payment === "cod"}
                onChange={() => setPayment("cod")}
              />

              <div>

                <h3>

                  <FaMoneyBillWave />

                  Cash On Delivery

                </h3>

                <p>

                  Pay after receiving your food

                </p>

              </div>

            </label>

          </div>

        </div>

        {/* RIGHT */}

        <div className="checkout-summary">

          <h2>

            🛒 Order Summary

          </h2>

          {cart.map((item)=>(

            <div
              key={item.id}
              className="summary-item"
            >

              <div>

                <h4>

                  {item.name}

                </h4>

                <p>

                  Qty : {item.quantity}

                </p>

              </div>

              <strong>

                ₹{item.price * item.quantity}

              </strong>

            </div>

          ))}

          <hr />

          <div className="summary-row">

            <span>

              Subtotal

            </span>

            <span>

              ₹{totalPrice}

            </span>

          </div>

          <div className="summary-row">

            <span>

              Delivery Fee

            </span>

            <span>

              ₹{deliveryFee}

            </span>

          </div>

          <div className="summary-row">

            <span>

              GST (5%)

            </span>

            <span>

              ₹{tax}

            </span>

          </div>

          {/* Coupon Tickets */}

          <div className="available-coupons">

            <h3>

              <FaTag />

              Available Coupons

            </h3>

            {

              coupons.map((coupon)=>(

                <div

                  key={coupon.code}

                  className={`coupon-card ${
                    selectedCoupon===coupon.code
                    ? "selected-coupon"
                    : ""
                  }`}

                >

                  <div>

                    <h4>

                      {coupon.code}

                    </h4>

                    <p>

                      {

                        coupon.type==="flat"

                        ?

                        `Flat ₹${coupon.discount} OFF`

                        :

                        `${coupon.discount}% OFF`

                      }

                    </p>

                  </div>

                  <button

                    onClick={()=>

                      applyCoupon(coupon.code)

                    }

                  >

                    {

                      selectedCoupon===coupon.code

                      ?

                      "Applied"

                      :

                      "Apply"

                    }

                  </button>

                </div>

              ))

            }

          </div>

          {/* Manual Coupon */}

          <div className="coupon-container">

            <input

              className="coupon"

              placeholder="Have another coupon?"

              value={couponCode}

              onChange={(e)=>

                setCouponCode(e.target.value)

              }

            />

            <button

              className="apply-btn"

              onClick={()=>

                applyCoupon()

              }

            >

              Apply

            </button>

          </div>

          {

            couponMessage && (

              <div className="coupon-success">

                <FaCheckCircle />

                <span>

                  {couponMessage}

                </span>

              </div>

            )

          }

          <div className="summary-row discount">

            <span>

              Discount

            </span>

            <span>

              - ₹{discount}

            </span>

          </div>

          <hr />

          <div className="summary-row total">

            <span>

              Grand Total

            </span>

            <span>

              ₹{grandTotal}

            </span>

          </div>

          <div className="secure-box">

            <FaLock />

            <span>

              100% Secure Payments • SSL Encrypted

            </span>

          </div>

          <Link
            to="/payment"
            style={{ textDecoration:"none" }}
          >

            <button className="place-btn">

              Continue to Payment →

            </button>

          </Link>

        </div>

      </div>

    </>

  );

}

export default Checkout;