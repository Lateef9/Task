import './App.css';
function Logo() {
    return (
        <div className="logo">
            <h1>FoodieExpress</h1>
            <img src={require('./Logo.png')} alt="Logo" />
        </div>
    );
}
export default Logo;