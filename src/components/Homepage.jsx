import React from "react";

function Homepage() {
  return (
    <div>
      {/* ---- HERO SECTION ---- */}
      <section className="hero">
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
          <img src="food.jpg" alt="Delicious food" />
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
            <img src="greek-salad.jpg" alt="Greek Salad" />
            <div className="card-info">
              <span>Greek Salad</span>
              <span className="price">$12.99</span>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src="bruchetta.jpg" alt="Bruchetta" />
            <div className="card-info">
              <span>Bruchetta</span>
              <span className="price">$5.99</span>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src="lemon-dessert.jpg" alt="Lemon Dessert" />
            <div className="card-info">
              <span>Lemon Dessert</span>
              <span className="price">$5.00</span>
            </div>
            <p>
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
          </div>
        </div>
      </section>
      {/* ---- TESTIMONIALS SECTION ---- */}
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-cards">
          <div className="testimonial-card">
            <p className="rating">⭐⭐⭐⭐⭐</p>
            <div className="customer">
              <img src="customer1.jpg" alt="Customer 1" />
              <span>John D.</span>
            </div>
            <p>Review text</p>
          </div>

          <div className="testimonial-card">
            <p className="rating">⭐⭐⭐⭐⭐</p>
            <div className="customer">
              <img src="customer2.jpg" alt="Customer 2" />
              <span>Sarah M.</span>
            </div>
            <p>Review text</p>
          </div>

          <div className="testimonial-card">
            <p className="rating">⭐⭐⭐⭐⭐</p>
            <div className="customer">
              <img src="customer3.jpg" alt="Customer 3" />
              <span>Mike R.</span>
            </div>
            <p>Review text</p>
          </div>

          <div className="testimonial-card">
            <p className="rating">⭐⭐⭐⭐⭐</p>
            <div className="customer">
              <img src="customer4.jpg" alt="Customer 4" />
              <span>Emma L.</span>
            </div>
            <p>Review text</p>
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
          <img
            className="about-img-back"
            src="restaurant2.jpg"
            alt="Restaurant"
          />
          <img className="about-img-front" src="restaurant1.jpg" alt="Team" />
        </div>
      </section>
    </div>
  );
}

export default Homepage;
