import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import RedeemCodeScreen from "./Components/RedeemCodeScreen";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Checkout from "./Components/Checkout";
import Congratulations from "./Components/Congratulations";

function App() {
  return (
    <>
      <Router>
        <div className="fixed top-0 w-full relative ">
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<RedeemCodeScreen />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/checkout" element={<Checkout/>} />
          <Route exact path="/congratulation" element={<Congratulations/>} />



        </Routes>
        <Footer />
      </Router>

      {/* <RedeemCodeScreen/> */}
    </>
  );
}

export default App;
