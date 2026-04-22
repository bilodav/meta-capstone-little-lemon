import React from "react";
import foodPhoto from "../assets/restauranfood.jpg";
import greekSalad from "../assets/greek salad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon dessert.jpg";
import headShot1 from "../assets/headshot-1.jpg";
import headShot2 from "../assets/headshot-2.jpg";
import headShot3 from "../assets/headshot-3.jpg";
import headShot4 from "../assets/headshot-4.jpg";
import mario1 from "../assets/Mario and Adrian A.jpg";
import mario2 from "../assets/Mario and Adrian b.jpg";

function Homepage() {
  return (
    <div>
      {/* ---- HERO SECTION ---- */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button>Reserve a Table</button>
          </div>
          <div className="hero-image">
            <img src={foodPhoto} alt="Delicious food" />
          </div>
        </div>
      </section>

      {/* ---- SPECIALS SECTION ---- */}
      <section className="specials">
        <div className="specials-header">
          <h2>This weeks specials!</h2>
          <button>Online Menu</button>
        </div>

        <div className="specials-cards">
          {/* Card 1 */}
          <div className="card">
            <img src={greekSalad} alt="Greek Salad" />
            <div className="card-info">
              <span>Greek Salad</span>
              <span className="price">$12.99</span>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <p>
              Order a delivery{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#495e57"
                  d="M176 32c44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80l0-16c0-8.8 7.2-16 16-16zM56 64l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24S42.7 64 56 64zM24 136l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 96c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zM272 48c0-8.8 7.2-16 16-16 44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80l0-16zM400 32c44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80l0-16c0-8.8 7.2-16 16-16zm80 160l0 16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16zM352 176c8.8 0 16 7.2 16 16l0 16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80zm-96 16l0 16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16zM3.5 347.6C1.6 332.9 13 320 27.8 320l456.4 0c14.8 0 26.2 12.9 24.4 27.6-6.3 50.2-44.4 89.4-92.6 98.4l0 2c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-2c-48.2-9-86.3-48.2-92.5-98.4z"
                />
              </svg>
            </p>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src={bruchetta} alt="Bruchetta" />
            <div className="card-info">
              <span>Bruchetta</span>
              <span className="price">$5.99</span>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <p>
              Order a delivery{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#495e57"
                  d="M176 32c44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80l0-16c0-8.8 7.2-16 16-16zM56 64l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24S42.7 64 56 64zM24 136l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 96c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zM272 48c0-8.8 7.2-16 16-16 44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80l0-16zM400 32c44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80l0-16c0-8.8 7.2-16 16-16zm80 160l0 16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16zM352 176c8.8 0 16 7.2 16 16l0 16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80zm-96 16l0 16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16zM3.5 347.6C1.6 332.9 13 320 27.8 320l456.4 0c14.8 0 26.2 12.9 24.4 27.6-6.3 50.2-44.4 89.4-92.6 98.4l0 2c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-2c-48.2-9-86.3-48.2-92.5-98.4z"
                />
              </svg>
            </p>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src={lemonDessert} alt="Lemon Dessert" />
            <div className="card-info">
              <span>Lemon Dessert</span>
              <span className="price">$5.00</span>
            </div>
            <p>
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <p>
              Order a delivery{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#495e57"
                  d="M176 32c44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80l0-16c0-8.8 7.2-16 16-16zM56 64l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24S42.7 64 56 64zM24 136l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 96c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zM272 48c0-8.8 7.2-16 16-16 44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80l0-16zM400 32c44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80l0-16c0-8.8 7.2-16 16-16zm80 160l0 16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16zM352 176c8.8 0 16 7.2 16 16l0 16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80zm-96 16l0 16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16zM3.5 347.6C1.6 332.9 13 320 27.8 320l456.4 0c14.8 0 26.2 12.9 24.4 27.6-6.3 50.2-44.4 89.4-92.6 98.4l0 2c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-2c-48.2-9-86.3-48.2-92.5-98.4z"
                />
              </svg>
            </p>
          </div>
        </div>
      </section>
      {/* ---- TESTIMONIALS SECTION ---- */}
      <section className="testimonials">
        <div className="testimonials-container">
          <h2>Testimonials</h2>
          <div className="testimonials-cards">
            <div className="testimonial-card">
              <p className="rating">⭐⭐⭐⭐⭐</p>
              <div className="customer">
                <img src={headShot1} alt="Customer 1" />
                <span>Sarah D.</span>
              </div>
              <p>Fantastic food and great service, we coming back again</p>
            </div>

            <div className="testimonial-card">
              <p className="rating">⭐⭐⭐⭐⭐</p>
              <div className="customer">
                <img src={headShot2} alt="Customer 2" />
                <span>Laura M.</span>
              </div>
              <p>Its the best little restaurant ever. </p>
            </div>

            <div className="testimonial-card">
              <p className="rating">⭐⭐⭐⭐⭐</p>
              <div className="customer">
                <img src={headShot3} alt="Customer 3" />
                <span>Mike R.</span>
              </div>
              <p>Peaceful restaurant with beautiful aromatic food.</p>
            </div>

            <div className="testimonial-card">
              <p className="rating">⭐⭐⭐⭐⭐</p>
              <div className="customer">
                <img src={headShot4} alt="Customer 4" />
                <span>Emma L.</span>
              </div>
              <p>The best Greek Salad in town. Loved it!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- ABOUT SECTION ---- */}
      <section className="about">
        <div className="about-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. Our chefs draw
            inspiration from Italian, Greek, and Turkish cuisine, using only the
            freshest locally sourced ingredients.
          </p>
        </div>
        <div className="about-images">
          <img className="about-img-back" src={mario2} alt="Restaurant" />
          <img className="about-img-front" src={mario1} alt="Team" />
        </div>
      </section>
    </div>
  );
}

export default Homepage;
