import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { useCart } from "../context/CartContext";
import "../styles/payment.css";

function Payment() {

    const { totalPrice } = useCart();

    const delivery = 49;

    const tax = Math.round(totalPrice * 0.05);

    const total = totalPrice + delivery + tax;

    const [method, setMethod] = useState("upi");

    return (

        <>

            <Navbar/>

            <div className="container payment-page">

                <div className="payment-left">

                    <h1>

                        Payment

                    </h1>

                    <p>

                        Choose your preferred payment method.

                    </p>

                    <div className="payment-card">

                        <h2>

                            Payment Method

                        </h2>

                        <label className={method==="upi"?"payment-option active":"payment-option"}>

                            <input

                                type="radio"

                                checked={method==="upi"}

                                onChange={()=>setMethod("upi")}

                            />

                            📱 UPI

                        </label>

                        <label className={method==="card"?"payment-option active":"payment-option"}>

                            <input

                                type="radio"

                                checked={method==="card"}

                                onChange={()=>setMethod("card")}

                            />

                            💳 Credit / Debit Card

                        </label>

                        <label className={method==="cod"?"payment-option active":"payment-option"}>

                            <input

                                type="radio"

                                checked={method==="cod"}

                                onChange={()=>setMethod("cod")}

                            />

                            💵 Cash On Delivery

                        </label>

                    </div>
                                        {/* UPI */}

                    {method === "upi" && (

                        <div className="payment-card">

                            <h2>UPI Payment</h2>

                            <div className="upi-box">

                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=QuickBitePayment"
                                    alt="QR Code"
                                />

                                <p>
                                    Scan using Google Pay, PhonePe or Paytm
                                </p>

                            </div>

                        </div>

                    )}

                    {/* CARD */}

                    {method === "card" && (

                        <div className="payment-card">

                            <h2>Card Details</h2>

                            <input
                                type="text"
                                placeholder="Card Holder Name"
                            />

                            <input
                                type="text"
                                placeholder="Card Number"
                            />

                            <div className="row">

                                <input
                                    type="text"
                                    placeholder="MM / YY"
                                />

                                <input
                                    type="password"
                                    placeholder="CVV"
                                />

                            </div>

                        </div>

                    )}

                    {/* COD */}

                    {method === "cod" && (

                        <div className="payment-card">

                            <h2>Cash On Delivery</h2>

                            <p>

                                You can pay in cash when your order arrives at
                                your doorstep.

                            </p>

                        </div>

                    )}

                </div>

                {/* RIGHT */}

                <div className="payment-summary">

                    <h2>Order Summary</h2>

                    <div className="summary-row">

                        <span>Subtotal</span>

                        <span>₹{totalPrice}</span>

                    </div>

                    <div className="summary-row">

                        <span>Delivery Fee</span>

                        <span>₹{delivery}</span>

                    </div>

                    <div className="summary-row">

                        <span>Tax</span>

                        <span>₹{tax}</span>

                    </div>

                    <hr />

                    <div className="summary-row total">

                        <span>Total</span>

                        <span>₹{total}</span>

                    </div>

                    <button
                        className="pay-btn"
                        onClick={() => {

                            alert("🎉 Payment Successful!");

                            window.location.href="/orders";

                        }}
                    >

                        Pay ₹{total}

                    </button>

                </div>

            </div>

        </>

    );

}

export default Payment;