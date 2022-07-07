import "./App.css";
import { Navbar, RowProducts, Showcase, Footer, CTA } from "./components";
import { men_product_data } from "./media/data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { women_product_data } from "./media/data";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar cart={cart} />
                <Showcase />
                <RowProducts
                  title="Men Best Wears"
                  list={men_product_data}
                  cart={cart}
                  setCart={setCart}
                />
                <RowProducts
                  title="Women Best Wears"
                  list={women_product_data}
                  cart={cart}
                  setCart={setCart}
                />
                <CTA />
                <Footer />
              </div>
            }
          />
          <Route
            path="/cart"
            element={
              <div>
                <Navbar />
                <h1>Hello carts page</h1>
              </div>
            }
          />
          <Route
            path="/login-signup"
            element={
              <div>
                <Navbar />
                <h1>Login page.</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
