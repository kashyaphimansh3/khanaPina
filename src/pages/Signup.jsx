import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";

import Navbar from "../components/layout/Navbar";
import "../styles/signup.css";

function Signup() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <Navbar />

      <div className="signup-page container">

        {/* LEFT */}

        <div className="signup-left">

          <h1>Create Account 🚀</h1>

          <p>

            Join QuickBite and enjoy delicious food delivered to your doorstep.

          </p>

          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800"
            alt="Food"
          />

        </div>

        {/* RIGHT */}

        <div className="signup-card">

          <h2>Sign Up</h2>

          <p className="subtitle">

            Fill in the details below.

          </p>

          {/* Name */}

          <div className="input-box">

            <FaUser className="input-icon"/>

            <input
              type="text"
              placeholder="Full Name"
            />

          </div>

          {/* Email */}

          <div className="input-box">

            <FaEnvelope className="input-icon"/>

            <input
              type="email"
              placeholder="Email Address"
            />

          </div>

          {/* Phone */}

          <div className="input-box">

            <FaPhone className="input-icon"/>

            <input
              type="tel"
              placeholder="Phone Number"
            />

          </div>

          {/* Password */}

          <div className="input-box">

            <FaLock className="input-icon"/>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >

              {showPassword ? <FaEyeSlash/> : <FaEye/>}

            </button>

          </div>

          {/* Confirm Password */}

          <div className="input-box">

            <FaLock className="input-icon"/>

            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >

              {showConfirmPassword ? <FaEyeSlash/> : <FaEye/>}

            </button>

          </div>

          <label className="terms">

            <input type="checkbox"/>

            I agree to the Terms & Conditions

          </label>

          <button
            className="signup-btn-full"
            onClick={() => navigate("/login")}
          >

            Create Account

          </button>

          <button className="google-btn">

            <FaGoogle/>

            Continue with Google

          </button>

          <p className="login-text">

            Already have an account?

            <Link to="/login">

              Login

            </Link>

          </p>

        </div>

      </div>

    </>
  );
}

export default Signup;