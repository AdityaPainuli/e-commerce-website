import "./rowproducts.css";
import { Product } from "../../containers";
// Will take two props {title ,product_list}
//  There will be a child component who will use product_list to show the data of the list ..
const RowProducts = ({ title, list, cart, setCart }) => {
  const add_to_cart = (product_id) => {
    console.log(product_id);
    // Filter out product based on id and add that particular product to the cart .
    // list.map((product) => {
    //   setCart(product.filter((c) => c.id === product_id));
    // });
    setCart(list.filter((c) => c.id === product_id));
  };
  return (
    <div className="row__products">
      <h1>{title}</h1>
      <div className="product__section">
        {list.map((product) => (
          <Product
            name={product.product_title}
            img={product.img}
            variant={product.variant}
            cut_price={product.cut_price}
            price={product.price}
            key={product.id}
            id={product.id}
            product_list={list}
            setCart={setCart}
            cart={cart}
          />
        ))}
      </div>
    </div>
  );
};

export default RowProducts;
