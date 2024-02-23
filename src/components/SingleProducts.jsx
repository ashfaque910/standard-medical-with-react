import React from "react";

function SingleProducts({ prod, cart, setCart }) {
  
  return (
    <div className="products">
      <img src={prod.image} alt="" />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>₹ {prod.price}</span>
      </div>
      {cart.includes(prod)? (<button
        className="remove"
        onClick={() => {
          setCart(cart.filter((c) => c.id !== prod.id));
        }}
      >
        Remove from Cart
      </button>):( <button
        className="add"
        onClick={() => {
          setCart([...cart, prod]);
        }}
      >
        Add to Cart
      </button>)}
     
      
    </div>
  );
}

export default SingleProducts;
