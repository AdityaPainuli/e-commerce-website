import "./rowproducts.css";
import { Product } from "../../containers";

// Will take two props {title ,product_list}
//  There will be a child component who will use product_list to show the data of the list ..
const RowProducts = ({ title, list }) => {
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
          />
        ))}
      </div>
    </div>
  );
};

export default RowProducts;
