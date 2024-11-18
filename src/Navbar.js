import './App.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <h1>Foodex</h1>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search dishes" className="searchbar" />
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href="#home">Home</a></li>

            <a href="#Meals">Our Meals <span className="dropdown-symbol">▼</span></a>
          <li><a href="#Subscribe">Subscribe</a></li>
          <li><a href="#more">More</a></li>
        </ul>
      </div>
      <div className="navbar-login">
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
