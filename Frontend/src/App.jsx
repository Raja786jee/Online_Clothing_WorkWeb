import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import HomePage1 from "./components/Homepage1";
import Products from "./components/Products";
import Products2 from "./components/Products2";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { CartProvider } from "./Context/CartContext"; // Import CartProvider
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Men from "./components/Men";
import Women from "./components/Women";

function App() {
  return (
    <CartProvider> {/* Wrap the entire app with CartProvider */}
      <div className="min-h-screen bg-cover bg-[#fff] bg-center bg-no-repeat bg-fixed">
        <Routes>
          {/* Default Route */}
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Homepage />
                <Products />
                <HomePage1 />
                <Products2 />
                <Footer />
              </>
            }
          />

          {/* Shop Route */}
          {/* <Route
            path="/Shop"
            element={
              <>
                <Nav />
                <Shop />
                <Products />
                <HomePage1 />
                <Products2 />
                <Footer />
              </>
            }
          /> */}

          {/* Contact Route */}
          <Route
            path="/Contact"
            element={
              <>
                <Nav />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Cart Route */}
          <Route
            path="/Cart"
            element={
              <>
                <Nav />
                <Cart />
                <Footer />
              </>
            }
          />

          {/* Men Route */}
          <Route
            path="/Men"
            element={
              <>
                <Nav />
                <Men />
                <Footer />
              </>
            }
          />

          {/* Women Route */}
          <Route
            path="/Women"
            element={
              <>
                <Nav />
                <Women />
                <Footer />
              </>
            }
          />

          {/* About Us Route */}
          <Route
            path="/about"
            element={
              <>
                <Nav />
                <AboutUs />
                <Footer />
              </>
            }
          />

          {/* Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Sign Up Route */}
          <Route path="/signup" element={<SignUp />} />

          {/* Additional Routes */}
          {/* <Route path="/products" element={<Products />} />
          <Route path="/products2" element={<Products2 />} /> */}
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;