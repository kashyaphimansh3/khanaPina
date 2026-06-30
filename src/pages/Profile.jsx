import { Link, useNavigate } from "react-router-dom";

import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
  FaBox,
  FaCog,
  FaSignOutAlt,
  FaEdit,
  FaKey,
  FaHome,
} from "react-icons/fa";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import "../styles/profile.css";

function Profile() {

  const navigate = useNavigate();

  return (

    <>

      <Navbar />

      <div className="container profile-page">

        {/* LEFT */}

        <div className="profile-sidebar">

          <FaUserCircle className="profile-avatar" />

          <h2>

            Himanshi Kashyap

          </h2>

          <p>

            Food Explorer 🍔

          </p>

          <Link
            to="/edit-profile"
            style={{ textDecoration: "none" }}
          >

            <button className="edit-btn">

              <FaEdit />

              Edit Profile

            </button>

          </Link>

        </div>

        {/* RIGHT */}

        <div className="profile-content">

          {/* Personal Information */}

          <div className="profile-card">

            <h2>

              Personal Information

            </h2>

            <div className="info-row">

              <FaEnvelope />

              <span>

                himanshi@gmail.com

              </span>

            </div>

            <div className="info-row">

              <FaPhone />

              <span>

                +91 9876543210

              </span>

            </div>

          </div>

          {/* Address */}

          <div className="profile-card">

            <h2>

              Default Address

            </h2>

            <div className="info-row">

              <FaMapMarkerAlt />

              <span>

                Burari, Delhi - 110084

              </span>

            </div>

          </div>

          {/* Quick Actions */}

          <div className="profile-card">

            <h2>

              Quick Actions

            </h2>

            <div className="action-grid">

              <Link
                to="/orders"
                className="action-card"
              >

                <FaBox />

                <span>

                  My Orders

                </span>

              </Link>

              <Link
                to="/wishlist"
                className="action-card"
              >

                <FaHeart />

                <span>

                  Wishlist

                </span>

              </Link>

              <Link
                to="/saved-addresses"
                className="action-card"
              >

                <FaHome />

                <span>

                  Saved Addresses

                </span>

              </Link>

              <Link
                to="/forgot-password"
                className="action-card"
              >

                <FaKey />

                <span>

                  Forgot Password

                </span>

              </Link>

              <Link
                to="/edit-profile"
                className="action-card"
              >

                <FaEdit />

                <span>

                  Edit Profile

                </span>

              </Link>

              <Link
                to="#"
                className="action-card"
              >

                <FaCog />

                <span>

                  Settings

                </span>

              </Link>

            </div>

          </div>

          {/* Logout */}

          <button

            className="logout-btn"

            onClick={() => navigate("/login")}

          >

            <FaSignOutAlt />

            Logout

          </button>

        </div>

      </div>

      <Footer />

    </>

  );

}

export default Profile;