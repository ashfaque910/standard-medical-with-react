import React, { useEffect, useState } from "react";
import SingleProducts from "./SingleProducts";

function Carts({ cart, setCart }) {
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div className="text-center">
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: ₹ {total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProducts
            prod={prod}
            key={prod.id}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Carts;
