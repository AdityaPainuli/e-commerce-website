import "./App.css";
import { Navbar, RowProducts, Showcase, Footer, CTA } from "./components";
import { men_product_data } from "./media/data";
import { women_product_data } from "./media/data";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <RowProducts title="Men Best Wears" list={men_product_data} />
      <RowProducts title="Women Best Wears" list={women_product_data} />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
