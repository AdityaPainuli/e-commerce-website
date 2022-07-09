import "./App.css";
import { Navbar, RowProducts, Showcase, Footer, CTA } from "./components";
import { men_product_data } from "./media/data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { women_product_data } from "./media/data";
import { useState } from "react";
import Login from "./Login/Login";
import CartComponent from "./Cart/CartComponent";
import { auth } from "./firebase";

function App() {
  const [cart, setCart] = useState([]);
  const [userEmail, setUserEmail] = useState("");

  const LoogedUser = () => {
    const user = auth.currentUser;
    if (user !== null) {
      const email = user.email;
      setUserEmail(email);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar cart={cart} username={userEmail} />
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
                <Navbar cart={cart} username={userEmail} />
                <CartComponent
                  cart={cart}
                  setCart={setCart}
                  username={userEmail}
                />
              </div>
            }
          />
          <Route
            path="/login-signup"
            element={
              <div>
                <Navbar cart={cart} username={userEmail} />
                <Login loogedUser={LoogedUser} />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
