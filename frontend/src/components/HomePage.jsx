import React from 'react';
import './HomePage.css';

function Homepage() {
  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <h1>Personalized Banking Experience</h1>
        <nav>
          <ul>
            <li><a href="#">Recommendations</a></li>
            <li><a href="#">Financial Insights</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h2>Unlock personalized banking solutions.</h2>
        <button>Get Started</button>
      </section>

      <section className="featured-products">
        <h3>Featured Products</h3>
        <div className="product-cards">
          <div className="card">
            <h4>Credit Cards</h4>
            <p>Get cashback or travel rewards tailored to your spending habits.</p>
          </div>
          <div className="card">
            <h4>Loans</h4>
            <p>Find the right loan for your needs, from personal to mortgage loans.</p>
          </div>
          <div className="card">
            <h4>Investments</h4>
            <p>Invest wisely with portfolios aligned to your risk tolerance.</p>
          </div>
        </div>
      </section>

      <section className="mood-based-recommendations">
        <h3>Recommendations based on your mood.</h3>
        <div className="mood-cards">
          <div className="mood-card">
            <h4>Relaxed</h4>
            <p>Consider a savings plan for long-term stability.</p>
          </div>
          <div className="mood-card">
            <h4>Ambitious</h4>
            <p>Explore investment opportunities that match your growth goals.</p>
          </div>
          <div className="mood-card">
            <h4>Cautious</h4>
            <p>Review your emergency fund to ensure you're prepared.</p>
          </div>
        </div>
      </section>

      <section className="spending-insights">
        <h3>Your spending insights.</h3>
        <div className="charts">
          {/* Add charts or graphs here */}
        </div>
      </section>

      <footer>
        <p>Contact Us: info@example.com</p>
        <p>Disclaimer: Terms and conditions apply.</p>
      </footer>
    </div>
  );
}

export default Homepage;
