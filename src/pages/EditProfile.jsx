import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCamera } from "react-icons/fa";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import "../styles/editProfile.css";

function EditProfile() {

  const [user, setUser] = useState({

    name: "Himanshi Kashyap",

    email: "himanshi@gmail.com",

    phone: "9876543210",

    image:
      "https://cdn-icons-png.flaticon.com/512/847/847969.png"

  });

  const handleChange = (e) => {

    setUser({

      ...user,

      [e.target.name]: e.target.value

    });

  };

  const handleSave = () => {

    alert("Profile Updated Successfully!");

  };

  return (

    <>

      <Navbar />

      <div className="container edit-profile-page">

        <div className="profile-card">

          <h1>

            Edit Profile

          </h1>

          {/* Profile Image */}

          <div className="profile-image-section">

            <img

              src={user.image}

              alt="Profile"

            />

            <button>

              <FaCamera />

              Change Photo

            </button>

          </div>

          {/* Name */}

          <div className="input-group">

            <label>

              <FaUser />

              Full Name

            </label>

            <input

              type="text"

              name="name"

              value={user.name}

              onChange={handleChange}

            />

          </div>

          {/* Email */}

          <div className="input-group">

            <label>

              <FaEnvelope />

              Email Address

            </label>

            <input

              type="email"

              name="email"

              value={user.email}

              onChange={handleChange}

            />

          </div>

          {/* Phone */}

          <div className="input-group">

            <label>

              <FaPhone />

              Phone Number

            </label>

            <input

              type="text"

              name="phone"

              value={user.phone}

              onChange={handleChange}

            />

          </div>

          <button

            className="save-profile-btn"

            onClick={handleSave}

          >

            Save Changes

          </button>

        </div>

      </div>

      <Footer />

    </>

  );

}

export default EditProfile;