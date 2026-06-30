import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import "../styles/forgotPassword.css";

function ForgotPassword() {

  const [email, setEmail] = useState("");

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    if(email.trim()==="") return;

    setSuccess(true);

  };

  return (

    <>

      <Navbar />

      <div className="forgot-page">

        <div className="forgot-card">

          {

            !success

            ?

            <>

              <h1>

                Forgot Password?

              </h1>

              <p>

                Enter your registered email address.
                We'll send you a password reset link.

              </p>

              <form onSubmit={handleSubmit}>

                <div className="forgot-input">

                  <FaEnvelope />

                  <input

                    type="email"

                    placeholder="Enter Email"

                    value={email}

                    onChange={(e)=>

                      setEmail(e.target.value)

                    }

                    required

                  />

                </div>

                <button
                  className="forgot-btn"
                >

                  Send Reset Link

                </button>

              </form>

            </>

            :

            <>

              <FaCheckCircle className="success-icon"/>

              <h1>

                Email Sent

              </h1>

              <p>

                A password reset link has been sent to

              </p>

              <strong>

                {email}

              </strong>

            </>

          }

          <Link
            to="/login"
            className="back-login"
          >

            <FaArrowLeft />

            Back to Login

          </Link>

        </div>

      </div>

      <Footer />

    </>

  );

}

export default ForgotPassword;