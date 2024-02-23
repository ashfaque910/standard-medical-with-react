import React from "react";
// import { faker } from "@faker-js/faker";
import SingleProducts from "./SingleProducts";
import { useState } from "react";
import "./SingleProducts.css";
import { content } from "./ContentData";

// faker.seed(100);

function HomeCart({ cart, setCart }) {
  // const productsArray = content.map(() => ({
    //   id: faker.string.uuid(),
    //   name: faker.commerce.productName({ category: "abstract" }),
    //   price: faker.commerce.price(),
    //   image: faker.image.urlLoremFlickr({ category: "medicines" }),
   
  // }));
  // console.log(productsArray);

  const [products] = useState(content);
  // console.log(cart);
  return (
    <div>
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProducts
            prod={prod}
            cart={cart}
            setCart={setCart}
            key={prod.id}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeCart;
