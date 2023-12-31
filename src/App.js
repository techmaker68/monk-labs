import "./App.css";
import Index from "./Pages";
import ProductDetails from "./Pages/productDetails.js";
import MyBucket from "./Pages/myBucket.js";
import Success from "./Pages/success.js";
import Checkout from "./Pages/checkout.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product-detail/:detail" element={<ProductDetails />} />
        <Route path="/my-bucket" element={<MyBucket />} />
        <Route path="/success" element={<Success />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
