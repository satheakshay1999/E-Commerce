
import './App.css';
import Home from './Comonents/Home';
import Navbar from './Comonents/Navbar';
import {Routes,Route} from "react-router-dom"
import Products from './Comonents/Products';
import Product from './Comonents/Product';
import Cart from './Comonents/Cart';
import Checkout from './Comonents/Checkout';
import Footer from './Comonents/Footer';
import About from './Comonents/About';
import Contact from './Comonents/Contact';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} ></Route>
      <Route  exact path="/Products" element={<Products />}></Route>
      <Route  exact path="/Products/:id" element={<Product />}></Route>
      <Route  exact path="/cart" element={<Cart />}></Route>
      <Route  exact path="/checkout" element={<Checkout />}></Route>
      <Route  exact path="/About" element={<About />}></Route>
      <Route  exact path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
