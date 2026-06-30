import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaMotorcycle,
  FaStar,
  FaSearch,
} from "react-icons/fa";

import "../../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">

        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="tag">
            🍛 KhanaPina • India's Favourite Food Delivery
          </span>

          <h1>
            Delicious food,
            <br />
            delivered
            <br />
            before you're hungry.
          </h1>

          <p>
            Discover thousands of restaurants,
            exclusive offers and lightning-fast delivery
            directly to your doorstep.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Order Now
              <FaArrowRight />
            </button>

            <button className="secondary-btn">
              Explore Menu
            </button>
          </div>

          <div className="hero-search">
            <FaSearch />

            <input
              type="text"
              placeholder="Search burgers, pizza, biryani..."
            />
          </div>

          <div className="hero-stats">
            <div>
              <FaStar />

              <h3>4.9</h3>

              <p>Rating</p>
            </div>

            <div>
              <FaMotorcycle />

              <h3>20 min</h3>

              <p>Delivery</p>
            </div>

            <div>
              🍽️

              <h3>500+</h3>

              <p>Restaurants</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-icon">
            🍛
          </div>

          <div className="floating-card top">
            🚴 Fast Delivery
          </div>

          <div className="floating-card middle">
            ⭐ Trusted by 30K+
          </div>

          <div className="floating-card bottom">
            🎁 Flat 40% OFF
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;