import React from 'react';
import product from '../Product/Product';

const Cart = (props) => {
    const cart = props.cart;

    //total
    const total = cart.reduce((total, element) => total + element.price, 0);

    //Shipping Cost
    let shipping = 0;
    if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    else if(total > 35){
        shipping = 0;
    }


    //Tax
    const tax = total / 10
    console.log(tax, shipping, total)


    //Total price
    const totalPrice = total + shipping + tax;


    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Oder Summary</h4>
    <p>Items ordered: {cart.length}</p>
    <p>Product Price: {formatNumber(total)}</p>
    <p>Shipping cost: {formatNumber(shipping)} </p>
    <p>Tax Charge : {formatNumber(tax)}</p>
    
    <p>Total price: {formatNumber(totalPrice)}</p>
   
        </div>
    );
};

export default Cart;