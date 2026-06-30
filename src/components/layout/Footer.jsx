import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* Company */}

        <div className="footer-column">

          <h2>🍛 KhanaPina</h2>

          <p>
            Delicious food delivered to your doorstep.
            Fast, fresh and affordable.
          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/faq">FAQ</Link>

          <Link to="/privacy">Privacy Policy</Link>

        </div>

        {/* Services */}

        <div className="footer-column">

          <h3>Services</h3>

          <p>Food Delivery</p>

          <p>Takeaway</p>

          <p>Online Payment</p>

          <p>Restaurant Booking</p>

          <p>24×7 Support</p>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Contact</h3>

          <p>
            <FaMapMarkerAlt />
            Delhi, India
          </p>

          <p>
            <FaPhone />
            +91 9876543210
          </p>

          <p>
            <FaEnvelope />
            support@quickbite.com
          </p>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © 2026 QuickBite. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;