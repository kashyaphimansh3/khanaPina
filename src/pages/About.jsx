import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../styles/about.css";

function About() {
  return (
    <>
      <Navbar />

      <section className="about-hero">

        <div className="container">

          <h1>About QuickBite</h1>

          <p>
            Delivering delicious food from your favourite
            restaurants to your doorstep quickly and safely.
          </p>

        </div>

      </section>

      <section className="container about-content">

        <div className="about-card">

          <h2>Our Story</h2>

          <p>

            QuickBite was created with one mission —
            making food ordering simple, fast and enjoyable.
            Whether you're craving pizza, burgers, biryani
            or desserts, QuickBite connects you with the
            best restaurants near you.

          </p>

        </div>

        <div className="about-grid">

          <div className="about-box">

            <h3>🚀 Fast Delivery</h3>

            <p>
              Fresh food delivered in
              20–30 minutes.
            </p>

          </div>

          <div className="about-box">

            <h3>🍔 Best Restaurants</h3>

            <p>
              Hundreds of trusted restaurants
              at one place.
            </p>

          </div>

          <div className="about-box">

            <h3>💳 Secure Payments</h3>

            <p>
              UPI, Cards and Cash on
              Delivery.
            </p>

          </div>

          <div className="about-box">

            <h3>⭐ Customer First</h3>

            <p>
              24×7 support with excellent
              customer experience.
            </p>

          </div>

        </div>

      </section>

      <section className="stats-section">

        <div className="container stats-grid">

          <div>

            <h2>10K+</h2>

            <p>Happy Customers</p>

          </div>

          <div>

            <h2>500+</h2>

            <p>Restaurants</p>

          </div>

          <div>

            <h2>50K+</h2>

            <p>Orders Delivered</p>

          </div>

          <div>

            <h2>4.8★</h2>

            <p>Average Rating</p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;