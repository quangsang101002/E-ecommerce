import "./App.css";
import ImageSlider from "./component/GlobalStyle/Slider/ImageSlider";
import { SliderData } from "./component/GlobalStyle/Slider/SliderData";
import Navbar from "./component/Pages/Navbar/Navbar";
import Products from "./component/Pages/Products/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./component/Pages/Home/Home";
import About from "./component/Pages/About/About";
import Contact from "./component/Pages/Contact/Contact";
import Product from "./component/Pages/Product/Product";
import Cart from "./component/Pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<ImageSlider slides={SliderData} />} />
          {/* <Route path="/" element={<Products />} /> */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
