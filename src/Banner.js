import './App.css';

function Banner() {
  return (
    <div className="hero-section">
      <div className="hero-left">
        <h1 className="hero-heading">Grab More More, Spend Less</h1>
        <p className="hero-subheading">
          FUEL YOUR BEST LIFE WITH THE BEST SELF WITH EVERY BITE.
        </p>
        <p className="hero-description">
          Enjoy the finest flavors delivered straight to your door, with incredible discounts and unbeatable quality! We believe every meal should be an experience, and we’re here to make that happen for you.
        </p>
        <button className="hero-btn">Order Now </button>
      </div>
      <div className="hero-right">
        <img src="https://images.unsplash.com/photo-1506458961255-571f40df5aad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Food visualization" className="hero-image" />
      </div>
    </div>
  );
}

export default Banner;
