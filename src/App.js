import "./App.css";
import { Navbar, RowProducts, Showcase, Footer } from "./components";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello e-commerce website.</h1>
      <p className="lead-color">
        Hello there, it's a dummy text here.QUALITY PRODUCTS We always go for
        the best. Premium product and no quality compromise.
      </p>
      <button>Check out</button>
      <button className="btn-dark">Check out</button>
      <button className="btn-light">Check out</button>
      <span className="cutted">$1300</span>
      <span>$1000</span> */}
      <Navbar />
      <RowProducts />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
