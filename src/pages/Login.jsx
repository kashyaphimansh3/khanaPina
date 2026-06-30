import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";

import Navbar from "../components/layout/Navbar";
import "../styles/login.css";

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="login-page container">

        {/* Left Side */}

        <div className="login-left">

          <h1>Welcome Back 👋</h1>

          <p>
            Login to continue ordering your favourite food with QuickBite.
          </p>

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800"
            alt="Food"
          />

        </div>

        {/* Right Side */}

        <div className="login-card">

          <h2>Login</h2>

          <p className="subtitle">
            Enter your credentials below.
          </p>

          {/* Email */}

          <div className="input-box">

            <FaEnvelope className="input-icon" />

            <input
              type="email"
              placeholder="Email Address"
            />

          </div>

          {/* Password */}

          <div className="input-box">

            <FaLock className="input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >

              {showPassword ? <FaEyeSlash /> : <FaEye />}

            </button>

          </div>

          {/* Options */}

          <div className="login-options">

            <label>

              <input type="checkbox" />

              Remember Me

            </label>

            <Link to="/forgot-password">
    Forgot Password?
</Link>

          </div>

          {/* Login Button */}

          <button
            className="login-btn-full"
            onClick={() => navigate("/")}
          >

            Login

          </button>

          {/* Google */}

          <button className="google-btn">

            <FaGoogle />

            Continue with Google

          </button>

          {/* Signup */}

          <p className="signup-text">

            Don't have an account?

            <Link to="/signup">

              Sign Up

            </Link>

          </p>

        </div>

      </div>

    </>
  );
}

export default Login;