import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const product = (props) => {
  console.log(props);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="product img not available" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p>by: {seller}</p>
        <p>${price}</p>
        <p>
          <small>Only {stock} left in the stock: order soon!</small>{" "}
        </p>

        <button onClick = {()=> props.handleAddProduct(props.product)}
        className = "main-button"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
      </div>
    </div>
  );
};

export default product;
