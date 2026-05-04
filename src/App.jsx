import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Sales from './pages/Sales';
import './App.css';
import image from './assets/image.png';
import { useState } from 'react';


function App() {

const [products, setProducts] = useState([
  {id:0, name: 'sugar', price:190, stock:50},
  {id:1, name: 'rice', price:200, stock: 20}
]);
  return (
    <>
    <nav className="top-nav">
    <Link to="/" className="logo-Link">
    
    <img src = {image}/>
    </Link>
      <div className="nav-links">
        <Link to="/" className='nav-item' >Home</Link> 
        <Link to="/products" className='nav-item'>Products</Link> 
        <Link to="/sales" className='nav-item'>Sales</Link>
        <Link to="/customer" className='nav-item'>Customer</Link>
        <Link to="/supplier" className='nav-item'>Supplier</Link>
        <Link to="/report" className='nav-item'>Report</Link>
      </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={products} setProducts={setProducts} />} />
        <Route path="/sales" element={<Sales products={products} setProducts={setProducts} />} />
        
      </Routes>
    </>
  );
}

export default App;