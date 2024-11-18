import './App.css';

function TopMeals() {
  const meals = [
    {
      name: 'Burger Deluxe',
      description: 'A delicious deluxe burger with all the fixings.',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Pizza Supreme',
      description: 'An ultimate pizza with fresh ingredients.',
      image: 'https://images.unsplash.com/photo-1710102349455-9f672a905d62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Sushi Rolls',
      description: 'Fresh sushi rolls with a variety of flavors.',
      image: 'https://plus.unsplash.com/premium_photo-1712949154611-6fd79879f884?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Pasta Alfredo',
      description: 'Creamy Alfredo pasta made to perfection.',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Grilled Chicken',
      description: 'Tender grilled chicken served with veggies.',
      image: 'https://plus.unsplash.com/premium_photo-1695931844305-b5dd90ab6138?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Tacos',
      description: 'Tasty tacos with a choice of fillings.',
      image: 'https://plus.unsplash.com/premium_photo-1661776649804-6bfa4fc14d09?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Steak & Fries',
      description: 'Juicy steak with crispy fries.',
      image: 'https://images.unsplash.com/photo-1598679253544-2c97992403ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Salad Bowl',
      description: 'Fresh mixed salad with healthy toppings.',
      image: 'https://images.unsplash.com/photo-1646487793655-bbf280273d2f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <div className="top-meals">
      <h2>Our Top Meals</h2>
      <p>Here are some of our top meals you should try!</p>
      <div className="meal-list">
        {meals.map((meal, index) => (
          <div className="meal-item" key={index}>
            <img src={meal.image} alt={meal.name} className="meal-image" />
            <h3 className="meal-name">{meal.name}</h3>
            <p className="meal-desc">{meal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopMeals;
