import './App.css';

function SubscribeLetter() {
  return (
    <div className="stay-updated">
      <div className="stay-updated-content">
        <h2>Stay Updated with Our Latest Offers</h2>
        <p>Subscribe to our newsletter and be the first to know about exciting offers, new dishes, and more!</p>
        <div className="subscribe-form">
          <input
            type="email"
            className="email-input"
            placeholder="Enter your email address"
          />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default SubscribeLetter;
