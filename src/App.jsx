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
import { ToastContainer } from "react-toastify";
import Terms from "./Components/Terms";

function App() {
  return (
    <>
      <Router>
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <div className="fixed top-0 w-full relative ">
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<RedeemCodeScreen />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route  path="/congratulation" element={<Congratulations />} />
          <Route  path="/terms&condition" element={<Terms />} />

        </Routes>
        <Footer />
      </Router>

      {/* <RedeemCodeScreen/> */}
    </>
  );
}

export default App;
