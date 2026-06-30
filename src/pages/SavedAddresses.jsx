import { useState } from "react";

import {
  FaHome,
  FaBuilding,
  FaMapMarkerAlt,
  FaPlus,
  FaTrash,
  FaEdit,
  FaCheckCircle,
} from "react-icons/fa";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import "../styles/address.css";

function SavedAddresses() {

  const [addresses] = useState([

    {
      id:1,
      type:"Home",
      address:"H.No 245, Sant Nagar, Burari",
      city:"Delhi",
      pincode:"110084",
      default:true
    },

    {
      id:2,
      type:"Office",
      address:"Sector 62",
      city:"Noida",
      pincode:"201301",
      default:false
    }

  ]);

  return(

    <>

      <Navbar />

      <div className="container address-page">

        <div className="address-header">

          <h1>

            Saved Addresses

          </h1>

          <button
    className="add-address-btn"
    onClick={() => alert("Address form will be connected in backend")}
>

            <FaPlus />

            Add Address

          </button>

        </div>

        {

          addresses.map(address=>(

            <div
              key={address.id}
              className="address-card"
            >

              <div className="address-left">

                <div className="address-icon">

                  {

                    address.type==="Home"

                    ?

                    <FaHome/>

                    :

                    <FaBuilding/>

                  }

                </div>

                <div>

                  <h2>

                    {address.type}

                  </h2>

                  <p>

                    <FaMapMarkerAlt />

                    {" "}

                    {address.address}

                  </p>

                  <p>

                    {address.city} - {address.pincode}

                  </p>

                  {

                    address.default &&

                    <span className="default-badge">

                      <FaCheckCircle />

                      Default

                    </span>

                  }

                </div>

              </div>

              <div className="address-actions">

                <button className="edit-address">

                  <FaEdit />

                  Edit

                </button>

                <button className="delete-address">

                  <FaTrash />

                  Delete

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

export default SavedAddresses;